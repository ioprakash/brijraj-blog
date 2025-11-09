# Quick Start Guide - CMS Dashboard

## 🚀 Getting Started

### 1. Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### 2. Access the CMS Dashboard

1. Open your browser and navigate to: `http://localhost:3000/admin`
2. Enter the password: `admin123`
3. Click "Login"

### 3. Create Your First Blog Post

1. Click the **"New Post"** button in the dashboard
2. Fill in the form:
   - **Title**: Enter a catchy title
   - **Excerpt**: Write a brief summary (1-2 sentences)
   - **Content**: Write your full blog post content
   - **Category**: Select a category from the dropdown
   - **Date**: Choose the publication date

3. Click **"Save Draft"** to save without publishing, or **"Publish"** to make it live

### 4. View Your Published Posts

1. Navigate to the home page: `http://localhost:3000`
2. Scroll to the "Latest Blog Posts" section
3. Click on any post to read the full article

## 📋 Features Overview

### Dashboard (`/admin/dashboard`)
- View all posts (published and drafts)
- Search posts by title or excerpt
- Filter by category
- Quick stats overview
- Edit or delete posts

### Editor (`/admin/editor`)
- Rich text editing
- Live preview mode
- Auto-calculated read time
- Category selection
- Draft/Publish workflow

### Blog Display (`/`)
- Shows all published posts
- Click any post to view full content
- Responsive design
- Modern UI

### Individual Post (`/blog/[id]`)
- Full post content
- Metadata (date, read time, category)
- Back navigation

## 🔑 Default Credentials

- **Password**: `admin123`

⚠️ **Important**: Change this password in production!

## 💾 Data Storage

Posts are currently stored in **browser localStorage**:
- Data persists across browser sessions
- Data is specific to each browser
- Clearing browser data will delete posts

## 📝 Tips for Writing

1. **Use Markdown**: The content field supports Markdown formatting
   - `# Heading 1`
   - `## Heading 2`
   - `**bold text**`
   - `*italic text*`
   - `[link](url)`

2. **Keep Excerpts Short**: Aim for 100-150 characters

3. **Choose Relevant Categories**: This helps readers find related content

4. **Preview Before Publishing**: Use the preview button to see how your post looks

## 🎨 Customization

### Change Categories

Edit the categories in `/app/admin/editor/page.tsx`:

```typescript
<select>
  <option value="Technology">Technology</option>
  <option value="Your Category">Your Category</option>
  // Add more categories
</select>
```

### Change Password

Edit the password check in `/app/admin/page.tsx`:

```typescript
if (password === 'your-new-password') {
  // Login logic
}
```

## 🔄 Workflow

1. **Create** → Write your post in the editor
2. **Save Draft** → Save without publishing
3. **Preview** → Check how it looks
4. **Publish** → Make it live on the blog
5. **Edit** → Update anytime from the dashboard
6. **Delete** → Remove posts you no longer need

## 🌐 URLs

- **Home**: `http://localhost:3000`
- **Admin Login**: `http://localhost:3000/admin`
- **Dashboard**: `http://localhost:3000/admin/dashboard`
- **Editor**: `http://localhost:3000/admin/editor`
- **Blog Post**: `http://localhost:3000/blog/[post-id]`

## ⚡ Next Steps

1. Create a few sample posts
2. Customize the categories to match your needs
3. Consider adding a database for persistent storage
4. Implement proper authentication for production
5. Add image upload functionality
6. Implement Markdown rendering for better formatting

## 🆘 Troubleshooting

**Posts not showing on home page?**
- Make sure you clicked "Publish" (not just "Save Draft")
- Check that the post has a valid date

**Lost access to dashboard?**
- Clear localStorage and log in again
- Check browser console for errors

**Posts disappeared?**
- Check if browser data was cleared
- Posts are stored in localStorage (browser-specific)

## 📚 Learn More

- See `CMS_README.md` for detailed documentation
- Check Next.js documentation for framework details
- Explore Tailwind CSS for styling customization

---

Happy blogging! 🎉
