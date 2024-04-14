"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, []);
  return (
    <div>
      <audio ref={audioRef} src={src} loop autoPlay={false} />
      <button
        onClick={togglePlay}
        className="absolute top-0 right-0 z-40 pr-2 pt-2 flex items-end justify-end"
      >
        {isPlaying ? (
          <Image src="/icons/speaker.png" alt="Mute" width={30} height={30} />
        ) : (
          <Image src="/icons/mute.png" alt="Sound On" width={30} height={30} />
        )}
      </button>
    </div>
  );
};
export default AudioPlayer;
