'use client'

import { 
  Mail, 
  MapPin, 
  Briefcase, 
  BookOpen, 
  Award, 
  Code, 
  Newspaper,
  Facebook,
  Linkedin,
  Github,
  Twitter,
  ChevronRight,
  Calendar,
  User
} from 'lucide-react'

export default function Home() {
  const blogPosts = [
    {
      id: 1,
      title: "Digital Transformation in Nepal",
      excerpt: "Exploring the rapid digital transformation and its impact on Nepali society and culture.",
      date: "2024-01-15",
      category: "Technology",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Art of Storytelling in Journalism",
      excerpt: "How effective storytelling can make journalism more impactful and engaging for readers.",
      date: "2024-01-10",
      category: "Journalism",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Content Creation Best Practices",
      excerpt: "Essential tips and strategies for creating compelling digital content that resonates.",
      date: "2024-01-05",
      category: "Content",
      readTime: "6 min read"
    }
  ]

  const skills = [
    "Digital Content Creation",
    "Journalism & Reporting",
    "Right to Information Advocacy",
    "Social Media Management",
    "Agricultural Entrepreneurship",
    "Press Freedom Activism",
    "Community Leadership",
    "Public Speaking",
    "Content Strategy"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <User className="w-6 h-6 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">Brijraj Kushwaha</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors">About</a>
              <a href="#blog" className="text-gray-700 hover:text-primary-600 transition-colors">Blog</a>
              <a href="#skills" className="text-gray-700 hover:text-primary-600 transition-colors">Skills</a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                  Digital Creator & Journalist
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm <span className="text-primary-600">Brijraj Kushwaha</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Digital creator, correspondent, and advocate for truth and justice. With 5.7K+ followers, I'm passionate 
                about journalism, right to information, and social causes. Working with Ujjyaalo and leading multiple 
                initiatives for press freedom and farmers' rights in Nepal.
              </p>
              <div className="p-4 bg-gradient-to-r from-primary-50 to-blue-50 border-l-4 border-primary-600 rounded-lg">
                <p className="text-gray-700 italic">
                  "अन्यायसँग सङ्घर्षको गर्ने स्वभाव छ, सत्य र अधिकारको लागि कलमबाट र आवाज दुबै प्लेटाउने मेरो जीवन–मुख हो।"
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  — My life mission: Fighting injustice with both pen and voice for truth and rights.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Get in Touch
                </a>
                <a 
                  href="#blog" 
                  className="px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-primary-600"
                >
                  Read My Blog
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-white/20 rounded-full flex items-center justify-center">
                    <User className="w-32 h-32 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600">Passionate about storytelling, justice, and digital innovation</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                <Newspaper className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Correspondent</h3>
              <p className="text-gray-600">Working with Ujjyaalo, covering important stories and bringing news to the community.</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Creator</h3>
              <p className="text-gray-600">Creating engaging digital content across multiple platforms with 5.7K+ followers.</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Advocate</h3>
              <p className="text-gray-600">Fighting for truth, justice, and the right to information in Nepal.</p>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Professional Experience</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 border-l-4 border-primary-600 bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Correspondent</h4>
                    <p className="text-sm text-primary-600">उज्यालो | Ujyaalo</p>
                  </div>
                </div>
              </div>
              <div className="p-5 border-l-4 border-purple-600 bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Vice President</h4>
                    <p className="text-sm text-purple-600">National Federation of Right to Information</p>
                  </div>
                </div>
              </div>
              <div className="p-5 border-l-4 border-green-600 bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Proprietor</h4>
                    <p className="text-sm text-green-600">Brij Krishi Farm</p>
                  </div>
                </div>
              </div>
              <div className="p-5 border-l-4 border-blue-600 bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Representative</h4>
                    <p className="text-sm text-blue-600">Nepal Press Union</p>
                  </div>
                </div>
              </div>
              <div className="p-5 border-l-4 border-orange-600 bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Convenor</h4>
                    <p className="text-sm text-orange-600">Nadi Adhikar Manch (River Rights Forum)</p>
                  </div>
                </div>
              </div>
              <div className="p-5 border-l-4 border-red-600 bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Speaker</h4>
                    <p className="text-sm text-red-600">Gandak River Control Struggle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Blog Posts</h2>
            <p className="text-xl text-gray-600">Thoughts, insights, and stories from my journey</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id} 
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-primary-700 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all">
                    Read More <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600">Tools and technologies I work with</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg hover:from-primary-50 hover:to-primary-100 transition-all hover:shadow-md group"
              >
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-primary-600 group-hover:scale-110 transition-transform" />
                  <span className="text-lg font-semibold text-gray-900">{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-primary-100">Let's connect and collaborate</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Professional</h3>
                  <p className="text-primary-100">Correspondent at Ujjyaalo</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Location</h3>
                  <p className="text-primary-100">Nepal</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Email</h3>
                  <p className="text-primary-100">contact@brijrajkushwaha.com</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Connect on Social Media</h3>
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="https://www.facebook.com/brijraaj.com.np" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                  <span className="font-semibold">Facebook</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-3 p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="font-semibold">LinkedIn</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-3 p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                  <span className="font-semibold">Twitter</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-3 p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <Github className="w-6 h-6" />
                  <span className="font-semibold">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Brijraj Kushwaha. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Designed by Prakash Kushwaha ❤️
          </p>
        </div>
      </footer>
    </div>
  )
}
