import React, { lazy, Suspense } from 'react';

const LazyMapaAdmin = lazy(() => import('./MapaAdmin'));

const MapaAdmin = props => (
  <Suspense fallback={null}>
    <LazyMapaAdmin {...props} />
  </Suspense>
);

export default MapaAdmin;
