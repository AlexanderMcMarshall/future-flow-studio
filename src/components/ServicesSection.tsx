import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Building2, Heart, Recycle } from "lucide-react";
import serviceResidential from "@/assets/service-residential.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";
import serviceEstate from "@/assets/service-estate.jpg";
import serviceEwaste from "@/assets/service-ewaste.jpg";

const services = [
  {
    icon: Home,
    title: "Residential Junk Removal",
    description: "Reclaim your home! We remove old furniture, appliances, electronics, yard waste, and general household clutter from your garage, attic, basement, or anywhere in between.",
    image: serviceResidential,
  },
  {
    icon: Building2,
    title: "Commercial Cleanouts",
    description: "For businesses we offer efficient commercial junk removal, office cleanouts, and construction debris hauling, ensuring your workspace stays clear and productive.",
    image: serviceCommercial,
  },
  {
    icon: Heart,
    title: "Estate & Hoarder Cleanups",
    description: "Handling sensitive situations with care, our team provides respectful and thorough estate cleanout services and hoarder cleanups, offering support during challenging times.",
    image: serviceEstate,
  },
  {
    icon: Recycle,
    title: "Appliance & E-Waste Disposal",
    description: "Don't let old appliances or electronics sit around. We ensure responsible and eco-friendly disposal or recycling of your unwanted fridges, washers, TVs, computers, and more.",
    image: serviceEwaste,
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`glass-card group overflow-hidden ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
    >
      <div className={`relative overflow-hidden ${index === 0 ? "h-64 md:h-80" : "h-48"}`}>
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <service.icon className="text-primary" size={28} />
        </div>
      </div>
      <div className="p-5 md:p-6">
        <h3 className="font-display font-semibold text-lg md:text-xl text-foreground mb-2">
          {service.title}
        </h3>
        <p className="text-sm md:text-base text-muted-foreground font-body leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-24 md:py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-display tracking-display uppercase text-primary mb-4">
            What We Do
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground font-body">
            From single item pickups to full property cleanouts, we offer a comprehensive range of services tailored to your specific needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
