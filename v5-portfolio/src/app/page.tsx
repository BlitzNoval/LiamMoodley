import { Header } from '@/components/Header';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Writing } from '@/components/sections/Writing';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <Header />
      <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
        <About />
        <Experience />
        <Projects />
        <Writing />
        <Footer />
      </main>
    </div>
  );
}
