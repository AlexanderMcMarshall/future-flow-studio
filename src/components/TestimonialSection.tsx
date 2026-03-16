import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const TestimonialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-card p-8 md:p-14 text-center relative"
        >
          <Quote className="text-primary/30 mx-auto mb-6" size={48} />
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-display font-medium text-foreground leading-relaxed mb-8">
            "Junk Jets truly saved the day! They cleared out years of clutter from our garage quickly and professionally. Highly recommend their efficient and friendly service!"
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="font-display font-bold text-primary text-sm">★</span>
            </div>
            <div className="text-left">
              <p className="font-display font-semibold text-foreground text-sm">Happy Customer</p>
              <p className="text-muted-foreground text-xs font-body">Dallas–Fort Worth, TX</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
