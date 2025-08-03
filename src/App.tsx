import { useEffect, useState } from 'react';
import { SelectedPage } from '@src/types/enum';
import Navbar from '@src/components/Navbar/Navbar';
import Home from '@src/components/Home/Home';
import Benefits from '@src/components/Benefits/Benefits';
import OurClasses from '@src/components/OurClasses/OurClasses';
import ContactUs from '@src/components/ContactUs/ContactUs';
import Footer from '@src/components/Footer/Footer';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div className="font-dmsans bg-gray-20 h-screen w-full font-bold text-gray-500">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
