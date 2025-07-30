import { useState } from 'react';
import Navbar from '@src/components/scenes/Navbar/Navbar';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  return (
    <div className="font-dmsans bg-gray-20 h-screen w-full font-bold text-gray-500">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
