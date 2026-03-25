import { useRef, useCallback } from 'react';

export function useTickSound(soundPath: string = '/sound/tick.wav') {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const initAudio = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(soundPath);
      audioRef.current.volume = 0.5;
    }
  }, [soundPath]);

  const playTick = useCallback(() => {
    initAudio();
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  }, [initAudio]);

  return { playTick };
}