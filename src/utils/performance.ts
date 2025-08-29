// // Performance optimization utilities
//
// // Debounce function for input handlers
// export function debounce<T extends (...args: any[]) => any>(
//   func: T,
//   wait: number
// ): (...args: Parameters<T>) => void {
//   let timeout: NodeJS.Timeout;
//   return (...args: Parameters<T>) => {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func(...args), wait);
//   };
// }
//
// // Throttle function for scroll/resize handlers
// export function throttle<T extends (...args: any[]) => any>(
//   func: T,
//   limit: number
// ): (...args: Parameters<T>) => void {
//   let inThrottle: boolean;
//   return (...args: Parameters<T>) => {
//     if (!inThrottle) {
//       func(...args);
//       inThrottle = true;
//       setTimeout(() => (inThrottle = false), limit);
//     }
//   };
// }
//
// // Lazy load components with intersection observer
// export function createLazyLoader(
//   callback: () => void,
//   options: IntersectionObserverInit = {}
// ) {
//   if (typeof window === 'undefined') return null;
//
//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           callback();
//           observer.unobserve(entry.target);
//         }
//       });
//     },
//     {
//       rootMargin: '100px 0px',
//       threshold: 0.1,
//       ...options,
//     }
//   );
//
//   return observer;
// }
//
// // Preload critical resources
// export function preloadResource(href: string, as: string = 'script') {
//   if (typeof window === 'undefined') return;
//
//   const link = document.createElement('link');
//   link.rel = 'preload';
//   link.href = href;
//   link.as = as;
//   document.head.appendChild(link);
// }
//
// // Measure performance
// export function measurePerformance(name: string, fn: () => void) {
//   if (typeof window === 'undefined') return fn();
//
//   const start = performance.now();
//   const result = fn();
//   const end = performance.now();
//
//   console.log(`${name} took ${end - start} milliseconds`);
//   return result;
// }

// Request idle callback wrapper
export function requestIdleCallback(callback: () => void, timeout = 5000) {
  if (typeof window === 'undefined') return;

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(callback, { timeout });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(callback, 1);
  }
}
