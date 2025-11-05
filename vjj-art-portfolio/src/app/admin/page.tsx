"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Plus, Eye, Edit, Trash2, Mail, Users, Palette } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const AdminDashboard = () => {
  const [artworks, setArtworks] = useState([])
  const [contacts, setContacts] = useState([])
  const [stats, setStats] = useState({
    totalArtworks: 0,
    totalContacts: 0,
    unreadContacts: 0,
    featuredArtworks: 0,
  })

  useEffect(() => {
    // Fetch data from API
    fetchArtworks()
    fetchContacts()
  }, [])

  const fetchArtworks = async () => {
    try {
      const response = await fetch("/api/artworks")
      const data = await response.json()
      setArtworks(data)
      setStats(prev => ({
        ...prev,
        totalArtworks: data.length,
        featuredArtworks: data.filter((art: any) => art.featured).length,
      }))
    } catch (error) {
      console.error("Error fetching artworks:", error)
    }
  }

  const fetchContacts = async () => {
    try {
      const response = await fetch("/api/contacts")
      const data = await response.json()
      setContacts(data)
      setStats(prev => ({
        ...prev,
        totalContacts: data.length,
        unreadContacts: data.filter((contact: any) => !contact.read).length,
      }))
    } catch (error) {
      console.error("Error fetching contacts:", error)
    }
  }

  const deleteArtwork = async (id: string) => {
    if (confirm("Are you sure you want to delete this artwork?")) {
      try {
        await fetch(`/api/artworks/${id}`, {
          method: "DELETE",
        })
        fetchArtworks()
      } catch (error) {
        console.error("Error deleting artwork:", error)
      }
    }
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-charcoal-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">
            Manage your artworks, view contacts, and monitor your portfolio.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            {
              title: "Total Artworks",
              value: stats.totalArtworks,
              icon: Palette,
              color: "bg-blue-500",
            },
            {
              title: "Featured Works",
              value: stats.featuredArtworks,
              icon: Eye,
              color: "bg-gold-500",
            },
            {
              title: "Total Contacts",
              value: stats.totalContacts,
              icon: Users,
              color: "bg-green-500",
            },
            {
              title: "Unread Messages",
              value: stats.unreadContacts,
              icon: Mail,
              color: "bg-red-500",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold text-charcoal-900">
                        {stat.value}
                      </p>
                    </div>
                    <div className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center`}>
                      <stat.icon size={24} className="text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gold-500 hover:bg-gold-600 text-charcoal-900">
                  <Plus className="mr-2" size={20} />
                  Add New Artwork
                </Button>
                <Button variant="outline">
                  <Mail className="mr-2" size={20} />
                  View All Contacts
                </Button>
                <Button variant="outline">
                  <Edit className="mr-2" size={20} />
                  Edit Site Content
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Artworks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Recent Artworks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {artworks.slice(0, 5).map((artwork: any, index: number) => (
                  <div
                    key={artwork.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-lg" />
                      <div>
                        <h3 className="font-semibold text-charcoal-900">
                          {artwork.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {artwork.medium} • {artwork.year}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye size={16} />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit size={16} />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => deleteArtwork(artwork.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Recent Contact Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contacts.slice(0, 5).map((contact: any, index: number) => (
                  <div
                    key={contact.id}
                    className={`p-4 rounded-lg border-l-4 ${
                      contact.read ? "bg-gray-50" : "bg-blue-50 border-blue-500"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-charcoal-900">
                          {contact.name}
                        </h3>
                        <p className="text-sm text-gray-600">{contact.email}</p>
                        <p className="text-sm font-medium text-charcoal-900 mt-1">
                          {contact.subject}
                        </p>
                        <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                          {contact.message}
                        </p>
                      </div>
                      <div className="text-xs text-gray-500">
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default AdminDashboard

