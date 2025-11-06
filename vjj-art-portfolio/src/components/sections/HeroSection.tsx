"use client"

const HeroSection = () => {

  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center text-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1920&h=1080&fit=crop&crop=center)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        isolation: 'isolate'
      }}
    >
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      
      {/* Watercolor texture overlay */}
      <div className="absolute inset-0 watercolor-overlay z-0" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-6xl md:text-7xl font-display mb-6 tracking-wide">
          Landscape & Still Life Painting
        </h1>
        <p className="text-xl md:text-2xl font-body max-w-3xl mx-auto leading-relaxed opacity-95 mb-8">
          Original artwork in oils, acrylics, watercolour, pastel and charcoal. 
          Inspired by the beauty of nature and created through plein air painting and studio work.
        </p>
        <div className="mt-10">
          <a 
            href="#gallery" 
            className="inline-block px-8 py-4 bg-gold hover:bg-gold-dark text-white font-body text-lg tracking-wide transition-colors duration-300"
            style={{ backgroundColor: 'var(--sage-green)' }}
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
