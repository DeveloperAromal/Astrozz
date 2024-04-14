"use client";
import Image from "next/image";
import React, { useState } from "react";

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <audio ref={audioRef} src={src} autoPlay={false} />
      <button
        onClick={togglePlay}
        className="absolute top-0 right-0 z-40 pr-2 pt-2 flex items-end justify-end"
      >
        {isPlaying ? (
          <Image
            src="/icons/speaker.png"
            alt="Mute"
            width={30}
            height={30}
            className=""
          />
        ) : (
          <Image
            src="/icons/mute.png"
            alt="Sound On"
            width={30}
            height={30}
            className=""
          />
        )}
      </button>
    </div>
  );
};

export default AudioPlayer;
