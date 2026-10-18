import { Menu } from 'lucide-react';
import { useState } from 'react';
import { gymData } from '../data';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-(--bg)/90 backdrop-blur-md border-b border-(--card)">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tighter text-(--accent)">
          {gymData.name}
        </a>
        
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#services" className="hover:text-(--accent) transition-colors">Services</a>
          <a href="#contact" className="hover:text-(--accent) transition-colors">Contact</a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu />
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-(--card) p-6 flex flex-col gap-4">
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}
