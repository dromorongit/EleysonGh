"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { MediaLightbox, type MediaItem } from "./MediaLightbox";

interface MediaGalleryProps {
  items: MediaItem[];
}

export function MediaGallery({ items }: MediaGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg cursor-pointer group aspect-video"
            onClick={() => setSelectedIndex(index)}
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={item.alt || `Project media ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <video
                src={item.src}
                className="w-full h-full object-cover"
                muted
              />
            )}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:from-black/40 transition-all duration-300">
              {item.type === "video" ? (
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <Play className="w-6 h-6 text-black ml-1" />
                </div>
              ) : (
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <MediaLightbox items={items} index={selectedIndex} onIndexChange={setSelectedIndex} />
    </>
  );
}
