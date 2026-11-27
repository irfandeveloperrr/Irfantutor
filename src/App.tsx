import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Methodology from '@/components/Methodology';
import Approach from '@/components/Approach';
import Subjects from '@/components/Subjects';
import PersonalAttention from '@/components/PersonalAttention';
import Outcomes from '@/components/Outcomes';
import Testimonials from '@/components/Testimonials';
import Areas from '@/components/Areas';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Methodology />
        <Approach />
        <Subjects />
        <PersonalAttention />
        <Outcomes />
        <Testimonials />
        <Areas />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
