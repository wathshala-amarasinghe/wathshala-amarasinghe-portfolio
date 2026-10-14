"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const VIDEO_SOURCE =
  "/videos/background/Wathshala-Portfolio-Wave-Background.mp4";

interface NavigatorWithConnection extends Navigator {
  connection?: {
    saveData?: boolean;
  };
}

export function AmbientBackground() {
  const pathname = usePathname();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldRenderVideo, setShouldRenderVideo] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let startTimer: number | undefined;

    const renderVideo = () => {
      setShouldRenderVideo(true);
      window.clearTimeout(startTimer);
    };

    const scheduleVideoAfterInteraction = () => {
      removeStartListeners();
      window.clearTimeout(startTimer);
      startTimer = window.setTimeout(renderVideo, 2_500);
    };

    const removeStartListeners = () => {
      window.removeEventListener("pointerdown", scheduleVideoAfterInteraction);
      window.removeEventListener("keydown", scheduleVideoAfterInteraction);
      window.removeEventListener("scroll", scheduleVideoAfterInteraction);
    };

    const updateVideoPreference = () => {
      window.clearTimeout(startTimer);
      const connection = (navigator as NavigatorWithConnection).connection;
      const canPlay =
        pathname === "/" &&
        desktop.matches &&
        !reducedMotion.matches &&
        !connection?.saveData;

      if (!canPlay) {
        removeStartListeners();
        setShouldRenderVideo(false);
        setIsReady(false);
        return;
      }

      window.addEventListener("pointerdown", scheduleVideoAfterInteraction, {
        once: true,
      });
      window.addEventListener("keydown", scheduleVideoAfterInteraction, {
        once: true,
      });
      window.addEventListener("scroll", scheduleVideoAfterInteraction, {
        once: true,
      });
      startTimer = window.setTimeout(renderVideo, 10_000);
    };

    updateVideoPreference();
    desktop.addEventListener("change", updateVideoPreference);
    reducedMotion.addEventListener("change", updateVideoPreference);

    return () => {
      window.clearTimeout(startTimer);
      removeStartListeners();
      desktop.removeEventListener("change", updateVideoPreference);
      reducedMotion.removeEventListener("change", updateVideoPreference);
    };
  }, [pathname]);

  useEffect(() => {
    if (!shouldRenderVideo) return;

    const updatePlayback = () => {
      const video = videoRef.current;
      if (!video) return;

      if (document.hidden) {
        video.pause();
      } else {
        void video.play().catch(() => undefined);
      }
    };

    document.addEventListener("visibilitychange", updatePlayback);
    return () =>
      document.removeEventListener("visibilitychange", updatePlayback);
  }, [shouldRenderVideo]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[radial-gradient(circle_at_78%_24%,rgba(107,25,31,0.22),transparent_48%),linear-gradient(145deg,#110d0d_0%,#08090d_58%)]"
    >
      {shouldRenderVideo && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          onCanPlay={() => setIsReady(true)}
          className={`absolute h-full w-full object-cover mix-blend-screen transition-opacity duration-700 ${
            isReady ? "opacity-30" : "opacity-0"
          }`}
        >
          <source src={VIDEO_SOURCE} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
    </div>
  );
}
