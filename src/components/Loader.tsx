import React, { useState, useEffect, useRef } from 'react';
import { useAudio } from '../context/AudioContext';

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showEnter, setShowEnter] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(1);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { initializeAudio } = useAudio();

  // Change de vidéo toutes les secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev === 6 ? 1 : prev + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Préchargement des vidéos
  useEffect(() => {
    const preloadVideo = (videoNumber: number) => {
      const video = document.createElement('video');
      video.src = `/${videoNumber}.mp4`;
      video.preload = 'auto';
    };
    for (let i = 1; i <= 6; i++) {
      preloadVideo(i);
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.src = `/${currentVideo}.mp4`;
    video.play().catch(error => console.log('Erreur de lecture:', error));
  }, [currentVideo]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setShowEnter(true);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const handleEnterClick = () => {
    initializeAudio();
    onComplete();
  };

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col" style={{ backgroundImage: 'url(/gridloader.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Logo en haut à gauche */}
      <div className="absolute top-8 left-8">
        <div className="flex flex-col leading-none pl-[24px]">
          <span className="text-white font-ginger text-[90px] tracking-wider">CAVALIER</span>
          <span className="text-white font-ginger text-[90px] tracking-wider pl-16">NOIR</span>
        </div>
      </div>

      {/* Vidéo centrale */}
      <div className="flex-1 flex items-center justify-center">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="w-[300px] h-[300px] object-contain"
          src={`/${currentVideo}.mp4`}
        />
      </div>

      {/* Barre de progression et bouton */}
      <div className="w-full">
        {!showEnter ? (
          <div className="text-center mb-4">
            <span className="text-white font-ginger text-[70px]">{progress}%</span>
          </div>
        ) : (
          <div className="flex justify-center mb-4">
            <button
              onClick={handleEnterClick}
              className="bg-white text-black px-8 font-pp py-2 font-ppbold text-[24px] tracking-wider hover:opacity-90 transition-opacity flex items-center gap-2 rounded-[8px]"
            >
              <span className="text-[24px] font-ppbold">♞</span> ENTER
            </button>
          </div>
        )}
        <div className="w-full h-[1px] bg-white/10">
          <div
            className="h-full bg-white transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader; 