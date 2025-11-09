import { NextResponse } from 'next/server'

export async function GET() {
  // In a real application, this would fetch from a database
  // For now, we'll return a message indicating client-side storage is used
  return NextResponse.json({ 
    message: 'Posts are stored in localStorage on the client side',
    posts: []
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.title || !body.content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      )
    }

    // In a real application, this would save to a database
    return NextResponse.json({ 
      success: true,
      message: 'Post saved successfully',
      post: body
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to save post' },
      { status: 500 }
    )
  }
}
