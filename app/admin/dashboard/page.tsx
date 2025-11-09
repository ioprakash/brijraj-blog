'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  PlusCircle, 
  Edit, 
  Trash2, 
  LogOut, 
  FileText, 
  Calendar,
  Eye,
  Search
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

export default function Dashboard() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')
  const router = useRouter()

  useEffect(() => {
    // Check authentication
    if (typeof window !== 'undefined' && localStorage.getItem('adminAuth') !== 'true') {
      router.push('/admin')
      return
    }

    // Load posts from localStorage
    const savedPosts = localStorage.getItem('blogPosts')
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts))
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    router.push('/admin')
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      const updatedPosts = posts.filter(post => post.id !== id)
      setPosts(updatedPosts)
      localStorage.setItem('blogPosts', JSON.stringify(updatedPosts))
    }
  }

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = filterCategory === 'all' || post.category === filterCategory
    return matchesSearch && matchesCategory
  })

  const categories = ['all', ...Array.from(new Set(posts.map(post => post.category)))]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">CMS Dashboard</h1>
              <p className="text-sm text-gray-600">Manage your blog posts</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Posts</p>
                <p className="text-3xl font-bold text-gray-900">{posts.length}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Published</p>
                <p className="text-3xl font-bold text-gray-900">
                  {posts.filter(p => p.published).length}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Eye className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Drafts</p>
                <p className="text-3xl font-bold text-gray-900">
                  {posts.filter(p => !p.published).length}
                </p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Edit className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="flex-1 w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                />
              </div>
            </div>
            
            <div className="flex gap-3 w-full md:w-auto">
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'All Categories' : cat}
                  </option>
                ))}
              </select>
              
              <button
                onClick={() => router.push('/admin/editor')}
                className="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-lg hover:shadow-xl"
              >
                <PlusCircle className="w-5 h-5" />
                New Post
              </button>
            </div>
          </div>
        </div>

        {/* Posts List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No posts found</h3>
              <p className="text-gray-600 mb-6">
                {posts.length === 0 
                  ? "Get started by creating your first blog post"
                  : "Try adjusting your search or filter"}
              </p>
              {posts.length === 0 && (
                <button
                  onClick={() => router.push('/admin/editor')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  <PlusCircle className="w-5 h-5" />
                  Create Your First Post
                </button>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredPosts.map((post) => (
                    <tr key={post.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          {post.image && (
                            <img 
                              src={post.image} 
                              alt={post.title}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                          )}
                          <div>
                            <div className="font-medium text-gray-900">{post.title}</div>
                            <div className="text-sm text-gray-500 line-clamp-1">{post.excerpt}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                          {post.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          post.published 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {post.published ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => router.push(`/admin/editor?id=${post.id}`)}
                            className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
                            title="Edit"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(post.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
