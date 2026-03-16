import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, Leaf } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Same-day and next-day service available. We work on your schedule.",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Licensed and insured for your complete peace of mind.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "We recycle and donate whenever possible, minimizing landfill impact.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 md:py-32 section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-display tracking-display uppercase text-primary mb-4">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            The Junk Jets Difference
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground font-body">
            We're not just another junk removal company. We're your neighbors in Newark, Texas, dedicated to keeping DFW clean.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const cardRef = useRef(null);
            const cardInView = useInView(cardRef, { once: true, margin: "-60px" });
            return (
              <motion.div
                ref={cardRef}
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={cardInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-card p-8 text-center group hover:border-primary/30 transition-colors duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors duration-500">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
