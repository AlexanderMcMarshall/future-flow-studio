import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 md:py-32 section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-card p-8 md:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10">
            <p className="text-sm font-display tracking-display uppercase text-primary mb-4">
              Ready to Get Started?
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              Let's Clear Your Space
            </h2>
            <p className="max-w-xl mx-auto text-muted-foreground font-body mb-10">
              Contact us today for a free, no-obligation estimate. We'll have your space cleared in no time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:+1234567890"
                className="gold-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-display font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_hsl(40_45%_55%/0.4)]"
              >
                <Phone size={18} />
                Call Now
              </a>
              <a
                href="mailto:info@junk-jets.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-display font-medium tracking-wide transition-all duration-300 hover:border-primary/50"
              >
                <Mail size={18} />
                Email Us
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm font-body">
              <MapPin size={16} className="text-primary" />
              <span>Newark, Texas · Serving the Dallas–Fort Worth Metroplex</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
