import React, { lazy, Suspense } from 'react';

const LazyAdminHome = lazy(() => import('./AdminHome'));

const AdminHome = props => (
  <Suspense fallback={null}>
    <LazyAdminHome {...props} />
  </Suspense>
);

export default AdminHome;
