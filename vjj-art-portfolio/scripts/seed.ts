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

  // Create sample artworks using real images
  const artworks = [
    {
      title: "Venetian Sunrise",
      description: "Soft morning light reflects on the Venetian lagoon, evoking peace and stillness.",
      medium: "Oil on Canvas",
      year: 2024,
      dimensions: "24\" x 30\"",
      price: 180,
      category: "landscape",
      images: ["/images/IMG_4741.jpg"],
      featured: true,
    },
    {
      title: "San Giorgio Reflections",
      description: "The calm waters of Venice mirror the dome of San Giorgio Maggiore at dusk.",
      medium: "Oil on Canvas",
      year: 2024,
      dimensions: "24\" x 30\"",
      price: 180,
      category: "landscape",
      images: ["/images/IMG_4745.jpg"],
      featured: true,
    },
    {
      title: "Crocuses in Mum's Cup",
      description: "Delicate purple blooms emerge from a floral teacup — a gentle reflection of love and memory.",
      medium: "Oil on Canvas",
      year: 2024,
      dimensions: "20\" x 24\"",
      price: 180,
      category: "still-life",
      images: ["/images/IMG_6431.jpg"],
      featured: false,
    },
    {
      title: "Evening Café, Paris",
      description: "A cozy Parisian café bathed in golden light — a quiet moment of city life.",
      medium: "Oil on Canvas",
      year: 2024,
      dimensions: "24\" x 30\"",
      price: 180,
      category: "landscape",
      images: ["/images/IMG_6519.jpg"],
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






