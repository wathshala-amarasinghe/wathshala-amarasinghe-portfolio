"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_SOURCE =
  "/videos/background/Wathshala-Portfolio-Wave-Background.mp4";

export function AmbientBackground({ allowMotion }: { allowMotion: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldRenderVideo, setShouldRenderVideo] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateVideoPreference = () => {
      if (!desktop.matches || reducedMotion.matches) {
        setShouldRenderVideo(false);
        setIsReady(false);
      }
    };

    desktop.addEventListener("change", updateVideoPreference);
    reducedMotion.addEventListener("change", updateVideoPreference);

    return () => {
      desktop.removeEventListener("change", updateVideoPreference);
      reducedMotion.removeEventListener("change", updateVideoPreference);
    };
  }, []);

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
    <>
      {allowMotion && (
        <button
          type="button"
          onClick={() => {
            setIsReady(false);
            setShouldRenderVideo(!shouldRenderVideo);
          }}
          className="fixed right-4 bottom-4 z-20 hidden min-h-10 items-center rounded-full border border-white/15 bg-[var(--color-bg)] px-3 text-xs text-[var(--color-text-primary)] lg:motion-safe:flex"
        >
          {shouldRenderVideo
            ? "Stop background motion"
            : "Play background motion"}
        </button>
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[radial-gradient(circle_at_78%_24%,rgba(107,25,31,0.22),transparent_48%),linear-gradient(145deg,#110d0d_0%,#08090d_58%)]"
      >
        {allowMotion && shouldRenderVideo && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            onCanPlay={() => setIsReady(true)}
            onError={() => {
              setShouldRenderVideo(false);
              setIsReady(false);
            }}
            className={`absolute h-full w-full object-cover mix-blend-screen transition-opacity duration-700 ${
              isReady ? "opacity-30" : "opacity-0"
            }`}
          >
            <source src={VIDEO_SOURCE} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>
    </>
  );
}
