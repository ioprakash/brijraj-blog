import { NextResponse } from 'next/server'

// Mark route as dynamic
export const dynamic = 'force-dynamic'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  // In a real application, this would fetch from a database
  return NextResponse.json({ 
    message: 'Posts are stored in localStorage on the client side',
    id: params.id
  })
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    
    // In a real application, this would update in a database
    return NextResponse.json({ 
      success: true,
      message: 'Post updated successfully',
      id: params.id,
      post: body
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update post' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  // In a real application, this would delete from a database
  return NextResponse.json({ 
    success: true,
    message: 'Post deleted successfully',
    id: params.id
  })
}
