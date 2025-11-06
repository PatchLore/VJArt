"use client"

const BioSection = () => {
  return (
    <div id="about" className="max-w-[1400px] mx-auto px-10 py-[60px]">
      <div className="bg-white p-12 mb-[60px] rounded-sm shadow-sm animate-on-scroll">
        <h2 className="text-5xl font-display mb-8 text-brown">
          About Me
        </h2>
        
        <div className="prose prose-lg max-w-none text-brown-soft font-body leading-relaxed space-y-6">
          <p className="text-xl italic text-[#8B9A6B] mb-8">
            I've always enjoyed drawing and painting; art was my favourite subject in school. I considered art college, but my parents insisted on a traditional career. I attend evening classes and several part-time courses covering portraiture, still life drawing and sculpture.
          </p>
          
          <p>
            In the mid 1990's I found enough time to take a two-year part-time course at Croydon Art College which incorporated printing, photography, sculpture and illustration. This was a turning point for me—I realised that art wasn't just a hobby, it was a fundamental part of who I am.
          </p>
          
          <p>
            It wasn't until later in my life that I took a strong interest in landscape painting plein air, and it's something I try to achieve once a week. There's something incredibly grounding about standing in the landscape, feeling the breeze, hearing the birds, and trying to capture the fleeting light. Each painting session outdoors teaches me something new about seeing.
          </p>
          
          <p>
            My progress as an artist led me to join many established art groups and societies. Following my move to West Sussex, I have more recently established membership with Caterham, North Weald, Dorking, Sussex Group of Artists and East Grinstead art groups. These communities have been invaluable—not just for the technical learning, but for the camaraderie and shared passion for painting.
          </p>
          
          <p>
            I mostly work in oils but do occasionally produce works in Acrylic, Watercolour, Pastel and Charcoal. Although I prefer painting subjects directly from life, I am also open to creating art based on photographs, especially when weather or location makes plein air painting challenging.
          </p>
          
          <p className="mt-8 pt-6 border-t border-gray-200">
            <strong className="text-brown">My approach:</strong> I believe that painting is about connection—connecting with the landscape, with light, with the moment. When I paint, I'm not just recording what I see; I'm trying to capture how it feels. The way morning mist softens the distance, how afternoon light makes colours sing, the quiet beauty of an overgrown path—these are the things that move me to paint.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BioSection
