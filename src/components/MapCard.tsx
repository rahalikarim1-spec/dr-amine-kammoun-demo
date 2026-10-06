"use client";

import { useState } from "react";
import { PinIcon, ExternalIcon } from "./Icons";

interface Props {
  embedSrc: string;
  viewUrl: string;
  directionsUrl: string;
  title: string;
  labels: { load: string; view: string; directions: string; privacy: string };
  place: string;
}

/** Click-to-load map: no third-party request (and no cookies) until the visitor asks for it. */
export function MapCard({ embedSrc, viewUrl, directionsUrl, title, labels, place }: Props) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="card overflow-hidden">
      <div className="relative aspect-[16/10] w-full bg-teal-50">
        {loaded ? (
          <iframe src={embedSrc} title={title} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 h-full w-full border-0" allowFullScreen />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
            <svg className="absolute inset-0 h-full w-full text-teal-200/70" aria-hidden="true" preserveAspectRatio="xMidYMid slice" viewBox="0 0 400 250" fill="none" stroke="currentColor">
              <path d="M-10 60 C 80 40, 140 120, 230 90 S 360 60, 420 100" strokeWidth="10" />
              <path d="M40 -10 C 70 80, 120 130, 110 270" strokeWidth="8" />
              <path d="M260 -10 C 250 70, 300 150, 280 270" strokeWidth="6" />
              <path d="M-10 190 C 100 170, 200 220, 420 170" strokeWidth="7" />
            </svg>
            <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-teal-700 text-white shadow-lift"><PinIcon /></span>
            <p className="relative font-semibold text-ink">{place}</p>
            <button type="button" onClick={() => setLoaded(true)} className="btn btn-primary relative !min-h-[44px] !py-2 text-sm" data-track="map_click" data-track-location="map-load">{labels.load}</button>
            <p className="relative max-w-xs text-xs text-ink-mute">{labels.privacy}</p>
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-3 p-4">
        <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary !min-h-[44px] !py-2 text-sm" data-track="map_click" data-track-location="map-directions">
          {labels.directions} <ExternalIcon className="h-4 w-4" />
        </a>
        <a href={viewUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary !min-h-[44px] !py-2 text-sm" data-track="map_click" data-track-location="map-view">
          {labels.view} <ExternalIcon className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
