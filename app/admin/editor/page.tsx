'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { 
  Save, 
  ArrowLeft, 
  Eye, 
  FileText,
  Calendar,
  Tag,
  Clock,
  Globe,
  Image as ImageIcon,
  Upload,
  X
} from 'lucide-react'

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

export default function Editor() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const editId = searchParams.get('id')
  
  const [formData, setFormData] = useState<BlogPost>({
    id: '',
    title: '',
    excerpt: '',
    content: '',
    category: 'Technology',
    date: new Date().toISOString().split('T')[0],
    readTime: '5 min read',
    published: false,
    image: ''
  })
  
  const [preview, setPreview] = useState(false)
  const [saving, setSaving] = useState(false)
  const [imagePreview, setImagePreview] = useState<string>('')

  useEffect(() => {
    // Check authentication
    if (typeof window !== 'undefined' && localStorage.getItem('adminAuth') !== 'true') {
      router.push('/admin')
      return
    }

    // Load post if editing
    if (editId) {
      const savedPosts = localStorage.getItem('blogPosts')
      if (savedPosts) {
        const posts: BlogPost[] = JSON.parse(savedPosts)
        const post = posts.find(p => p.id === editId)
        if (post) {
          setFormData(post)
        }
      }
    }
  }, [editId, router])

  const handleSave = (publish: boolean = false) => {
    setSaving(true)
    
    const postToSave: BlogPost = {
      ...formData,
      id: formData.id || Date.now().toString(),
      published: publish,
      date: formData.date || new Date().toISOString().split('T')[0]
    }

    // Get existing posts
    const savedPosts = localStorage.getItem('blogPosts')
    let posts: BlogPost[] = savedPosts ? JSON.parse(savedPosts) : []
    
    // Update or add post
    const existingIndex = posts.findIndex(p => p.id === postToSave.id)
    if (existingIndex >= 0) {
      posts[existingIndex] = postToSave
    } else {
      posts = [postToSave, ...posts]
    }
    
    localStorage.setItem('blogPosts', JSON.stringify(posts))
    
    setTimeout(() => {
      setSaving(false)
      router.push('/admin/dashboard')
    }, 500)
  }

  const estimateReadTime = (text: string) => {
    const wordsPerMinute = 200
    const words = text.trim().split(/\s+/).length
    const minutes = Math.ceil(words / wordsPerMinute)
    return `${minutes} min read`
  }

  const handleContentChange = (content: string) => {
    setFormData({
      ...formData,
      content,
      readTime: estimateReadTime(content)
    })
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB')
        return
      }

      // Check file type
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file')
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        const base64String = reader.result as string
        setFormData({ ...formData, image: base64String })
        setImagePreview(base64String)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = () => {
    setFormData({ ...formData, image: '' })
    setImagePreview('')
  }

  useEffect(() => {
    if (formData.image) {
      setImagePreview(formData.image)
    }
  }, [formData.image])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.push('/admin/dashboard')}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  {editId ? 'Edit Post' : 'New Post'}
                </h1>
                <p className="text-sm text-gray-600">
                  {formData.published ? 'Published' : 'Draft'}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setPreview(!preview)}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
              >
                <Eye className="w-4 h-4" />
                {preview ? 'Edit' : 'Preview'}
              </button>
              
              <button
                onClick={() => handleSave(false)}
                disabled={saving}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg transition disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
                Save Draft
              </button>
              
              <button
                onClick={() => handleSave(true)}
                disabled={saving}
                className="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 shadow-lg hover:shadow-xl"
              >
                <Globe className="w-4 h-4" />
                Publish
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!preview ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Editor */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-3 text-2xl font-bold border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                      placeholder="Enter post title..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Excerpt
                    </label>
                    <textarea
                      value={formData.excerpt}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none"
                      placeholder="Brief description of your post..."
                    />
                  </div>

                  {/* Featured Image Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Featured Image
                    </label>
                    
                    {imagePreview ? (
                      <div className="relative">
                        <img 
                          src={imagePreview} 
                          alt="Preview" 
                          className="w-full h-64 object-cover rounded-lg border border-gray-300"
                        />
                        <button
                          type="button"
                          onClick={handleRemoveImage}
                          className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition shadow-lg"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-indigo-500 hover:bg-gray-50 transition">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-12 h-12 text-gray-400 mb-3" />
                          <p className="mb-2 text-sm text-gray-600">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
                        </div>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleImageUpload}
                        />
                      </label>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Content
                    </label>
                    <textarea
                      value={formData.content}
                      onChange={(e) => handleContentChange(e.target.value)}
                      rows={20}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none font-mono text-sm"
                      placeholder="Write your post content here... (Supports Markdown)"
                    />
                    <p className="mt-2 text-sm text-gray-500">
                      Supports Markdown formatting
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Post Settings
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <Tag className="w-4 h-4" />
                      Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                    >
                      <option value="Technology">Technology</option>
                      <option value="Journalism">Journalism</option>
                      <option value="Content">Content</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Personal">Personal</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4" />
                      Publish Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <Clock className="w-4 h-4" />
                      Read Time
                    </label>
                    <input
                      type="text"
                      value={formData.readTime}
                      readOnly
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                    />
                    <p className="mt-1 text-xs text-gray-500">Auto-calculated</p>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200">
                <h3 className="font-semibold text-indigo-900 mb-2">💡 Tips</h3>
                <ul className="text-sm text-indigo-700 space-y-2">
                  <li>• Use clear, engaging titles</li>
                  <li>• Keep excerpts concise</li>
                  <li>• Add eye-catching featured images</li>
                  <li>• Use Markdown for formatting</li>
                  <li>• Add relevant categories</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          /* Preview Mode */
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Featured Image */}
              {imagePreview && (
                <div className="w-full h-96 overflow-hidden">
                  <img 
                    src={imagePreview} 
                    alt={formData.title || 'Post image'} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="p-8 md:p-12">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
                    {formData.category}
                  </span>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    {formData.title || 'Untitled Post'}
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(formData.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {formData.readTime}
                    </span>
                  </div>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-600 mb-6">
                    {formData.excerpt || 'No excerpt provided'}
                  </p>
                  <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
                    {formData.content || 'No content yet. Start writing!'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
