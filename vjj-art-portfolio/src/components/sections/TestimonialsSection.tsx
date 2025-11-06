"use client"

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Margaret H.",
      role: "Private Collector",
      location: "West Sussex",
      text: "Veronica's 'Morning Mist, Ashdown Forest' hangs in our living room and brings us joy every day. Her ability to capture the light and atmosphere of the Sussex countryside is remarkable. We feel as though we're standing right there in the mist."
    },
    {
      name: "David & Sarah T.",
      role: "Art Enthusiasts",
      location: "East Grinstead",
      text: "We commissioned Veronica to paint a view of our garden, and we couldn't be more delighted. She spent a day with us painting on location, and the final piece perfectly captures the essence of our favourite spot. Her plein air technique brings such authenticity to her work."
    },
    {
      name: "Sussex Group of Artists",
      role: "Art Society",
      location: "West Sussex",
      text: "Veronica is a valued member of our group, consistently producing work of the highest quality. Her dedication to plein air painting and her technical skill with oils make her pieces stand out. Her participation in our exhibitions has been a highlight."
    },
    {
      name: "James R.",
      role: "Gallery Owner",
      location: "Dorking",
      text: "Veronica's landscapes have a timeless quality that resonates with collectors. Her work sells well because it speaks to people's connection with the natural beauty of the South Downs and surrounding countryside. I always look forward to seeing her latest pieces."
    }
  ]

  return (
    <section className="py-20 px-6 bg-cream watercolor-overlay">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-5xl font-display text-center mb-16 text-brown">
          What Collectors Say
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx}
              className="bg-white p-8 rounded-sm shadow-sm animate-on-scroll"
            >
              <div className="mb-6">
                <div className="flex gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#C9A961] text-xl">★</span>
                  ))}
                </div>
              </div>
              
              <p className="text-brown-soft font-body text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <p className="font-display text-lg text-brown">
                  {testimonial.name}
                </p>
                <p className="text-[#8B9A6B] font-body text-sm">
                  {testimonial.role} • {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection




