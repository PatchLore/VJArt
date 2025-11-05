"use client"

const Footer = () => {
  return (
    <footer className="bg-[#3D3D3D] text-white py-[60px] px-10 mt-20">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        <div>
          <h3 className="text-base font-normal mb-5 uppercase tracking-wider">
            About
          </h3>
          <ul className="list-none">
            <li className="mb-3">
              <a href="#" className="text-gray-300 text-sm transition-colors hover:text-white">
                Artist Biography
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-300 text-sm transition-colors hover:text-white">
                Art Groups
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-300 text-sm transition-colors hover:text-white">
                Exhibitions
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-300 text-sm transition-colors hover:text-white">
                Press
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-base font-normal mb-5 uppercase tracking-wider">
            Collections
          </h3>
          <ul className="list-none">
            <li className="mb-3">
              <a href="#" className="text-gray-300 text-sm transition-colors hover:text-white">
                Landscapes
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-300 text-sm transition-colors hover:text-white">
                Still Life
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-300 text-sm transition-colors hover:text-white">
                Portraits
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-300 text-sm transition-colors hover:text-white">
                Plein Air Works
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-base font-normal mb-5 uppercase tracking-wider">
            Information
          </h3>
          <ul className="list-none">
            <li className="mb-3">
              <a href="#" className="text-gray-300 text-sm transition-colors hover:text-white">
                Commissions
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-300 text-sm transition-colors hover:text-white">
                Pricing
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-300 text-sm transition-colors hover:text-white">
                Shipping
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-300 text-sm transition-colors hover:text-white">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-base font-normal mb-5 uppercase tracking-wider">
            Connect
          </h3>
          <ul className="list-none">
            <li className="mb-3">
              <a href="mailto:johnej@btinternet.com" className="text-gray-300 text-sm transition-colors hover:text-white">
                johnej@btinternet.com
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-300 text-sm transition-colors hover:text-white">
                @vjj_art
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-300 text-sm transition-colors hover:text-white">
                Newsletter
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="text-center pt-8 border-t border-gray-700 text-gray-400 text-sm">
        <p>&copy; 2025 Veronica Johnstone. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
