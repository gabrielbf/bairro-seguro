import React, { lazy, Suspense } from 'react';

const LazyBotaoAcao = lazy(() => import('./BotaoAcao'));

const BotaoAcao = props => (
  <Suspense fallback={null}>
    <LazyBotaoAcao {...props} />
  </Suspense>
);

export default BotaoAcao;
