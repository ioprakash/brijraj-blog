'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Lock } from 'lucide-react'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    // Check if already authenticated
    if (typeof window !== 'undefined' && localStorage.getItem('adminAuth') === 'true') {
      router.push('/admin/dashboard')
    }
  }, [router])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple password check (in production, use proper authentication)
    if (password === 'admin123') {
      localStorage.setItem('adminAuth', 'true')
      router.push('/admin/dashboard')
    } else {
      setError('Invalid password')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-indigo-100 p-4 rounded-full">
            <Lock className="w-8 h-8 text-indigo-600" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">CMS Dashboard</h1>
        <p className="text-center text-gray-600 mb-8">Enter your password to continue</p>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setError('')
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
              placeholder="Enter password"
              required
            />
          </div>
          
          {error && (
            <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}
          
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200 shadow-lg hover:shadow-xl"
          >
            Login
          </button>
        </form>
        
        <p className="mt-6 text-center text-sm text-gray-500">
          Default password: <code className="bg-gray-100 px-2 py-1 rounded">admin123</code>
        </p>
      </div>
    </div>
  )
}
