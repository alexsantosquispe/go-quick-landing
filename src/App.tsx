import { Suspense, lazy } from 'react';

import { Footer } from './components/molecules/Footer';
import { Hero } from './components/organisms/Hero';
import { Navbar } from './components/molecules/Navbar';
import { OurService } from './components/organisms/OurService';

const PopularCategories = lazy(
  () => import('./components/organisms/PopularCategories')
);
const PopularBrands = lazy(
  () => import('./components/organisms/PopularBrands')
);
const CommentsSection = lazy(
  () => import('./components/organisms/CommentsSection')
);
const MobileAppSection = lazy(
  () => import('./components/organisms/MobileAppSection')
);

function App() {
  return (
    <div className="text-default dark:bg-default flex min-h-screen w-full flex-col bg-white dark:text-white">
      <Navbar />
      <main className="flex w-full flex-col">
        <Hero />
        <OurService />
        <Suspense fallback={<div>Loading...</div>}>
          <PopularCategories />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <PopularBrands />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <CommentsSection />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <MobileAppSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
