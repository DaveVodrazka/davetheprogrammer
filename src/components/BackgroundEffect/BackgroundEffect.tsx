import { useRef, useEffect, memo } from "react";

type Point = { x: number; y: number; dx: number; dy: number };

type BackgroundEffectProps = {
  width: number;
  height: number;
  offset: number;
  positionShift: number;
  lineWidth: number;
  fadeDistance: number;
  pointSize: number;
  jiggleSpeed: number;
  jiggleIntensity: number;
};

const defaultProps: BackgroundEffectProps = {
  width: 4000,
  height: 3000,
  offset: 70,
  positionShift: 100,
  lineWidth: 0.5,
  fadeDistance: 200,
  pointSize: 2,
  jiggleSpeed: 0.02,
  jiggleIntensity: 5,
};

const simulateMousePath = (element: HTMLElement) => {
  let angle = 0;
  const radius = 100; // pixels
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const interval = setInterval(() => {
    if (!element) return;

    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    const event = new MouseEvent("mousemove", {
      clientX: x,
      clientY: y,
      bubbles: true,
      cancelable: true,
    });

    element.dispatchEvent(event);
    angle += 0.05;
  }, 16); // ~60 FPS

  return () => clearInterval(interval); // Return a cleanup function
};

export const BackgroundEffect = memo(
  (props: Partial<BackgroundEffectProps>) => {
    const {
      width,
      height,
      offset,
      positionShift,
      lineWidth,
      fadeDistance,
      pointSize,
      jiggleSpeed,
      jiggleIntensity,
    } = { ...defaultProps, ...props };
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointsRef = useRef<Point[]>([]);
    const mouseRef = useRef({
      x: 2 * positionShift + width,
      y: 2 * positionShift + height,
    });
    const timeRef = useRef(0);

    const rowLength = Math.ceil(width / offset);
    const pointsCount = rowLength * (Math.ceil(height / offset) + 1);

    const generatePoints = (): Point[] => {
      const points = [];

      for (let index = 0; index < pointsCount; index++) {
        const row = Math.floor(index / rowLength);
        const y = row * offset;
        const x =
          row % 2 === 0
            ? (index % rowLength) * offset
            : (index % rowLength) * offset + offset / 2;

        points.push({
          x,
          y,
          dx: Math.random() * 2 - 1,
          dy: Math.random() * 2 - 1,
        });
      }

      return points;
    };

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = width;
      canvas.height = height;

      if (pointsRef.current.length === 0) {
        pointsRef.current = generatePoints();
      }

      const handleMouseMove = (e: MouseEvent) => {
        mouseRef.current = { x: e.clientX, y: e.clientY };
      };

      window.addEventListener("mousemove", handleMouseMove);

      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const mouse = mouseRef.current;
        const points = pointsRef.current;
        timeRef.current += jiggleSpeed; // Control jiggle speed

        // Compute jiggled positions first
        const jiggledPoints = points.map((point) => {
          const jiggleX =
            Math.sin(timeRef.current + point.dx * 10) * jiggleIntensity;
          const jiggleY =
            Math.cos(timeRef.current + point.dy * 10) * jiggleIntensity;
          return { x: point.x + jiggleX, y: point.y + jiggleY };
        });

        // Draw points
        jiggledPoints.forEach(({ x, y }, i) => {
          const distance = Math.hypot(
            mouse.x - x + positionShift,
            mouse.y - y + positionShift
          );
          const brightness = Math.max(1 - distance / fadeDistance, 0);

          ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
          ctx.beginPath();
          ctx.arc(x, y, pointSize, 0, Math.PI * 2);
          ctx.fill();

          const row = Math.floor(i / rowLength);
          const pos = i % rowLength;

          const neighbors: {
            x: number;
            y: number;
          }[] = [];

          const pushIfExists = (i: number) => {
            if (i >= 0 && i < jiggledPoints.length) {
              neighbors.push(jiggledPoints[i]);
            }
          };

          if (pos < rowLength - 1) {
            pushIfExists(i + 1);
          }
          if (row % 2 === 0) {
            pushIfExists(i + rowLength);
            if (pos > 0) {
              pushIfExists(i + rowLength - 1);
            }
          } else {
            if (pos < rowLength - 1) {
              pushIfExists(i + rowLength + 1);
            }
            pushIfExists(i + rowLength);
          }

          neighbors.forEach((neighbor) => {
            if (!neighbor) return;

            const dist1 = Math.hypot(
              mouse.x - x + positionShift,
              mouse.y - y + positionShift
            );
            const dist2 = Math.hypot(
              mouse.x - neighbor.x + positionShift,
              mouse.y - neighbor.y + positionShift
            );

            const alpha1 = Math.max(1 - dist1 / fadeDistance, 0);
            const alpha2 = Math.max(1 - dist2 / fadeDistance, 0);

            const gradient = ctx.createLinearGradient(
              x,
              y,
              neighbor.x,
              neighbor.y
            );
            gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha1})`);
            gradient.addColorStop(1, `rgba(255, 255, 255, ${alpha2})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = lineWidth;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(neighbor.x, neighbor.y);
            ctx.stroke();
          });
        });

        requestAnimationFrame(draw);
      };

      draw();

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      if (!canvasRef.current) return;
      if (!/Mobi|Android/i.test(navigator.userAgent)) return;

      const cleanup = simulateMousePath(canvasRef.current);
      return cleanup;
    }, []);

    return (
      <canvas
        ref={canvasRef}
        className={`fixed -z-10 w-[${width}px] h-[${height}px] bg-black`}
        style={{ top: `${-positionShift}px`, left: `${-positionShift}px` }}
      />
    );
  }
);
