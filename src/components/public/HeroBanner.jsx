// src/components/public/HeroBanner.jsx
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function HeroBanner() {
  const slides = [
    {
      id: 1,
      title: "Superb and Hypercar ",
      subtitle: "SUPERCHARGE YOUR RIDE",
      image:
        "https://i.pinimg.com/1200x/be/ff/fe/befffe377877e8ac74534e82a721293d.jpg",
      cta: "Shop Now",
      link: "/shop",
    },
    {
      id: 2,
      title: "Racing Tires",
      subtitle: "ZOOM INTO SPEED",
      image:
        "https://images.unsplash.com/photo-1586726175503-218edbdfe4a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNwZWVkb21ldGVyfGVufDB8fDB8fHww",
      cta: "View Collection",
      link: "/gallery",
    },
    {
      id: 3,
      title: "Customize your car",
      subtitle: "UNLEASH THE POWER",
      image:
        "https://i.pinimg.com/1200x/51/ef/d2/51efd21ce0eeb490c5e3902c4617f4c3.jpg",
      cta: "Explore",
      link: "/about",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const handleCtaClick = () => {
    const link = slides[currentIndex]?.link || "/";
    window.location.href = link;
  };

  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden">
      {/* Slide Aktif */}
      <div className="absolute inset-0 transition-opacity duration-700 ease-in-out">
        <img
          src={slides[currentIndex].image}
          alt={slides[currentIndex].title}
          className="w-full h-full object-cover"
        />
        {/* Gradient dipertebal sedikit untuk keterbacaan di mobile */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 md:from-black/70 to-black/30" />
      </div>

      {/* Konten Tengah */}
      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h2 className="text-[10px] md:text-sm uppercase tracking-widest text-red-400 mb-2">
            {slides[currentIndex].subtitle}
          </h2>
          {/* Ukuran teks dinamis: 3xl di mobile, 6xl di desktop */}
          <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
            {slides[currentIndex].title}
          </h1>
          <Button
            variant="secondary"
            className="bg-red-600 hover:bg-red-700 text-white border-none"
            onClick={handleCtaClick}
          >
            {slides[currentIndex].cta}
          </Button>
        </div>
      </div>

      {/* Navigation Arrows - Responsif: Lebih kecil di mobile */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 rounded-full p-2 md:p-3 
                   text-white/80 hover:text-red-400 transition-colors z-20"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 md:h-6 md:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 rounded-full p-2 md:p-3 
                   text-white/80 hover:text-red-400 transition-colors z-20"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 md:h-6 md:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indikator Dots */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
              index === currentIndex
                ? "bg-red-500"
                : "bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}