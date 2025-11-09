# Image Upload Feature Documentation

## ✨ Overview

The CMS dashboard now supports **featured image uploads** for blog posts. Images are stored as base64-encoded strings in localStorage and displayed across all views.

## 🎯 Features

### 1. Image Upload in Editor
- **Location**: `/admin/editor`
- **File Types**: PNG, JPG, JPEG, GIF, WebP
- **Max Size**: 5MB per image
- **Storage**: Base64 encoding in localStorage

### 2. Image Display Locations

#### Editor Preview
- Full-width featured image at top of preview
- Responsive height (384px)
- Object-fit cover for proper aspect ratio

#### Blog Post Cards (Home Page)
- 192px height thumbnail
- Hover zoom effect (scale 1.05)
- Fallback gradient if no image
- Overlay with category badge

#### Individual Post View
- Full-width featured image
- Positioned between header and content
- Rounded corners with shadow
- Auto height based on image aspect ratio

#### Dashboard Table
- 64x64px thumbnail
- Rounded corners
- Displayed alongside post title
- Only shown if image exists

## 📝 How to Use

### Uploading an Image

1. **Navigate to Editor**
   - Go to `/admin/dashboard`
   - Click "New Post" or edit existing post

2. **Upload Image**
   - Find "Featured Image" section
   - Click the upload area or drag & drop
   - Select image file (max 5MB)
   - Preview appears immediately

3. **Remove Image** (Optional)
   - Click the red X button on preview
   - Image is removed from post

4. **Save Post**
   - Click "Save Draft" or "Publish"
   - Image is saved with post data

### Viewing Images

**Home Page**
- Published posts show featured images
- Click post card to view full article

**Individual Post**
- Featured image displays at top
- Full width, responsive design

**Dashboard**
- Small thumbnails in post list
- Quick visual identification

## 🔧 Technical Details

### Data Structure

```typescript
interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  readTime: string
  published: boolean
  image?: string  // Base64 encoded image data
}
```

### Image Processing

```typescript
// Upload handler
const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0]
  
  // Validation
  if (file.size > 5 * 1024 * 1024) {
    alert('Image size should be less than 5MB')
    return
  }
  
  if (!file.type.startsWith('image/')) {
    alert('Please upload an image file')
    return
  }
  
  // Convert to base64
  const reader = new FileReader()
  reader.onloadend = () => {
    const base64String = reader.result as string
    setFormData({ ...formData, image: base64String })
  }
  reader.readAsDataURL(file)
}
```

### Display Components

**Editor Upload UI**
```tsx
{imagePreview ? (
  <div className="relative">
    <img src={imagePreview} alt="Preview" className="w-full h-64 object-cover rounded-lg" />
    <button onClick={handleRemoveImage}>
      <X className="w-4 h-4" />
    </button>
  </div>
) : (
  <label className="upload-area">
    <Upload className="w-12 h-12" />
    <input type="file" accept="image/*" onChange={handleImageUpload} />
  </label>
)}
```

**Blog Card Display**
```tsx
<div className="h-48 relative overflow-hidden">
  {post.image ? (
    <img 
      src={post.image} 
      alt={post.title}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
    />
  ) : (
    <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600" />
  )}
</div>
```

## 💾 Storage Considerations

### Current Implementation
- **Method**: Base64 encoding in localStorage
- **Pros**: 
  - No backend required
  - Immediate availability
  - Simple implementation
- **Cons**:
  - Increases data size (~33% larger)
  - localStorage has 5-10MB limit
  - Not ideal for many large images

### Recommended Limits
- **Max Images**: ~20-30 posts with images
- **Image Size**: Keep under 500KB for best performance
- **Total Storage**: Monitor localStorage usage

### Check Storage Usage
```javascript
// In browser console
const posts = JSON.parse(localStorage.getItem('blogPosts') || '[]')
const totalSize = JSON.stringify(posts).length
console.log(`Storage used: ${(totalSize / 1024 / 1024).toFixed(2)} MB`)
```

## 🚀 Future Enhancements

### Recommended Upgrades

1. **Cloud Storage Integration**
   - Upload to Cloudinary, AWS S3, or similar
   - Store only URLs in database
   - Better performance and scalability

2. **Image Optimization**
   - Automatic compression
   - Multiple sizes (thumbnail, medium, full)
   - WebP conversion for better compression

3. **Advanced Features**
   - Image cropping/editing
   - Multiple images per post (gallery)
   - Alt text editor for accessibility
   - Lazy loading for performance

4. **CDN Integration**
   - Serve images from CDN
   - Faster load times
   - Reduced bandwidth

### Migration to Cloud Storage

**Example: Cloudinary Integration**

```typescript
// Install: npm install cloudinary

import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

// Upload function
async function uploadImage(file: File) {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', 'your_preset')
  
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    { method: 'POST', body: formData }
  )
  
  const data = await response.json()
  return data.secure_url // Store this URL instead of base64
}
```

## 🎨 Styling Classes

### Upload Area
```css
.upload-area {
  @apply flex flex-col items-center justify-center w-full h-64 
         border-2 border-dashed border-gray-300 rounded-lg 
         cursor-pointer hover:border-indigo-500 hover:bg-gray-50 
         transition;
}
```

### Image Preview
```css
.image-preview {
  @apply w-full h-64 object-cover rounded-lg border border-gray-300;
}
```

### Blog Card Image
```css
.blog-card-image {
  @apply w-full h-full object-cover group-hover:scale-105 
         transition-transform duration-300;
}
```

## 🐛 Troubleshooting

### Image Not Uploading
1. Check file size (must be < 5MB)
2. Verify file type is an image
3. Check browser console for errors
4. Ensure localStorage isn't full

### Image Not Displaying
1. Verify post is published (for home page)
2. Check if image data exists in localStorage
3. Inspect base64 string format
4. Clear cache and reload

### Performance Issues
1. Reduce image file sizes before upload
2. Limit number of posts with images
3. Consider upgrading to cloud storage
4. Use image compression tools

### localStorage Full Error
```javascript
// Clear old posts or images
const posts = JSON.parse(localStorage.getItem('blogPosts') || '[]')
const postsWithoutImages = posts.map(p => ({ ...p, image: undefined }))
localStorage.setItem('blogPosts', JSON.stringify(postsWithoutImages))
```

## 📊 Best Practices

### Image Optimization
1. **Resize before upload**: Use 1200px width max
2. **Compress**: Use tools like TinyPNG
3. **Format**: Use WebP when possible, fallback to JPG
4. **Aspect Ratio**: 16:9 works best for blog cards

### Accessibility
1. Always provide meaningful alt text
2. Use descriptive filenames
3. Ensure sufficient contrast with overlays
4. Test with screen readers

### Performance
1. Lazy load images on scroll
2. Use appropriate image sizes
3. Implement progressive loading
4. Monitor localStorage usage

## 📱 Responsive Behavior

### Mobile (< 768px)
- Single column layout
- Full-width images
- Touch-friendly upload area

### Tablet (768px - 1024px)
- 2-column grid
- Optimized image sizes
- Balanced layout

### Desktop (> 1024px)
- 3-column grid
- Full-resolution images
- Hover effects enabled

## ✅ Testing Checklist

- [ ] Upload image in editor
- [ ] Preview image in editor preview mode
- [ ] Remove image and re-upload
- [ ] Save post with image
- [ ] Verify image shows in dashboard
- [ ] Check image on home page
- [ ] View full post with image
- [ ] Test with different image formats
- [ ] Test with large images (near 5MB)
- [ ] Test responsive display on mobile
- [ ] Verify image persists after refresh

---

**Version**: 1.0.0  
**Last Updated**: November 2024  
**Status**: ✅ Fully Functional
