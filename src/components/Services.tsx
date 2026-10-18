import { Dumbbell, Activity, User } from 'lucide-react';
import { gymData } from '../data';

export function Services() {
  const icons = {
    Dumbbell: <Dumbbell className="w-8 h-8 text-(--accent)" />,
    Activity: <Activity className="w-8 h-8 text-(--accent)" />,
    User: <User className="w-8 h-8 text-(--accent)" />
  };

  return (
    <section id="services" className="py-20 px-6 bg-(--card)">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tighter mb-12 text-center">Our Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {gymData.services.map((service, index) => (
            <div key={index} className="p-8 rounded-2xl bg-(--bg) border border-(--card) hover:border-(--accent) transition-colors">
              <div className="mb-4">
                {icons[service.icon as keyof typeof icons]}
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-(--muted) leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
