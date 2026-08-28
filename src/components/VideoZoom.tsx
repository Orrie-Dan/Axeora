import { useEffect, useRef } from "react";

type Props = {
  src: string;
  poster: string;
};

export default function VideoZoom({ src, poster }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let killed = false;
    let ctx: { revert: () => void } | null = null;

    async function setup() {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (killed) return;
      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current;
      const zoomEl = wrapRef.current;
      const video = videoRef.current;
      const playButton = playRef.current;
      if (!section || !zoomEl) return;

      const play = () => {
        if (playButton) playButton.style.display = "none";
        video?.play().catch(() => {});
      };
      playButton?.addEventListener("click", play);
      video?.addEventListener("ended", () => {
        if (playButton) playButton.style.display = "flex";
      });

      ctx = gsap.context(() => {
        const mm = gsap.matchMedia();
        mm.add("(min-width: 992px)", () => {
          gsap.set(zoomEl, { scale: 0.82 });
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (!entry.isIntersecting && video && !video.paused) {
                video.pause();
                if (playButton) playButton.style.display = "flex";
                video.currentTime = 0;
              }
            },
            { threshold: 0 },
          );
          observer.observe(section);
          gsap
            .timeline({
              scrollTrigger: {
                trigger: section,
                start: "top 100px",
                end: "+=40%",
                scrub: 1,
                pin: true,
                anticipatePin: 1,
              },
            })
            .to(zoomEl, { scale: 1, ease: "none" }, 0);
          return () => observer.disconnect();
        });
      }, section);
    }

    setup();
    return () => {
      killed = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section className="home-video-animate" id="home_video" ref={sectionRef}>
      <div className="video-section" ref={wrapRef}>
        <video
          ref={videoRef}
          className="video-player"
          src={src}
          poster={poster}
          playsInline
          preload="metadata"
        />
        <button className="play-button" type="button" ref={playRef} aria-label="Play video">
          ▶
        </button>
      </div>
    </section>
  );
}
