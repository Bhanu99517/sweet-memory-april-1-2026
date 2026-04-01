import { motion } from "framer-motion";
import { Cake, Stars } from "lucide-react";
import PhotoGallery from "@/components/PhotoGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Subtle star particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40 animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Hero */}
      <header className="relative pt-20 pb-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Stars className="text-primary" size={28} />
            <Cake className="text-primary" size={32} />
            <Stars className="text-primary" size={28} />
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-4">
            <span className="text-primary">Birthday</span>{" "}
            <span className="italic text-foreground">Memories</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            A rooftop under the moonlight, A memory of a birthday night, A photo album to cherish, A moment frozen in time, April-1-2026, 08:00 PM ✨
          </p>
        </motion.div>
      </header>

      {/* Gallery */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
        <PhotoGallery />
      </main>

      {/* Footer */}
      <footer className="text-center pb-12 text-muted-foreground text-sm">
        <p>Made with 🤍 to keep these moments alive forever April-1-2026</p>
      </footer>
    </div>
  );
};

export default Index;
