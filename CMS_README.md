# CMS Dashboard - Blog Management System

A modern, user-friendly Content Management System for managing blog posts.

## Features

### 🔐 Authentication
- Simple password-based login
- Session management with localStorage
- Default password: `admin123`

### 📝 Blog Post Editor
- Rich text editing interface
- Markdown support
- Live preview mode
- Auto-calculated read time
- Category management
- Draft and publish workflow

### 📊 Dashboard
- Overview statistics (Total posts, Published, Drafts)
- Search functionality
- Category filtering
- Post management (Edit, Delete)
- Responsive design

## Getting Started

### Access the CMS

1. Navigate to `/admin` in your browser
2. Enter the password: `admin123`
3. You'll be redirected to the dashboard

### Creating a Blog Post

1. Click "New Post" button in the dashboard
2. Fill in the post details:
   - **Title**: Your blog post title
   - **Excerpt**: Brief description (shown in listings)
   - **Content**: Main content (supports Markdown)
   - **Category**: Select from predefined categories
   - **Date**: Publication date
3. Click "Save Draft" to save without publishing
4. Click "Publish" to make the post live

### Managing Posts

- **Edit**: Click the edit icon next to any post
- **Delete**: Click the trash icon (confirmation required)
- **Search**: Use the search bar to find posts by title or excerpt
- **Filter**: Filter posts by category

### Preview Mode

- Click the "Preview" button in the editor to see how your post will look
- Switch back to "Edit" mode to continue editing

## Data Storage

Currently, blog posts are stored in the browser's localStorage. This means:
- ✅ No backend required
- ✅ Fast and simple
- ⚠️ Data is browser-specific
- ⚠️ Clearing browser data will delete posts

### Future Enhancements

To upgrade to a database-backed system:
1. Set up a database (MongoDB, PostgreSQL, etc.)
2. Update the API routes in `/app/api/posts/`
3. Replace localStorage calls with API calls

## File Structure

```
app/
├── admin/
│   ├── layout.tsx          # Admin layout wrapper
│   ├── page.tsx            # Login page
│   ├── dashboard/
│   │   └── page.tsx        # Main dashboard
│   └── editor/
│       └── page.tsx        # Post editor
├── api/
│   └── posts/
│       ├── route.ts        # Posts API endpoints
│       └── [id]/
│           └── route.ts    # Single post endpoints
└── page.tsx                # Main blog (displays published posts)
```

## Categories

Default categories:
- Technology
- Journalism
- Content
- Digital Marketing
- Social Media
- Personal

You can modify categories in the editor component.

## Security Notes

⚠️ **Important**: This is a basic implementation for demonstration purposes.

For production use:
1. Implement proper authentication (JWT, OAuth, etc.)
2. Add server-side validation
3. Use environment variables for sensitive data
4. Implement rate limiting
5. Add CSRF protection
6. Use a proper database with backups

## Tips for Writing

- **Clear Titles**: Use engaging, descriptive titles
- **Concise Excerpts**: Keep excerpts under 150 characters
- **Markdown**: Use Markdown for formatting (headings, lists, links, etc.)
- **Categories**: Choose the most relevant category
- **Read Time**: Automatically calculated based on word count

## Keyboard Shortcuts

- `Ctrl/Cmd + S`: Save draft (when implemented)
- `Esc`: Close preview mode

## Support

For issues or questions, please refer to the main project documentation.
