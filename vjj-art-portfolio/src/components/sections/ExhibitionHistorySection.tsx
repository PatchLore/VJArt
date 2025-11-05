"use client"

const ExhibitionHistorySection = () => {
  const exhibitions = [
    {
      year: "2024",
      events: [
        {
          title: "Sussex Landscape Show",
          location: "East Grinstead Arts Centre",
          date: "September 2024",
          description: "Group exhibition featuring plein air landscapes from the Sussex countryside."
        },
        {
          title: "Dorking Art Group Annual Exhibition",
          location: "Dorking Halls",
          date: "July 2024",
          description: "Showcased 'Woodland Path, East Grinstead' and three other landscape pieces."
        }
      ]
    },
    {
      year: "2023",
      events: [
        {
          title: "North Weald Art Society Spring Show",
          location: "North Weald Village Hall",
          date: "April 2023",
          description: "Featured coastal watercolour studies painted on location."
        },
        {
          title: "Caterham Art Group Exhibition",
          location: "Caterham Valley Community Centre",
          date: "November 2023",
          description: "Exhibited 'Caterham Valley View' along with several still life works."
        },
        {
          title: "Sussex Group of Artists Open Studio",
          location: "Various locations across West Sussex",
          date: "August 2023",
          description: "Participated in the annual open studio event, welcoming visitors to see works in progress."
        }
      ]
    },
    {
      year: "2022",
      events: [
        {
          title: "East Grinstead Art Group Members Show",
          location: "East Grinstead Museum",
          date: "October 2022",
          description: "Exhibition of recent plein air and studio works."
        }
      ]
    }
  ]

  return (
    <section id="exhibitions" className="py-20 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-5xl font-display text-center mb-16 text-[#3D3D3D]">
          Exhibition History
        </h2>
        
        <div className="space-y-12">
          {exhibitions.map((yearGroup, yearIdx) => (
            <div key={yearGroup.year} className="border-l-4 border-[#8B9A6B] pl-8">
              <h3 className="text-3xl font-display mb-6 text-[#3D3D3D]">
                {yearGroup.year}
              </h3>
              
              <div className="space-y-8">
                {yearGroup.events.map((event, eventIdx) => (
                  <div key={eventIdx} className="animate-on-scroll">
                    <div className="bg-[#FAF8F3] p-6 rounded-sm shadow-sm">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                        <h4 className="text-2xl font-display text-[#3D3D3D]">
                          {event.title}
                        </h4>
                        <span className="text-[#8B9A6B] font-body text-sm uppercase tracking-wider">
                          {event.date}
                        </span>
                      </div>
                      <p className="text-[#C9A961] font-body mb-2">
                        {event.location}
                      </p>
                      <p className="text-[#5A5A5A] font-body leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExhibitionHistorySection




