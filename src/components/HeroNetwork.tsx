import { useEffect, useRef } from "react";

const RAMP = ["#0B57BE", "#04A9E8", "#0C9791", "#12924F"];

type Node = { x: number; y: number; vx: number; vy: number; r: number };
type Packet = { l: number; t: number; sp: number };

export default function HeroNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const c = canvas;
    const g = ctx;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0;
    let H = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let links: [number, number][] = [];
    let packets: Packet[] = [];
    let mx = -9999;
    let my = -9999;
    let raf: number | null = null;

    function build() {
      const count = Math.max(34, Math.min(96, Math.round((W * H) / 11000)));
      nodes = [];
      links = [];
      packets = [];
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.16,
          vy: (Math.random() - 0.5) * 0.16,
          r: Math.random() * 1.7 + 0.9,
        });
      }
      const maxd = Math.min(W, H) * 0.2;
      for (let a = 0; a < nodes.length; a++) {
        for (let b = a + 1; b < nodes.length; b++) {
          const dx = nodes[a].x - nodes[b].x;
          const dy = nodes[a].y - nodes[b].y;
          if (Math.hypot(dx, dy) < maxd) links.push([a, b]);
        }
      }
      for (let p = 0; p < Math.min(9, links.length); p++) {
        packets.push({
          l: Math.floor(Math.random() * links.length),
          t: Math.random(),
          sp: 0.0022 + Math.random() * 0.0032,
        });
      }
    }

    function size() {
      const rect = c.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      c.width = W * dpr;
      c.height = H * dpr;
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    }

    function drawStatic() {
      g.clearRect(0, 0, W, H);
      const maxd = Math.min(W, H) * 0.2;
      g.lineWidth = 0.6;
      for (const [a, b] of links) {
        const A = nodes[a];
        const B = nodes[b];
        const d = Math.hypot(A.x - B.x, A.y - B.y);
        if (d > maxd) continue;
        g.strokeStyle = `rgba(94,158,226,${(0.4 * (1 - d / maxd)).toFixed(3)})`;
        g.beginPath();
        g.moveTo(A.x, A.y);
        g.lineTo(B.x, B.y);
        g.stroke();
      }
      for (const n of nodes) {
        g.fillStyle = "rgba(146,199,245,.70)";
        g.beginPath();
        g.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        g.fill();
      }
    }

    function draw() {
      g.clearRect(0, 0, W, H);
      const maxd = Math.min(W, H) * 0.2;

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
        const ddx = n.x - mx;
        const ddy = n.y - my;
        const dd = Math.hypot(ddx, ddy);
        if (dd < 130 && dd > 0) {
          n.x += (ddx / dd) * 0.5;
          n.y += (ddy / dd) * 0.5;
        }
      }

      g.lineWidth = 0.6;
      for (const [a, b] of links) {
        const A = nodes[a];
        const B = nodes[b];
        const d = Math.hypot(A.x - B.x, A.y - B.y);
        if (d > maxd) continue;
        g.strokeStyle = `rgba(94,158,226,${(0.4 * (1 - d / maxd)).toFixed(3)})`;
        g.beginPath();
        g.moveTo(A.x, A.y);
        g.lineTo(B.x, B.y);
        g.stroke();
      }

      for (const n of nodes) {
        g.fillStyle = "rgba(146,199,245,.70)";
        g.beginPath();
        g.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        g.fill();
      }

      for (let z = 0; z < packets.length; z++) {
        const pk = packets[z];
        const ln = links[pk.l];
        if (!ln) continue;
        const P = nodes[ln[0]];
        const Q = nodes[ln[1]];
        pk.t += pk.sp;
        if (pk.t > 1) {
          pk.t = 0;
          pk.l = Math.floor(Math.random() * links.length);
        }
        const px = P.x + (Q.x - P.x) * pk.t;
        const py = P.y + (Q.y - P.y) * pk.t;
        g.fillStyle = RAMP[z % RAMP.length];
        g.beginPath();
        g.arc(px, py, 2.2, 0, Math.PI * 2);
        g.fill();
      }

      raf = requestAnimationFrame(draw);
    }

    function onMove(e: MouseEvent) {
      const rect = c.getBoundingClientRect();
      mx = e.clientX - rect.left;
      my = e.clientY - rect.top;
    }

    function onLeave() {
      mx = -9999;
      my = -9999;
    }

    size();
    if (reduce) drawStatic();
    else raf = requestAnimationFrame(draw);

    window.addEventListener("resize", size);
    c.addEventListener("mousemove", onMove);
    c.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("resize", size);
      c.removeEventListener("mousemove", onMove);
      c.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas className="home-hero__network" ref={canvasRef} aria-hidden />;
}
