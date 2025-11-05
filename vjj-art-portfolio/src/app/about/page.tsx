"use client"

import { motion } from "framer-motion"
import { Palette, Users, Heart, Award, Eye, Lightbulb } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const AboutPage = () => {
  const values = [
    {
      icon: Palette,
      title: "Our Vision",
      description: "To create art that transcends boundaries and connects people through shared human experiences. We believe in the transformative power of creativity to inspire, heal, and unite communities.",
    },
    {
      icon: Lightbulb,
      title: "Our Process",
      description: "Every piece begins with inspiration drawn from the world around us. Through careful experimentation with various mediums and techniques, we craft unique artworks that capture moments, emotions, and stories.",
    },
    {
      icon: Heart,
      title: "Our Mission",
      description: "To make contemporary art accessible and meaningful to everyone. We're committed to fostering creativity, supporting emerging artists, and building a community that celebrates artistic expression in all its forms.",
    },
  ]

  const studioFeatures = [
    {
      title: "Natural Light Studio",
      description: "Our main workspace features floor-to-ceiling windows that provide optimal natural lighting for creating and photographing artwork.",
      image: "/api/placeholder/400/300",
    },
    {
      title: "Mixed Media Workshop",
      description: "A dedicated space for experimenting with various materials and techniques, from traditional paints to digital tools.",
      image: "/api/placeholder/400/300",
    },
    {
      title: "Gallery Space",
      description: "An intimate gallery area where we display works in progress and host small private viewings for collectors.",
      image: "/api/placeholder/400/300",
    },
  ]

  const team = [
    {
      name: "VJJ",
      role: "Artist & Founder",
      bio: "Contemporary artist with over a decade of experience in various mediums. Specializes in abstract and mixed media works.",
      image: "/api/placeholder/300/300",
    },
    {
      name: "Sarah Chen",
      role: "Studio Manager",
      bio: "Manages day-to-day operations and coordinates exhibitions. Has a background in art history and gallery management.",
      image: "/api/placeholder/300/300",
    },
    {
      name: "Marcus Rodriguez",
      role: "Creative Director",
      bio: "Oversees the creative vision and helps develop new artistic concepts and techniques.",
      image: "/api/placeholder/300/300",
    },
  ]

  const stats = [
    { number: "50+", label: "Artworks Created", icon: Palette },
    { number: "15+", label: "Exhibitions", icon: Eye },
    { number: "5+", label: "Years Experience", icon: Award },
    { number: "100+", label: "Happy Collectors", icon: Users },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-serif"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            We are passionate about creating contemporary art that speaks to the
            soul and connects people through shared human experiences.
          </motion.p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-charcoal-900 mb-4 font-serif">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our creative process and artistic vision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon size={32} className="text-charcoal-900" />
                    </div>
                    <CardTitle className="text-xl text-charcoal-900">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-center">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={32} className="text-charcoal-900" />
                </div>
                <div className="text-4xl font-bold text-charcoal-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Tour Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-charcoal-900 mb-4 font-serif">
              Studio Tour
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take a virtual tour of our creative space where art comes to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studioFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500" />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-charcoal-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-charcoal-900 mb-4 font-serif">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The creative minds behind VJJ Art and our mission to make
              contemporary art accessible to everyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-square bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-t-lg" />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-charcoal-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gold-500 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-700 text-sm">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artist Statement Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8 font-serif">
              Artist Statement
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl mb-6 italic">
                "My work is an exploration of the human experience through color,
                form, and emotion. I believe that art has the power to connect
                us across cultures, languages, and personal experiences."
              </p>
              <p className="mb-6">
                Through my practice, I seek to create works that are both
                visually striking and emotionally resonant. Each piece begins
                with an idea or feeling that I want to explore, and through the
                process of creation, I discover new meanings and connections.
              </p>
              <p className="mb-6">
                I work primarily with mixed media, combining traditional
                painting techniques with digital elements and found materials.
                This approach allows me to create works that are both timeless
                and contemporary, speaking to both the past and the future.
              </p>
              <p>
                My goal is to create art that not only beautifies spaces but
                also provokes thought, inspires conversation, and connects people
                through shared human experiences. I believe that art should be
                accessible to everyone, and I strive to create works that
                resonate with diverse audiences.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

