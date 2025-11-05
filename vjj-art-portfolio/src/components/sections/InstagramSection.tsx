"use client"

const InstagramSection = () => {
  // Placeholder Instagram images - in production, these would come from Instagram API
  const instagramPosts = [
    {
      image: "https://images.unsplash.com/photo-1513364776144-60967b0fcc03?w=400&h=400&fit=crop",
      caption: "Morning session in Ashdown Forest 🌲 #pleinair #landscapepainting #sussexartists"
    },
    {
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=400&fit=crop",
      caption: "Work in progress from today's painting session #oilpainting #artstudio"
    },
    {
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop",
      caption: "Golden hour in the Surrey Hills 🎨 #landscapepainting #surreyartists"
    },
    {
      image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=400&fit=crop",
      caption: "Coastal studies from our Sussex Group painting day 🌊 #watercolour #seascape"
    },
    {
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop",
      caption: "Studio setup for this week's still life study #stilllife #oilpainting"
    },
    {
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop",
      caption: "Garden herbs and morning light ☀️ #pleinair #gardenpainting"
    }
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-display mb-4 text-[#3D3D3D]">
            Follow My Painting Journey
          </h2>
          <p className="text-xl font-body text-[#5A5A5A] mb-6">
            See works in progress, plein air sessions, and daily painting updates on Instagram
          </p>
          <a 
            href="https://instagram.com/vjj_art" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#8B9A6B] hover:bg-[#6B7A4B] text-white font-body text-base tracking-wide transition-colors"
          >
            @vjj_art on Instagram
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {instagramPosts.map((post, idx) => (
            <div key={idx} className="relative group cursor-pointer animate-on-scroll">
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover aspect-square image-zoom"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xs text-center px-2">
                  {post.caption.substring(0, 50)}...
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InstagramSection




