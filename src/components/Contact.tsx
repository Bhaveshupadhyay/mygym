import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { gymData } from '../data';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tighter mb-12 text-center">Book Your Session</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-(--card) p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <MapPin className="text-(--accent)" />
                <p className="text-(--muted)">{gymData.contact.address}</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-(--accent)" />
                <p className="text-(--muted)">{gymData.contact.phone}</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-(--accent)" />
                <p className="text-(--muted)">{gymData.contact.email}</p>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="text-(--accent)" />
                <p className="text-(--muted)">{gymData.contact.hours}</p>
              </div>
            </div>
          </div>

          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="p-4 rounded-lg bg-(--card) border border-(--card) focus:border-(--accent) outline-none"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="p-4 rounded-lg bg-(--card) border border-(--card) focus:border-(--accent) outline-none"
            />
            <textarea 
              placeholder="Tell us about your fitness goals..." 
              rows={4}
              className="p-4 rounded-lg bg-(--card) border border-(--card) focus:border-(--accent) outline-none"
            />
            <button className="bg-(--accent) text-white py-4 rounded-lg font-bold hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
