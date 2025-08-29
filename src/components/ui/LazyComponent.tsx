// 'use client';
//
// import { lazy, Suspense, ComponentType } from 'react';
//
// interface LazyComponentProps {
//   loader: () => Promise<{ default: ComponentType<any> }>;
//   fallback?: React.ReactNode;
//   children?: React.ReactNode;
// }
//
// export const LazyComponent = ({ loader, fallback, children }: LazyComponentProps) => {
//   const Component = lazy(loader);
//
//   return (
//     <Suspense fallback={fallback || <div className="animate-pulse bg-gray-200 h-32 rounded" />}>
//       <Component>{children}</Component>
//     </Suspense>
//   );
// };
