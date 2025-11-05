"use client"

import { useEffect } from "react"

interface LightboxProps {
  imageUrl: string
  alt: string
  isOpen: boolean
  onClose: () => void
}

const Lightbox = ({ imageUrl, alt, isOpen, onClose }: LightboxProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div 
      className="lightbox-overlay active"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-50 font-normal w-12 h-12 flex items-center justify-center"
        aria-label="Close lightbox"
      >
        X
      </button>
      <img
        src={imageUrl}
        alt={alt}
        className="lightbox-image"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}

export default Lightbox

