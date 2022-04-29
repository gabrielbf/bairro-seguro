import React, { lazy, Suspense } from 'react';

const LazyMenuLinksSuperior = lazy(() => import('./MenuLinksSuperior'));

const MenuLinksSuperior = props => (
  <Suspense fallback={null}>
    <LazyMenuLinksSuperior {...props} />
  </Suspense>
);

export default MenuLinksSuperior;
