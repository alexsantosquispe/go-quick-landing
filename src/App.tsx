import { useEffect } from 'react';
import { Footer } from './components/molecules/Footer';
import { Navbar } from './components/molecules/Navbar';
import { CommentsSection } from './components/organisms/CommentsSection';
import { Hero } from './components/organisms/Hero';
import { MobileAppSection } from './components/organisms/MobileAppSection';
import { OurService } from './components/organisms/OurService';
import { PopularBrands } from './components/organisms/PopularBrands';
import { PopularCategories } from './components/organisms/PopularCategories';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/purchases');
      const jsonRes = await response.json();
      console.log(jsonRes);
    };
    fetchData();
  }, []);

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
