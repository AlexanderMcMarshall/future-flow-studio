import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-display tracking-display uppercase text-primary mb-4">
            Ready to Get Started?
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Let's Clear Your Space
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground font-body">
            Contact us today for a free, no-obligation estimate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <a
              href="tel:+18175551234"
              className="glass-card p-6 flex items-center gap-4 group hover:border-primary/30 transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Phone className="text-primary" size={22} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-1">Call Us</p>
                <p className="font-display font-semibold text-foreground text-lg">(817) 381-8303</p>
              </div>
            </a>

            <a
              href="mailto:info@junk-jets.com"
              className="glass-card p-6 flex items-center gap-4 group hover:border-primary/30 transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Mail className="text-primary" size={22} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-1">Email Us</p>
                <p className="font-display font-semibold text-foreground text-lg">info@junk-jets.com</p>
              </div>
            </a>

            <div className="glass-card p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="text-primary" size={22} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-1">Location</p>
                <p className="font-display font-semibold text-foreground">Newark, Texas</p>
                <p className="text-sm text-muted-foreground font-body">Serving all of DFW</p>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 glass-card p-6 md:p-8 relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

            {submitted ? (
              <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[300px] text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Send className="text-primary" size={28} />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground font-body text-sm">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">Get a Free Estimate</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
                <textarea
                  placeholder="Tell us what you need removed..."
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="gold-shimmer w-full px-8 py-4 rounded-full bg-primary text-primary-foreground font-display font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_hsl(40_45%_55%/0.4)]"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
