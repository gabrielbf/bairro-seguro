import React, { lazy, Suspense } from 'react';

const LazyBotoesAcoes = lazy(() => import('./BotoesAcoes'));

const BotoesAcoes = props => (
  <Suspense fallback={null}>
    <LazyBotoesAcoes {...props} />
  </Suspense>
);

export default BotoesAcoes;
