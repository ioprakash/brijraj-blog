'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  readTime: string
  published: boolean
  image?: string
}

export default function BlogPostPage() {
  const params = useParams()
  const router = useRouter()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedPosts = localStorage.getItem('blogPosts')
      if (savedPosts) {
        const allPosts: BlogPost[] = JSON.parse(savedPosts)
        const foundPost = allPosts.find(p => p.id === params.id && p.published)
        setPost(foundPost || null)
      }
      setLoading(false)
    }
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <button
            onClick={() => router.push('/')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => router.push('/')}
              className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Home</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-6">
              {post.excerpt}
            </p>
            
            <div className="flex items-center gap-6 text-sm text-gray-600 border-t border-b border-gray-200 py-4">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </header>

          {/* Featured Image */}
          {post.image && (
            <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
                {post.content}
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <button
                onClick={() => router.push('/')}
                className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold transition"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to all posts
              </button>
              
              <div className="flex gap-3">
                <button className="p-2 text-gray-600 hover:text-indigo-600 transition">
                  Share
                </button>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </div>
  )
}
