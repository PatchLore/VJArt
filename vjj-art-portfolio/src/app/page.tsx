"use client"

import Image from "next/image"
import { useEffect } from "react"

export default function HomePage() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const href = target.getAttribute('href')
        if (href) {
          const element = document.querySelector(href)
          if (element) {
            const offset = 80
            const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            })
          }
        }
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <div style={{ fontFamily: "'Garamond', 'Georgia', serif", background: '#f5f1e8', color: '#3e3226', lineHeight: 1.6 }}>
      <style jsx global>{`
        * { 
          margin: 0; 
          padding: 0; 
          box-sizing: border-box; 
        }

        body {
          font-family: 'Garamond', 'Georgia', serif;
          background: #f5f1e8;
          color: #3e3226;
          line-height: 1.6;
        }

        .artwork-image-wrapper {
          border: 2px solid transparent;
          transition: all 0.3s ease-in-out;
        }

        .artwork-card:hover .artwork-image-wrapper {
          border-color: #d4af37;
        }

        .artwork-image-wrapper > div {
          transition: filter 0.3s ease-in-out;
        }

        .artwork-card:hover .artwork-image-wrapper > div {
          filter: brightness(1.05);
        }

        .artwork-card:hover .artwork-image-wrapper img {
          filter: brightness(1.05);
        }

        /* Navigation Link Hover Effects */
        nav a {
          position: relative;
          transition: color 0.3s ease;
        }

        nav a:hover {
          color: #d4af37;
        }

        nav a:focus-visible {
          outline: 2px solid #d4af37;
          outline-offset: 4px;
          border-radius: 2px;
        }

        /* Optional underline effect on hover */
        nav a::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0;
          height: 2px;
          background-color: #d4af37;
          transition: width 0.3s ease;
        }

        nav a:hover::after {
          width: 100%;
        }

        /* Button Hover Effects */
        .cta-button {
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background: #b59f3b;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
        }

        .cta-button:focus-visible {
          outline: 2px solid #d4af37;
          outline-offset: 4px;
        }

        /* Text Link Hover Effects */
        a[href^="mailto:"],
        a[href^="http"] {
          transition: color 0.3s ease;
        }

        a[href^="mailto:"]:hover,
        a[href^="http"]:hover {
          color: #d4af37;
        }

        a[href^="mailto:"]:focus-visible,
        a[href^="http"]:focus-visible {
          outline: 2px solid #d4af37;
          outline-offset: 2px;
          border-radius: 2px;
        }
      `}</style>

      <header style={{
        background: 'rgba(245, 241, 232, 0.98)',
        padding: '1.8rem 0',
        borderBottom: '3px solid #d4af37',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <nav style={{
          maxWidth: '1200px',
          margin: 'auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 2rem'
        }}>
          <div style={{
            fontSize: '2.3rem',
            color: '#6b5d4f',
            fontStyle: 'italic',
            letterSpacing: '2px'
          }}>VJ Art</div>
          <ul style={{
            display: 'flex',
            gap: '2rem',
            listStyle: 'none'
          }}>
            <li><a href="#home" className="nav-link" style={{
              color: '#6b5d4f',
              textDecoration: 'none',
              fontSize: '1.1rem'
            }}>Home</a></li>
            <li><a href="#gallery" className="nav-link" style={{
              color: '#6b5d4f',
              textDecoration: 'none',
              fontSize: '1.1rem'
            }}>Gallery</a></li>
            <li><a href="#about" className="nav-link" style={{
              color: '#6b5d4f',
              textDecoration: 'none',
              fontSize: '1.1rem'
            }}>About</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        background: 'linear-gradient(to bottom, #f5f1e8, #e8dcc8)',
        padding: '4rem 2rem'
      }}>
        <div>
          <h1 style={{
            fontSize: '4rem',
            color: '#6b5d4f',
            fontStyle: 'italic'
          }}>VJ Art</h1>
          <p style={{
            color: '#8b7355',
            fontSize: '1.4rem',
            marginTop: '1rem'
          }}>Original Oil Paintings — Inspired by Light, Nature, and Memory</p>
          <a href="#gallery" className="cta-button" style={{
            display: 'inline-block',
            marginTop: '2rem',
            padding: '1rem 2.5rem',
            background: '#d4af37',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '3px'
          }}>Explore the Collection</a>
        </div>
      </section>

      <section id="gallery" style={{
        padding: '5rem 2rem',
        maxWidth: '1200px',
        margin: 'auto'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          textAlign: 'center',
          color: '#6b5d4f',
          fontStyle: 'italic',
          marginBottom: '3rem'
        }}>Gallery</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem'
        }}>
          <div className="artwork-card" style={{
            background: '#fff',
            border: '8px solid #f5f1e8',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease',
            overflow: 'hidden',
            borderRadius: '3px'
          }}>
            <div className="artwork-image-wrapper" style={{
              width: '100%',
              height: '350px',
              position: 'relative',
              borderRadius: '3px',
              overflow: 'hidden'
            }}>
              <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <Image 
                  src="/images/IMG_4741.jpg" 
                  alt="Venetian Sunrise painting"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="artwork-image"
                />
              </div>
            </div>
            <div style={{ padding: '1.5rem', textAlign: 'center' }}>
              <h3 style={{
                fontSize: '1.4rem',
                color: '#6b5d4f',
                fontStyle: 'italic'
              }}>Venetian Sunrise</h3>
              <p style={{
                color: '#8b7355',
                fontSize: '1rem',
                marginTop: '0.5rem'
              }}>Soft morning light reflects on the Venetian lagoon, evoking peace and stillness.</p>
              <p style={{
                marginTop: '0.7rem',
                fontWeight: 'bold',
                color: '#6b5d4f'
              }}>£180 — Unframed</p>
            </div>
          </div>

          <div className="artwork-card" style={{
            background: '#fff',
            border: '8px solid #f5f1e8',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease',
            overflow: 'hidden',
            borderRadius: '3px'
          }}>
            <div className="artwork-image-wrapper" style={{
              width: '100%',
              height: '350px',
              position: 'relative',
              borderRadius: '3px',
              overflow: 'hidden'
            }}>
              <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <Image 
                  src="/images/IMG_4745.jpg" 
                  alt="San Giorgio Reflections painting"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="artwork-image"
                />
              </div>
            </div>
            <div style={{ padding: '1.5rem', textAlign: 'center' }}>
              <h3 style={{
                fontSize: '1.4rem',
                color: '#6b5d4f',
                fontStyle: 'italic'
              }}>San Giorgio Reflections</h3>
              <p style={{
                color: '#8b7355',
                fontSize: '1rem',
                marginTop: '0.5rem'
              }}>The calm waters of Venice mirror the dome of San Giorgio Maggiore at dusk.</p>
              <p style={{
                marginTop: '0.7rem',
                fontWeight: 'bold',
                color: '#6b5d4f'
              }}>£180 — Unframed</p>
            </div>
          </div>

          <div className="artwork-card" style={{
            background: '#fff',
            border: '8px solid #f5f1e8',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease',
            overflow: 'hidden',
            borderRadius: '3px'
          }}>
            <div className="artwork-image-wrapper" style={{
              width: '100%',
              height: '350px',
              position: 'relative',
              borderRadius: '3px',
              overflow: 'hidden'
            }}>
              <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <Image 
                  src="/images/IMG_6431.jpg" 
                  alt="Evening Café Paris painting"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="artwork-image"
                />
              </div>
            </div>
            <div style={{ padding: '1.5rem', textAlign: 'center' }}>
              <h3 style={{
                fontSize: '1.4rem',
                color: '#6b5d4f',
                fontStyle: 'italic'
              }}>Evening Café, Paris</h3>
              <p style={{
                color: '#8b7355',
                fontSize: '1rem',
                marginTop: '0.5rem'
              }}>A cozy Parisian café bathed in golden light — a quiet moment of city life.</p>
              <p style={{
                marginTop: '0.7rem',
                fontWeight: 'bold',
                color: '#6b5d4f'
              }}>£180 — Unframed</p>
            </div>
          </div>

          <div className="artwork-card" style={{
            background: '#fff',
            border: '8px solid #f5f1e8',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease',
            overflow: 'hidden',
            borderRadius: '3px'
          }}>
            <div className="artwork-image-wrapper" style={{
              width: '100%',
              height: '350px',
              position: 'relative',
              borderRadius: '3px',
              overflow: 'hidden'
            }}>
              <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <Image 
                  src="/images/IMG_6519.jpg" 
                  alt="Crocuses in Mum's Cup painting"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="artwork-image"
                />
              </div>
            </div>
            <div style={{ padding: '1.5rem', textAlign: 'center' }}>
              <h3 style={{
                fontSize: '1.4rem',
                color: '#6b5d4f',
                fontStyle: 'italic'
              }}>Crocuses in Mum's Cup</h3>
              <p style={{
                color: '#8b7355',
                fontSize: '1rem',
                marginTop: '0.5rem'
              }}>Delicate purple blooms emerge from a floral teacup — a gentle reflection of love and memory.</p>
              <p style={{
                marginTop: '0.7rem',
                fontWeight: 'bold',
                color: '#6b5d4f'
              }}>£180 — Unframed</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" style={{
        padding: '5rem 2rem',
        maxWidth: '1200px',
        margin: 'auto'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          textAlign: 'center',
          color: '#6b5d4f',
          fontStyle: 'italic',
          marginBottom: '3rem'
        }}>About Veronica Johnstone</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center'
        }}>
          <div>
            <p style={{
              marginBottom: '1.5rem',
              color: '#5a4e3f',
              lineHeight: 1.8
            }}>Art has always been my passion. From an early age, drawing and painting were my favourite subjects at school. Although I once considered art college, my parents encouraged me to pursue a more traditional career path. Nevertheless, I continued to study art through evening and part-time courses, exploring portraiture, still life, life drawing, and sculpture.</p>
            <p style={{
              marginBottom: '1.5rem',
              color: '#5a4e3f',
              lineHeight: 1.8
            }}>In the mid-1990s, I completed a two-year part-time course at Croydon Art College, which introduced me to printing, photography, sculpture, and illustration. Later in life, I developed a deep love for plein air landscape painting — something I now try to practice every week.</p>
            <p style={{
              marginBottom: '1.5rem',
              color: '#5a4e3f',
              lineHeight: 1.8
            }}>My artistic journey has led me to join several established art societies and groups. Since moving to West Sussex, I've become a member of the Caterham, North Weald, Dorking, Sussex Group of Artists, and East Grinstead art groups.</p>
            <p style={{
              marginBottom: '1.5rem',
              color: '#5a4e3f',
              lineHeight: 1.8
            }}>I work primarily in oils but also enjoy experimenting with acrylics, watercolour, pastel, and charcoal. While I prefer painting directly from life, I'm equally happy to create work inspired by photographs.</p>
            <p style={{
              marginTop: '2rem',
              color: '#5a4e3f',
              lineHeight: 1.8
            }}>
              📧 Email: <a href="mailto:johnej@btinternet.com" style={{ color: '#6b5d4f', textDecoration: 'none' }}>johnej@btinternet.com</a><br />
              📸 Instagram: <a href="https://instagram.com/vjj_art" target="_blank" rel="noopener noreferrer" style={{ color: '#6b5d4f', textDecoration: 'none' }}>@vjj_art</a>
            </p>
          </div>
          <div style={{
            width: '100%',
            border: '10px solid #f5f1e8',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            borderRadius: '3px',
            overflow: 'hidden'
          }}>
            <Image 
              src="/images/IMG_4741.jpg" 
              alt="Artist in studio painting"
              width={600}
              height={400}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </section>

      <footer style={{
        textAlign: 'center',
        background: '#2d2d2d',
        color: '#f5f1e8',
        padding: '2.5rem',
        marginTop: '3rem',
        borderTop: '3px solid #d4af37'
      }}>
        <p>&copy; 2025 VJ Art — All rights reserved.</p>
      </footer>
    </div>
  )
}
