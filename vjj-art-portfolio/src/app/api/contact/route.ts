import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the input
    const validatedData = contactSchema.parse(body)
    
    // Save to database
    const contact = await prisma.contact.create({
      data: validatedData,
    })
    
    // Here you would typically send an email notification
    // For now, we'll just log it
    console.log("New contact form submission:", contact)
    
    return NextResponse.json(
      { 
        success: true, 
        message: "Thank you for your message! We'll get back to you soon.",
        id: contact.id 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Invalid form data",
          errors: error.issues 
        },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: "Internal server error" 
      },
      { status: 500 }
    )
  }
}





