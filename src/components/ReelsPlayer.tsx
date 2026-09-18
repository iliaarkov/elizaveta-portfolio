"use client";

import React, { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

interface ReelsPlayerProps {
  src: string;
  title?: string;
}

export const ReelsPlayer = ({ src, title }: ReelsPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressContainerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Обновление прогресс-бара
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration || 1;
      setProgress((current / duration) * 100);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  // Перемотка по клику на прогресс-бар
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!progressContainerRef.current || !videoRef.current) return;
    const rect = progressContainerRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newPercent = Math.max(0, Math.min(1, clickX / width));
    videoRef.current.currentTime = newPercent * videoRef.current.duration;
    setProgress(newPercent * 100);
  };

  return (
    <div className="flex flex-col gap-3">
      <div 
        className="relative aspect-[9/16] w-full rounded-2xl md:rounded-3xl overflow-hidden bg-phthalo/80 border border-atlantis/20 shadow-xl select-none group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          onTimeUpdate={handleTimeUpdate}
          className="w-full h-full object-cover"
        />

        {/* Затемнение поверх при наведении или паузе */}
        <div 
          className={`absolute inset-0 bg-phthalo/30 transition-opacity duration-300 pointer-events-none ${
            !isPlaying || isHovered ? "opacity-100" : "opacity-0"
          }`} 
        />

        {/* Кнопка MUTE/UNMUTE — заметная в правом верхнем углу */}
        <button
          type="button"
          onClick={toggleSound}
          className="absolute top-3 right-3 z-30 p-2.5 rounded-full bg-phthalo/70 backdrop-blur-md border border-phlox/30 text-phlox hover:text-coral hover:scale-110 transition-all shadow-md"
          title={isMuted ? "Включить звук" : "Выключить звук"}
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>

        {/* Кнопка PLAY / PAUSE по центру (по клику / наведению) */}
        <div 
          className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-300 ${
            !isPlaying ? "opacity-100 scale-100" : isHovered ? "opacity-70 scale-90" : "opacity-0 scale-75"
          }`}
        >
          <div className="p-4 rounded-full bg-phthalo/80 border border-coral/40 text-coral shadow-2xl backdrop-blur-sm">
            {isPlaying ? <Pause size={24} /> : <Play size={24} className="translate-x-0.5" />}
          </div>
        </div>

        {/* ПОЛЗУНОК В СТИЛЕ IPHONE (снизу видео) */}
        <div 
          ref={progressContainerRef}
          onClick={handleSeek}
          className="absolute bottom-3 left-4 right-4 z-20 h-4 flex items-center cursor-pointer group/bar"
        >
          {/* Серая дорожка */}
          <div className="relative w-full h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            {/* Заполненная часть */}
            <div 
              className="h-full bg-coral transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
          {/* Круглый бегунок на конце (появляется при наведении) */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-md transition-opacity duration-150 pointer-events-none opacity-0 group-hover/bar:opacity-100"
            style={{ left: `calc(${progress}% - 5px)` }}
          />
        </div>
      </div>

      {/* Подпись к видео */}
      {title && (
        <p className="text-center text-xs md:text-sm text-periwinkle/80 font-medium tracking-wide">
          {title}
        </p>
      )}
    </div>
  );
};