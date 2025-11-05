import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 12)
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@vjjart.com' },
    update: {},
    create: {
      email: 'admin@vjjart.com',
      password: hashedPassword,
      role: 'admin',
    },
  })

  console.log('Admin user created:', admin)

  // Create sample artworks
  const artworks = [
    {
      title: "Abstract Dreams",
      description: "A vibrant exploration of subconscious thoughts and emotions through bold colors and dynamic forms.",
      medium: "Mixed Media",
      year: 2024,
      dimensions: "24\" x 36\"",
      price: 2500,
      category: "abstract",
      images: ["/api/placeholder/400/500"],
      featured: true,
    },
    {
      title: "Urban Landscapes",
      description: "Contemporary cityscapes that capture the energy and rhythm of urban life.",
      medium: "Acrylic on Canvas",
      year: 2024,
      dimensions: "30\" x 40\"",
      price: 3200,
      category: "landscape",
      images: ["/api/placeholder/400/500"],
      featured: false,
    },
    {
      title: "Color Symphony",
      description: "A harmonious blend of colors that creates a visual symphony of emotions.",
      medium: "Oil on Canvas",
      year: 2023,
      dimensions: "36\" x 48\"",
      price: 4500,
      category: "abstract",
      images: ["/api/placeholder/400/500"],
      featured: true,
    },
    {
      title: "Ethereal Forms",
      description: "Digital exploration of ethereal forms and otherworldly landscapes.",
      medium: "Digital Art",
      year: 2024,
      dimensions: "Digital Print",
      price: 800,
      category: "digital",
      images: ["/api/placeholder/400/500"],
      featured: false,
    },
    {
      title: "Nature's Whisper",
      description: "Delicate watercolor study of natural forms and organic textures.",
      medium: "Watercolor",
      year: 2023,
      dimensions: "18\" x 24\"",
      price: 1200,
      category: "nature",
      images: ["/api/placeholder/400/500"],
      featured: false,
    },
    {
      title: "Modern Chaos",
      description: "A chaotic yet controlled exploration of modern life through mixed media.",
      medium: "Mixed Media",
      year: 2024,
      dimensions: "32\" x 40\"",
      price: 3800,
      category: "abstract",
      images: ["/api/placeholder/400/500"],
      featured: true,
    },
  ]

  for (const artwork of artworks) {
    await prisma.artwork.create({
      data: artwork,
    })
  }

  console.log('Sample artworks created')

  // Create sample contact submissions
  const contacts = [
    {
      name: "Sarah Johnson",
      email: "sarah@example.com",
      subject: "Inquiry about Abstract Dreams",
      message: "I'm interested in purchasing the 'Abstract Dreams' piece. Could you provide more information about availability and shipping?",
    },
    {
      name: "Michael Chen",
      email: "michael@example.com",
      subject: "Commission Request",
      message: "I'd like to commission a custom piece for my office. Do you take on commissioned work?",
    },
    {
      name: "Emily Rodriguez",
      email: "emily@example.com",
      subject: "Gallery Exhibition",
      message: "I represent a local gallery and would like to discuss featuring your work in our upcoming contemporary art exhibition.",
    },
  ]

  for (const contact of contacts) {
    await prisma.contact.create({
      data: contact,
    })
  }

  console.log('Sample contact submissions created')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })





