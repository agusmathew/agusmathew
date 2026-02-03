"use client";

import { useEffect, useRef, useState } from "react";

type Obstacle = {
  x: number;
  width: number;
  height: number;
};

export default function MiniRunner() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const context = ctx;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const logicalWidth = 640;
    const logicalHeight = 220;
    canvas.width = logicalWidth * dpr;
    canvas.height = logicalHeight * dpr;
    canvas.style.width = `${logicalWidth}px`;
    canvas.style.height = `${logicalHeight}px`;
    context.scale(dpr, dpr);

    const groundY = 170;
    const player = {
      x: 70,
      y: groundY,
      r: 14,
      vy: 0,
      onGround: true,
    };
    const gravity = 1200;
    const jumpVelocity = -480;
    const speed = 260;
    const obstacles: Obstacle[] = [];

    function spawnObstacle() {
      const height = 18 + Math.random() * 32;
      const width = 16 + Math.random() * 22;
      obstacles.push({
        x: logicalWidth + 20,
        width,
        height,
      });
    }

    let spawnTimer = 0;
    let distance = 0;

    function reset() {
      obstacles.length = 0;
      player.y = groundY;
      player.vy = 0;
      player.onGround = true;
      spawnTimer = 0;
      distance = 0;
      setScore(0);
      setIsRunning(true);
      lastTimeRef.current = performance.now();
      loop(lastTimeRef.current);
    }

    function jump() {
      if (!isRunning) {
        reset();
        return;
      }
      if (player.onGround) {
        player.vy = jumpVelocity;
        player.onGround = false;
      }
    }

    function handleKey(e: KeyboardEvent) {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        jump();
      }
    }

    function handlePointer() {
      jump();
    }

    function collides(obs: Obstacle) {
      const px = player.x;
      const py = player.y;
      const left = obs.x;
      const right = obs.x + obs.width;
      const top = groundY - obs.height;
      const bottom = groundY;
      const closestX = Math.max(left, Math.min(px, right));
      const closestY = Math.max(top, Math.min(py, bottom));
      const dx = px - closestX;
      const dy = py - closestY;
      return dx * dx + dy * dy < player.r * player.r;
    }

    function loop(time: number) {
      if (!isRunning) return;
      const dt = Math.min((time - lastTimeRef.current) / 1000, 0.05);
      lastTimeRef.current = time;

      player.vy += gravity * dt;
      player.y += player.vy * dt;
      if (player.y >= groundY) {
        player.y = groundY;
        player.vy = 0;
        player.onGround = true;
      }

      spawnTimer += dt;
      if (spawnTimer > 1.1 + Math.random() * 0.6) {
        spawnObstacle();
        spawnTimer = 0;
      }

      for (let i = obstacles.length - 1; i >= 0; i -= 1) {
        obstacles[i].x -= speed * dt;
        if (obstacles[i].x + obstacles[i].width < -20) {
          obstacles.splice(i, 1);
        }
      }

      for (const obs of obstacles) {
        if (collides(obs)) {
          setIsRunning(false);
          setBest((b) => Math.max(b, Math.floor(distance / 10)));
          return;
        }
      }

      distance += speed * dt;
      setScore(Math.floor(distance / 10));

      context.clearRect(0, 0, logicalWidth, logicalHeight);
      context.fillStyle = "rgba(15, 23, 42, 0.8)";
      context.fillRect(0, 0, logicalWidth, logicalHeight);

      context.fillStyle = "rgba(148, 163, 184, 0.35)";
      context.fillRect(0, groundY + 14, logicalWidth, 2);

      context.fillStyle = "#22d3ee";
      context.beginPath();
      context.arc(player.x, player.y, player.r, 0, Math.PI * 2);
      context.fill();

      context.fillStyle = "#38bdf8";
      for (const obs of obstacles) {
        context.fillRect(obs.x, groundY - obs.height, obs.width, obs.height);
      }

      frameRef.current = requestAnimationFrame(loop);
    }

    lastTimeRef.current = performance.now();
    frameRef.current = requestAnimationFrame(loop);

    window.addEventListener("keydown", handleKey);
    canvas.addEventListener("pointerdown", handlePointer);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      window.removeEventListener("keydown", handleKey);
      canvas.removeEventListener("pointerdown", handlePointer);
    };
  }, [isRunning]);

  return (
    <div className="rounded-3xl border border-white/10 bg-[#0f172a]/80 p-6 shadow-[0_20px_60px_rgba(3,7,18,0.45)] backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-base font-semibold text-white">Mini Runner</div>
          <div className="mt-1 text-sm text-slate-300">
            Jump over obstacles. Press Space or click/tap.
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-300">
          <div>
            Score <span className="font-semibold text-white">{score}</span>
          </div>
          <div>
            Best <span className="font-semibold text-white">{best}</span>
          </div>
        </div>
      </div>
      <div className="mt-5 flex justify-center">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-3">
          <canvas ref={canvasRef} className="rounded-xl" />
        </div>
      </div>
      {!isRunning && (
        <div className="mt-4 text-sm text-slate-300">
          Game over. Click or press Space to try again.
        </div>
      )}
    </div>
  );
}
