import React from "react";

export function JsonLd<T extends Record<string, unknown>>({ data }: { data: T }) {
  const safeJson = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJson }}
    />
  );
}
