"use client"

const AboutSection = () => {
  const aboutCards = [
    {
      title: "Our Vision",
      content: "To create art that transcends boundaries and connects people through shared human experiences. We believe in the transformative power of creativity to inspire, heal, and unite communities.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=200&fit=crop&crop=center",
      alt: "Artistic Vision"
    },
    {
      title: "Our Process", 
      content: "Every piece begins with inspiration drawn from the world around us. Through careful experimentation with various mediums and techniques, we craft unique artworks that capture moments, emotions, and stories.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center",
      alt: "Creative Process"
    },
    {
      title: "Our Mission",
      content: "To make contemporary art accessible and meaningful to everyone. We're committed to fostering creativity, supporting emerging artists, and building a community that celebrates artistic expression in all its forms.",
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=300&h=200&fit=crop&crop=center",
      alt: "Art Mission"
    }
  ]

  return (
    <section id="about" className="py-32 px-8 max-w-7xl mx-auto pt-20">
      <h2 className="mb-12 text-center font-display tracking-widest" style={{fontSize: '3rem', marginBottom: '3rem'}}>
        About Us
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
        {aboutCards.map((card, index) => (
          <div 
            key={index}
            className="artisan-card rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
          >
            <div className="h-32 w-full">
              <img 
                src={card.image}
                alt={card.alt}
                className="w-full h-full object-cover"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div className="p-10">
              <h3 className="text-2xl mb-4 text-yellow-600 font-display">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-body">
                {card.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutSection
