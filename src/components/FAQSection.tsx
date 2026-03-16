import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We serve the entire Dallas–Fort Worth Metroplex, including Newark, Fort Worth, Dallas, Arlington, Denton, and surrounding cities.",
  },
  {
    question: "How does pricing work?",
    answer: "Our pricing is based on how much space your items take up in our truck. We provide free, no-obligation estimates before any work begins — no hidden fees.",
  },
  {
    question: "Do you offer same-day service?",
    answer: "Yes! We offer same-day and next-day service depending on availability. Call us to check our schedule for your area.",
  },
  {
    question: "What items can't you take?",
    answer: "We cannot accept hazardous materials such as chemicals, paint, asbestos, or medical waste. Contact us if you're unsure about a specific item.",
  },
  {
    question: "Do you recycle or donate items?",
    answer: "Absolutely. We prioritize eco-friendly disposal. Usable items are donated to local charities, and recyclable materials are taken to certified recycling facilities.",
  },
  {
    question: "How do I schedule a pickup?",
    answer: "Simply call us or send an email. We'll arrange a convenient time, give you a free estimate on-site, and handle everything from there.",
  },
];

const FAQItem = ({ faq, index }: { faq: typeof faqs[0]; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="font-display font-semibold text-base md:text-lg text-foreground group-hover:text-primary transition-colors duration-300">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown size={20} className="text-primary" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-muted-foreground font-body text-sm md:text-base leading-relaxed">
          {faq.answer}
        </p>
      </motion.div>
      <div className="h-px bg-border/50" />
    </motion.div>
  );
};

const FAQSection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="faqs" className="py-24 md:py-32 section-padding bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-display tracking-display uppercase text-primary mb-4">
            Common Questions
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            FAQs
          </h2>
        </motion.div>

        <div className="glass-card px-6 md:px-10 py-2">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.question} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
