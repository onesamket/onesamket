
"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import { type ISourceOptions } from "@tsparticles/engine";
import React from "react";
const BackgroundAnimation = () => {
  const [init, setInit] = useState(false);

  // @ts-ignore
  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: true,
      },
      fpsLimit: 60,
      particles: {
        groups: {
          z5000: {
            number: {
              value: 70,
            },
            zIndex: {
              value: 5000,
            },
          },
          z7500: {
            number: {
              value: 30,
            },
            zIndex: {
              value: 75,
            },
          },
          z2500: {
            number: {
              value: 50,
            },
            zIndex: {
              value: 25,
            },
          },
          z1000: {
            number: {
              value: 40,
            },
            zIndex: {
              value: 10,
            },
          },
        },
        number: {
          value: 200,
          density: {
            enable: false,
            value_area: 800,
          },
        },
        color: {
          value: [
            "#e02c2c",
            "#1940d1",
            "#edf416",
            "#23c60d",
            "#b57405",
            "#b10dc6",
            "#f3ebf4",
            "#0fbdc6",
          ],
          animation: {
            enable: false,
            speed: 10,
            sync: true,
          },
        },
        shape: {
          type: ["circle", "star", "polygon", "stroke"],
        },
        opacity: {
          value: 1,
          random: true,
          animation: {
            enable: false,
            speed: 3,
            minimumValue: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
        },
        links: {
          enable: false,
          distance: 100,
          color: "#F3F3F3",
          opacity: 0.4,
          width: 1,
        },
        move: {
          angle: {
            value: 10,
            offset: 0,
          },
          enable: true,
          speed: 5,
          direction: ["inside", "outside"],
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
        zIndex: {
          value: 5,
          opacityRate: 0.5,
        },
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            links: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 0.8,
          },
          repulse: {
            distance: 200,
          },
          push: {
            quantity: 4,
            groups: ["z5000", "z7500", "z2500", "z1000"],
          },
          remove: {
            quantity: 2,
          },
        },
      },
      detectRetina: true,
      backgroundAnimation: {
        color: "dark:bg-slate-900 bg-slate-200",
        image: "",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover",
      },
      emitters: {
        position: {
          y: 55,
          x: -30,
        },
        rate: {
          delay: 7,
          quantity: 1,
        },
        size: {
          width: 0,
          height: 0,
        },
        particles: {
          shape: {
            type: ["circle", "polygon", "star"],
          },
          size: {
            value: 20,
          },
          move: {
            speed: 10,
            outModes: {
              default: "destroy",
              left: "none",
            },
            straight: false,
          },
          zIndex: {
            value: 0,
          },
          rotate: {
            value: {
              min: 0,
              max: 360,
            },
            animation: {
              enable: true,
              speed: 10,
              sync: true,
            },
          },
        },
      },
    }),
    []
  );

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return <div className="loading-spinner " />;

  return (
    <Particles
      className="-z-50 h-full w-full"
      id="tsparticles"
      options={options}
    />
  );
};

export default BackgroundAnimation;
