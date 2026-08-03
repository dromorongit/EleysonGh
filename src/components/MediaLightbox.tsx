"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

export interface MediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
}

interface MediaLightboxProps {
  items: MediaItem[];
  index: number | null;
  onIndexChange: (index: number | null) => void;
}

export function MediaLightbox({ items, index, onIndexChange }: MediaLightboxProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);

  const selectedItem = index !== null ? items[index] : null;
  const isVideo = selectedItem?.type === "video";

  const closeMedia = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    onIndexChange(null);
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
  }, [onIndexChange]);

  const goToPrevious = useCallback(() => {
    if (index !== null && index > 0) {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      onIndexChange(index - 1);
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    }
  }, [index, onIndexChange]);

  const goToNext = useCallback(() => {
    if (index !== null && index < items.length - 1) {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      onIndexChange(index + 1);
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    }
  }, [index, items.length, onIndexChange]);

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
      if (index === null) return;
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
  }, [index, closeMedia, goToPrevious, goToNext, isVideo, togglePlayPause]);

  useEffect(() => {
    if (index !== null && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }
    }
  }, [index]);

  useEffect(() => {
    if (index !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [index]);

  const formatTime = (time: number) => {
    if (isNaN(time) || !isFinite(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <AnimatePresence>
      {index !== null && selectedItem && (
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
          {index > 0 && (
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Previous media"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>
          )}

          {/* Next Button */}
          {index < items.length - 1 && (
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
                  alt={selectedItem.alt || `Project media ${index + 1}`}
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
                {index + 1} / {items.length}
              </span>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
