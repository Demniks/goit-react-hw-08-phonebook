import { Outlet } from 'react-router-dom';
import { AppBarHeader } from './AppBar/AppBar.jsx';
import { Suspense } from 'react';
import { Paper } from '@mui/material';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ParticlesBack from './Particles.jsx';

export const Layout = () => {
  return (
    <>
      <Paper
        sx={{ minHeight: '100vh', background: 'radial-gradient(#8a8e65, #33abde)' }}
      >
        <AppBarHeader />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          closeOnClick
          theme="light"
        />
      </Paper>
      <ParticlesBack />
    </>
  );
};
