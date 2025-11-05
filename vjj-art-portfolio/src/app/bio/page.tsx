"use client"

import { motion } from "framer-motion"
import { Download, Award, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const BioPage = () => {
  const timeline = [
    {
      year: "2024",
      title: "Solo Exhibition: 'Color Symphony'",
      location: "Modern Art Gallery, New York",
      description: "Featured 15 new works exploring the relationship between color and emotion.",
    },
    {
      year: "2023",
      title: "Group Exhibition: 'Contemporary Visions'",
      location: "Art Institute of Chicago",
      description: "Participated in a group show featuring emerging contemporary artists.",
    },
    {
      year: "2022",
      title: "Artist Residency",
      location: "Vermont Studio Center",
      description: "Three-month residency focusing on experimental mixed media techniques.",
    },
    {
      year: "2021",
      title: "First Solo Exhibition",
      location: "Local Art Space, Boston",
      description: "Debut solo show featuring early abstract works and experimental pieces.",
    },
    {
      year: "2020",
      title: "MFA in Fine Arts",
      location: "Rhode Island School of Design",
      description: "Graduated with distinction, focusing on contemporary painting and mixed media.",
    },
  ]

  const achievements = [
    {
      title: "Artist of the Year",
      organization: "Contemporary Art Society",
      year: "2024",
      description: "Recognized for outstanding contribution to contemporary art and innovative techniques.",
    },
    {
      title: "Emerging Artist Grant",
      organization: "National Endowment for the Arts",
      year: "2023",
      description: "Received funding to support the development of new body of work.",
    },
    {
      title: "Best in Show",
      organization: "Annual Art Fair",
      year: "2022",
      description: "Awarded for the most innovative use of mixed media in contemporary art.",
    },
  ]

  const press = [
    {
      title: "VJJ's Color Symphony: A Visual Journey Through Emotion",
      publication: "Art Review Magazine",
      date: "March 2024",
      excerpt: "VJJ's latest exhibition demonstrates a masterful command of color theory and emotional expression...",
    },
    {
      title: "Rising Star: VJJ's Contemporary Vision",
      publication: "Modern Art Today",
      date: "January 2024",
      excerpt: "This emerging artist is redefining what contemporary art can be in the 21st century...",
    },
    {
      title: "Interview: The Creative Process Behind Abstract Dreams",
      publication: "Artist Quarterly",
      date: "November 2023",
      excerpt: "In this exclusive interview, VJJ shares insights into their creative process and artistic philosophy...",
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
                Artist Bio
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Discover the journey of a contemporary artist whose work explores
                the intersection of color, emotion, and form.
              </p>
              <Button
                size="lg"
                className="bg-gold-500 hover:bg-gold-600 text-charcoal-900 px-8 py-3"
              >
                <Download className="mr-2" size={20} />
                Download CV
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-lg shadow-2xl" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold-500 rounded-full flex items-center justify-center">
                <Award size={32} className="text-charcoal-900" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8 font-serif">
              About the Artist
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                VJJ is a contemporary artist whose work explores the intersection
                of color, emotion, and form. Born and raised in a vibrant creative
                community, VJJ developed a passion for visual storytelling at an
                early age. Their unique approach combines traditional techniques
                with modern innovation, creating pieces that resonate with
                diverse audiences.
              </p>
              <p>
                With over a decade of experience in various mediums, VJJ's art has
                been featured in galleries across the country. Each artwork tells
                a story, inviting viewers to explore their own interpretations
                and emotional connections. VJJ believes that art should not only
                beautify spaces but also provoke thought and inspire conversation.
              </p>
              <p>
                The artist's work is characterized by bold use of color, dynamic
                compositions, and a deep understanding of emotional resonance.
                Through experimentation with mixed media, digital techniques, and
                traditional painting methods, VJJ creates works that are both
                contemporary and timeless.
              </p>
              <p>
                VJJ holds an MFA in Fine Arts from the Rhode Island School of
                Design and has participated in numerous residencies and
                exhibitions. Their work is held in private collections worldwide
                and has been featured in major art publications and exhibitions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-charcoal-900 mb-4 font-serif">
              Career Timeline
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones and achievements in VJJ's artistic journey.
            </p>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center text-charcoal-900 font-bold">
                    {event.year}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-charcoal-900 mb-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin size={16} className="mr-2" />
                    {event.location}
                  </div>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
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
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600">
              Professional achievements and industry recognition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-gold-500">
                      {achievement.title}
                    </CardTitle>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Award size={16} className="mr-2" />
                      {achievement.organization} • {achievement.year}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-charcoal-900 mb-4 font-serif">
              Press & Media
            </h2>
            <p className="text-xl text-gray-600">
              Recent coverage and features in art publications.
            </p>
          </motion.div>

          <div className="space-y-8">
            {press.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-charcoal-900">
                    {article.title}
                  </h3>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar size={16} className="mr-2" />
                    {article.date}
                  </div>
                </div>
                <p className="text-gray-600 mb-2">{article.publication}</p>
                <p className="text-gray-700 italic">"{article.excerpt}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default BioPage

