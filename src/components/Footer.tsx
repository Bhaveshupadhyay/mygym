import { gymData } from '../data';
import { Globe, Link as LinkIcon, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-(--card)">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold tracking-tighter text-(--accent)">
          {gymData.name}
        </div>
        
        <div className="flex gap-6 text-(--muted)">
          <a href="#" className="hover:text-(--accent) transition-colors">
            <Globe className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-(--accent) transition-colors">
            <LinkIcon className="w-5 h-5" />
          </a>
          <a href={`mailto:${gymData.contact.email}`} className="hover:text-(--accent) transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <p className="text-(--muted) text-sm">
          © {new Date().getFullYear()} {gymData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
