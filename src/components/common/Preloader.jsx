import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Preloader.css";

const Preloader = ({ onComplete }) => {
  const preloaderRef = useRef(null);
  const textRef = useRef(null);
  const fillRef = useRef(null);
  const percentRef = useRef(null);
  const authorRef = useRef(null);
  const progressRef = useRef(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.set(fillRef.current, { clipPath: "inset(0 100% 0 0)" });
    gsap.set(percentRef.current, { opacity: 0, y: 20 });
    gsap.set(authorRef.current, { opacity: 0, y: 10 });

    tl.fromTo(
      textRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
    )
      .to(
        percentRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3",
      )
      .to(
        authorRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3",
      );

    const progressTween = gsap.to(progressRef, {
      current: 100,
      duration: 2.5,
      ease: "power2.inOut",
      onUpdate: () => {
        const progress = Math.round(progressRef.current);
        gsap.set(fillRef.current, {
          clipPath: `inset(0 ${100 - progressRef.current}% 0 0)`,
        });
        if (percentRef.current) {
          percentRef.current.textContent = `${progress}%`;
        }
      },
      onComplete: () => {
        setIsLoaded(true);
      },
    });

    return () => {
      progressTween.kill();
    };
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const exitTl = gsap.timeline({
        onComplete: () => {
          onComplete();
        },
      });

      exitTl
        .to([percentRef.current, authorRef.current], {
          opacity: 0,
          y: -20,
          duration: 0.4,
          ease: "power2.in",
          stagger: 0.1,
        })
        .to(
          fillRef.current,
          {
            opacity: 0,
            scale: 1.1,
            duration: 0.4,
            ease: "power2.in",
          },
          "-=0.2",
        )
        .to(
          textRef.current,
          {
            y: -40,
            opacity: 0,
            duration: 0.5,
            ease: "power3.in",
          },
          "-=0.2",
        )
        .to(
          preloaderRef.current,
          {
            clipPath: "inset(0 0 100% 0)",
            duration: 0.8,
            ease: "power4.inOut",
          },
          "-=0.3",
        );
    }
  }, [isLoaded, onComplete]);

  return (
    <div ref={preloaderRef} className="preloader">
      <div className="preloader-content">
        <div ref={textRef} className="preloader-text-container">
          <span className="preloader-text-outline">agent tool</span>
          <span ref={fillRef} className="preloader-text-fill">
            agent tool
          </span>
        </div>
        <div ref={percentRef} className="preloader-percent">
          0%
        </div>
        <a
          ref={authorRef}
          href="https://github.com/IvanPavlovic-web"
          target="_blank"
          rel="noopener noreferrer"
          className="preloader-author"
        >
          made by Ivan Pavlovic
        </a>
      </div>
    </div>
  );
};

export default Preloader;
