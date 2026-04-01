import { useState } from "react";
import { motion } from "framer-motion";
import PhotoLightbox from "./PhotoLightbox";

import img1 from "@/assets/birthday-1.jpg";
import img2 from "@/assets/birthday-2.jpg";
import img3 from "@/assets/birthday-3.jpg";
import img4 from "@/assets/birthday-4.jpg";
import img5 from "@/assets/birthday-5.jpg";
import img6 from "@/assets/birthday-6.jpg";
import img7 from "@/assets/birthday-7.jpg";
import img8 from "@/assets/birthday-8.jpg";
import img9 from "@/assets/birthday-9.jpg";
import img10 from "@/assets/birthday-10.jpg";
import img11 from "@/assets/birthday-11.jpg";
import img12 from "@/assets/birthday-12.jpg";
import img13 from "@/assets/birthday-13.jpg";
import img14 from "@/assets/birthday-14.jpg";
import img15 from "@/assets/birthday-15.jpg";
import img16 from "@/assets/birthday-16.jpg";
import img17 from "@/assets/birthday-17.jpg";
import img18 from "@/assets/birthday-18.jpg";
import img19 from "@/assets/birthday-19.jpg";
import img20 from "@/assets/birthday-20.jpg";
import img21 from "@/assets/birthday-21.jpg";
import img22 from "@/assets/birthday-22.jpg";
import img23 from "@/assets/birthday-23.jpg";
import img24 from "@/assets/birthday-24.jpg";
import img25 from "@/assets/birthday-25.jpg";
import img26 from "@/assets/birthday-26.jpg";
import img27 from "@/assets/birthday-27.jpg";

const images = [img1, img4, img3, img5, img2, img19, img6, img18, img21, img12, img7, img25, img15, img8, img22, img13, img9, img26, img20, img10, img24, img11, img14, img23, img16, img17, img27];

const PhotoGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="break-inside-avoid cursor-pointer group"
            onClick={() => openLightbox(i)}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={src}
                alt="Birthday memory"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        ))}
      </div>

      <PhotoLightbox
        images={images}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setCurrentIndex((p) => (p + 1) % images.length)}
        onPrev={() => setCurrentIndex((p) => (p - 1 + images.length) % images.length)}
      />
    </>
  );
};

export default PhotoGallery;
