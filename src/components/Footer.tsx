const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-10 section-padding">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#home" className="font-display font-bold text-lg tracking-display text-foreground">
          JUNK <span className="text-gradient-gold">JETS</span>
        </a>
        <p className="text-sm text-muted-foreground font-body">
          © {new Date().getFullYear()} Junk Jets. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Home", "Services", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
