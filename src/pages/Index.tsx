import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import DemoSection from '@/components/DemoSection';
import VerificationSection from '@/components/VerificationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <DemoSection />
        <VerificationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
