import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const featured = searchParams.get("featured")
    
    const where: any = {}
    
    if (category && category !== "all") {
      where.category = category
    }
    
    if (featured === "true") {
      where.featured = true
    }
    
    const artworks = await prisma.artwork.findMany({
      where,
      orderBy: { createdAt: "desc" },
    })
    
    return NextResponse.json(artworks)
  } catch (error) {
    console.error("Error fetching artworks:", error)
    return NextResponse.json(
      { error: "Failed to fetch artworks" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const artwork = await prisma.artwork.create({
      data: {
        title: body.title,
        description: body.description,
        medium: body.medium,
        year: parseInt(body.year),
        dimensions: body.dimensions,
        price: body.price ? parseFloat(body.price) : null,
        category: body.category,
        images: body.images || [],
        featured: body.featured || false,
        sold: body.sold || false,
      },
    })
    
    return NextResponse.json(artwork, { status: 201 })
  } catch (error) {
    console.error("Error creating artwork:", error)
    return NextResponse.json(
      { error: "Failed to create artwork" },
      { status: 500 }
    )
  }
}










