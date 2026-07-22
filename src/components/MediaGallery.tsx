"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

interface MediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
}

interface MediaGalleryProps {
  items: MediaItem[];
}

export function MediaGallery({ items }: MediaGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);

  const selectedItem = selectedIndex !== null ? items[selectedIndex] : null;
  const isVideo = selectedItem?.type === "video";

  const openMedia = useCallback((index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeMedia = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setSelectedIndex(null);
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    document.body.style.overflow = "";
  }, []);

  const goToPrevious = useCallback(() => {
    if (selectedIndex !== null && selectedIndex > 0) {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      setSelectedIndex(selectedIndex - 1);
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    }
  }, [selectedIndex]);

  const goToNext = useCallback(() => {
    if (selectedIndex !== null && selectedIndex < items.length - 1) {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      setSelectedIndex(selectedIndex + 1);
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    }
  }, [selectedIndex, items.length]);

  const togglePlayPause = useCallback(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  }, [isMuted]);

  const toggleFullscreen = useCallback(() => {
    if (!modalRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      modalRef.current.requestFullscreen();
    }
  }, []);

  const handleTimeUpdate = useCallback(() => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration || 0;
    setCurrentTime(current);
    setProgress(total > 0 ? (current / total) * 100 : 0);
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration || 0);
  }, []);

  const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const seekTime = (parseFloat(e.target.value) / 100) * duration;
    videoRef.current.currentTime = seekTime;
    setProgress(parseFloat(e.target.value));
  }, [duration]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchStartX.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    const threshold = 50;
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
    touchStartX.current = 0;
  }, [goToNext, goToPrevious]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      switch (e.key) {
        case "Escape":
          closeMedia();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
        case " ":
          if (isVideo) {
            e.preventDefault();
            togglePlayPause();
          }
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, closeMedia, goToPrevious, goToNext, isVideo, togglePlayPause]);

  useEffect(() => {
    if (selectedIndex !== null && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }
    }
  }, [selectedIndex]);

  const formatTime = (time: number) => {
    if (isNaN(time) || !isFinite(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg cursor-pointer group aspect-video"
            onClick={() => openMedia(index)}
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeMedia();
              }
            }}
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-label="Media viewer"
          >
            {/* Close Button */}
            <button
              onClick={closeMedia}
              className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close media viewer"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Previous Button */}
            {selectedIndex > 0 && (
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Previous media"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>
            )}

            {/* Next Button */}
            {selectedIndex < items.length - 1 && (
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Next media"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
            )}

            {/* Media Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl max-h-[90vh] w-full mx-4 flex items-center justify-center"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {isVideo ? (
                <div className="relative w-full">
                  <video
                    ref={videoRef}
                    src={selectedItem.src}
                    className="w-full max-h-[80vh] rounded-lg"
                    controls
                    autoPlay
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />
                </div>
              ) : (
                <div className="relative">
                  <Image
                    src={selectedItem.src}
                    alt={selectedItem.alt || `Project media ${selectedIndex + 1}`}
                    width={1920}
                    height={1080}
                    className="max-w-full max-h-[85vh] object-contain rounded-lg"
                  />
                </div>
              )}
            </motion.div>

            {/* Image Counter */}
            {!isVideo && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <span className="text-white text-sm">
                  {selectedIndex + 1} / {items.length}
                </span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
