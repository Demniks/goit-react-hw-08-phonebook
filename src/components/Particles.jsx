// import { useCallback } from 'react';
// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';

// const ParticlesBack = () => {
//   const particlesInit = useCallback(async engine => {
//     // console.log(engine);
//     // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
//     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//     // starting from v2 you can add only the features you need reducing the bundle size
//     await loadFull(engine);
//   }, []);

//   const particlesLoaded = useCallback(async container => {
//     // await console.log(container);
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       loaded={particlesLoaded}
//       options={{
//         background: {
//         //   color: { value: '#709933' },
//             // color: { value: '#336699' },
//           opacity: 0,
//         },

//         fpsLimit: 15,
//         interactivity: {
//           events: {
//             onClick: {
//               enable: true,
//               mode: 'push',
//             },
//             onHover: {
//               enable: true,
//               mode: 'repulse',
//             },
//             resize: true,
//           },
//           modes: {
//             push: {
//               quantity: 4,
//             },
//             repulse: {
//               distance: 200,
//               duration: 0.4,
//             },
//           },
//         },
//         particles: {
//           color: {
//             value: '#92bfec',
//           },
//           links: {
//             color: '#92bfec',
//             distance: 150,
//             enable: true,
//             opacity: 0.2,
//             width: 1,
//           },
//           collisions: {
//             enable: true,
//           },
//           move: {
//             directions: 'none',
//             enable: true,
//             outModes: {
//               default: 'bounce',
//             },
//             random: false,
//             speed: 2,
//             straight: false,
//           },
//           number: {
//             density: {
//               enable: true,
//               area: 800,
//             },
//             value: 80,
//           },
//           opacity: {
//             value: 0.3,
//           },
//           shape: {
//             type: 'star',
//           },
//           size: {
//             value: { min: 0.9, max: 5 },
//           },
//         },
//         detectRetina: true,
//         backgroundMode: true,
//       }}
//     />
//   );
// };

// export default ParticlesBack;

///////////////////////////////////////////////
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
    await console.log(container);
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
