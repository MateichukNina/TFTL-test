import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './layout';
import { Main } from './main';
import { Who } from '../pages/who';
import { Where } from '../pages/where';
import { What } from '../pages/what';
import { AnimatePresence, motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    x: '-100vw', // Начинаем с выезда слева
  },
  in: {
    opacity: 1,
    x: 0, // Центр экрана
  },
  out: {
    opacity: 0,
    x: '100vw', // Выезд вправо
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.8,
};

const AnimatedRoute = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const location = useLocation();

  return (

    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <AnimatedRoute>
                <Main />
              </AnimatedRoute>
            }
          />
          <Route
            path="who"
            element={
              <AnimatedRoute>
                <Who />
              </AnimatedRoute>
            }
          />
          <Route
            path="where"
            element={
              <AnimatedRoute>
                <Where />
              </AnimatedRoute>
            }
          />
          <Route
            path="what"
            element={
              <AnimatedRoute>
                <What />
              </AnimatedRoute>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}