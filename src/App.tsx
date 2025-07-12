import { CommentsSection } from './components/organisms/CommentsSection';
import { Footer } from './components/molecules/Footer';
import { Hero } from './components/organisms/Hero';
import { MobileAppSection } from './components/organisms/MobileAppSection';
import { Navbar } from './components/molecules/Navbar';
import { OurService } from './components/organisms/OurService';
import { PopularBrands } from './components/organisms/PopularBrands';
import { PopularCategories } from './components/organisms/PopularCategories';

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />
      <main className="flex w-full flex-col">
        <Hero />
        <OurService />
        <PopularCategories />
        <PopularBrands />
        <CommentsSection />
        <MobileAppSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
