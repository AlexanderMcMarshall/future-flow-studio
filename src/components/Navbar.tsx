import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "future-flow-studio/pricing" },
  { label: "About", href: "#about" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/30">
      <div className="max-w-7xl mx-auto section-padding flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="font-display font-bold text-xl md:text-2xl tracking-display text-foreground">
          JUNK <span className="text-gradient-gold">JETS</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="gold-shimmer px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold font-display tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_hsl(40_45%_55%/0.3)]"
          >
            Get Estimate
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/30 overflow-hidden"
          >
            <div className="section-padding py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-body text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold font-display tracking-wide text-center"
              >
                Get Estimate
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
