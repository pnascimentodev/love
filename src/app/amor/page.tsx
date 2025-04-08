"use client";

import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

export default function Love() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const createHeart = () => {
      const newHeart: Heart = {
        id: Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 30 + 20,
        speed: Math.random() * 2 + 1,
        opacity: 1,
      };
      setHearts(prev => [...prev, newHeart]);
    };

    const interval = setInterval(() => {
      createHeart();
    }, 500);

    const animationInterval = setInterval(() => {
      setHearts(prev => 
        prev
          .map(heart => ({
            ...heart,
            y: heart.y - heart.speed,
            opacity: heart.opacity - 0.01,
          }))
          .filter(heart => heart.opacity > 0)
      );
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-r from-pink-200 to-purple-200 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-pink-600 text-center z-10 px-4">
          Somente pra lembrar pra você que eu te amo ❤️
        </h1>
      </div>
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            transform: `scale(${heart.size / 30})`,
            opacity: heart.opacity,
          }}
        >
          <div className="text-pink-500 text-4xl animate-pulse">❤️</div>
        </div>
      ))}
    </main>
  );
} 