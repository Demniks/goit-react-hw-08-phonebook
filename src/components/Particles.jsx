
import { useCallback } from 'react';
import Particles from 'react-particles';
// import { Engine } from 'tsparticles-engine';
import { loadFirePreset } from 'tsparticles-preset-fire';

const ParticlesBack = () => {
  const particlesInit = useCallback(async engine => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFirePreset(engine);
  }, []);
  const particlesLoaded = useCallback(async container => {
    // await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 15,
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
            },
          },
          color: {
            value: ['#fdcf58', '#757676', '#f27d0c', '#800909', '#f07f13'],
          },
          //   opacity: {
          //     value: { min: 0.1, max: 0.5 },
          //   },
          opacity: 0,
          size: {
            value: { min: 1, max: 3 },
          },
          move: {
            enable: true,
            speed: 6,
            random: false,
          },
        },
        interactivity: {
          detectsOn: 'window',
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            resize: true,
          },
        },
        background: {
          //   image: 'radial-gradient(#4a0000, #000)',
        //   image: 'radial-gradient(#dbdb56, #773030)',
          opacity: 0,
        },
      }}
    />
  );
};
export default ParticlesBack;
