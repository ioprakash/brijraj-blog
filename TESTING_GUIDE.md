# CMS Dashboard Testing Guide

## 🧪 Testing Checklist

### 1. Initial Setup ✅
- [x] Development server running on `http://localhost:3000`
- [x] No build errors
- [x] TypeScript configuration auto-generated

### 2. Authentication Testing

#### Test Login Page
1. Navigate to `http://localhost:3000/admin`
2. **Expected**: Login form with password field
3. **Test Cases**:
   - ❌ Enter wrong password → Should show "Invalid password" error
   - ✅ Enter `admin123` → Should redirect to dashboard
   - ✅ Refresh page after login → Should stay logged in
   - ✅ Navigate to `/admin/dashboard` directly → Should work if logged in

### 3. Dashboard Testing

#### Test Dashboard Features
1. Navigate to `http://localhost:3000/admin/dashboard`
2. **Expected**: Dashboard with stats and empty state (if no posts)
3. **Test Cases**:
   - ✅ Stats cards show: Total Posts (0), Published (0), Drafts (0)
   - ✅ "New Post" button is visible and clickable
   - ✅ Search bar is present
   - ✅ Category filter dropdown works
   - ✅ Logout button redirects to login page

### 4. Editor Testing

#### Test Create New Post
1. Click "New Post" from dashboard
2. Navigate to `http://localhost:3000/admin/editor`
3. **Expected**: Editor form with all fields
4. **Test Cases**:
   - ✅ Title field accepts input
   - ✅ Excerpt field accepts input
   - ✅ Content field accepts input
   - ✅ Category dropdown has 6 options
   - ✅ Date picker shows current date
   - ✅ Read time auto-calculates
   - ✅ Preview button toggles preview mode
   - ✅ "Save Draft" saves without publishing
   - ✅ "Publish" saves and marks as published

#### Test Sample Post Creation
**Create this test post:**
```
Title: Welcome to My Blog
Excerpt: This is my first blog post created with the new CMS dashboard.
Content: 
# Welcome!

This is my first blog post. I'm excited to share my thoughts and experiences with you.

## What to Expect

- Regular updates on technology
- Insights from journalism
- Personal stories and reflections

Thank you for reading!

Category: Personal
Date: Today's date
```

### 5. Blog Display Testing

#### Test Home Page
1. Navigate to `http://localhost:3000`
2. **Expected**: Home page with blog posts section
3. **Test Cases**:
   - ✅ Published posts appear in blog section
   - ✅ Draft posts do NOT appear
   - ✅ Post cards show: title, excerpt, category, date, read time
   - ✅ Clicking a post navigates to detail page
   - ✅ Default posts show if no CMS posts exist

### 6. Individual Post Testing

#### Test Post Detail Page
1. Click on a blog post from home page
2. Navigate to `http://localhost:3000/blog/[post-id]`
3. **Expected**: Full post view
4. **Test Cases**:
   - ✅ Post title displays correctly
   - ✅ Post excerpt displays
   - ✅ Full content displays
   - ✅ Category badge shows
   - ✅ Date and read time display
   - ✅ "Back to Home" button works
   - ✅ Invalid post ID shows 404 message

### 7. CRUD Operations Testing

#### Create
1. Create 3 different posts with different categories
2. **Expected**: All posts saved to localStorage
3. **Verify**: Check dashboard shows correct count

#### Read
1. View posts in dashboard
2. **Expected**: All posts listed with correct details
3. **Verify**: Search and filter work correctly

#### Update
1. Click edit on a post
2. Modify title and content
3. Save changes
4. **Expected**: Changes reflected in dashboard and blog

#### Delete
1. Click delete on a post
2. Confirm deletion
3. **Expected**: Post removed from dashboard and blog

### 8. Search & Filter Testing

#### Test Search
1. Create posts with different titles
2. Enter search term in dashboard
3. **Expected**: Only matching posts shown
4. **Test Cases**:
   - Search by title
   - Search by excerpt
   - Case-insensitive search
   - Clear search shows all posts

#### Test Filter
1. Create posts in different categories
2. Select category from dropdown
3. **Expected**: Only posts in that category shown
4. **Test Cases**:
   - Filter by each category
   - "All Categories" shows everything
   - Combine search + filter

### 9. State Management Testing

#### Test localStorage
1. Create a post and publish it
2. Open browser DevTools → Application → Local Storage
3. **Expected**: See `blogPosts` and `adminAuth` keys
4. **Test Cases**:
   - Posts persist after page refresh
   - Login state persists
   - Clearing localStorage logs out and removes posts

### 10. Responsive Design Testing

#### Test Different Screen Sizes
1. Open DevTools → Toggle device toolbar
2. **Test Cases**:
   - ✅ Mobile (375px): Layout stacks vertically
   - ✅ Tablet (768px): Grid shows 2 columns
   - ✅ Desktop (1024px+): Grid shows 3 columns
   - ✅ All buttons and forms are accessible

### 11. Edge Cases Testing

#### Test Error Handling
1. **Empty Fields**: Try to save post without title
2. **Long Content**: Create post with 1000+ words
3. **Special Characters**: Use emojis and special chars in title
4. **Date Edge Cases**: Set future dates, past dates
5. **Browser Compatibility**: Test in Chrome, Firefox, Edge

### 12. Performance Testing

#### Test Load Times
1. Create 20+ posts
2. **Expected**: Dashboard loads quickly
3. **Test Cases**:
   - Dashboard renders in < 1 second
   - Search is instant
   - Filter is instant
   - No lag when typing

## 🎯 Test Scenarios

### Scenario 1: First-Time User
1. Visit site for first time
2. See default blog posts
3. Navigate to `/admin`
4. Log in with `admin123`
5. Create first post
6. Publish it
7. View on home page
8. **Expected**: Smooth onboarding experience

### Scenario 2: Content Creator Workflow
1. Log in to dashboard
2. Create 5 draft posts
3. Edit and refine each one
4. Publish 3 posts
5. Keep 2 as drafts
6. Search for specific post
7. Edit published post
8. **Expected**: Efficient content management

### Scenario 3: Blog Reader
1. Visit home page
2. Browse blog posts
3. Click on interesting post
4. Read full content
5. Navigate back
6. Click another post
7. **Expected**: Smooth reading experience

## 📊 Test Results Template

```
Date: ___________
Tester: ___________

Authentication: ☐ Pass ☐ Fail
Dashboard: ☐ Pass ☐ Fail
Editor: ☐ Pass ☐ Fail
Blog Display: ☐ Pass ☐ Fail
CRUD Operations: ☐ Pass ☐ Fail
Search & Filter: ☐ Pass ☐ Fail
Responsive Design: ☐ Pass ☐ Fail

Issues Found:
1. ___________
2. ___________
3. ___________

Notes:
___________
```

## 🐛 Known Limitations

1. **Data Persistence**: Uses localStorage (browser-specific)
2. **Authentication**: Simple password (not production-ready)
3. **Markdown**: Not rendered (displays as plain text)
4. **Images**: No image upload functionality
5. **Multi-user**: Single user only

## ✅ Success Criteria

- [x] Can log in to admin panel
- [x] Can create new blog posts
- [x] Can edit existing posts
- [x] Can delete posts
- [x] Can save drafts
- [x] Can publish posts
- [x] Published posts appear on home page
- [x] Can view individual posts
- [x] Search functionality works
- [x] Filter functionality works
- [x] Responsive on all devices
- [x] No console errors
- [x] Data persists in localStorage

## 🚀 Quick Test Commands

### Check localStorage
```javascript
// In browser console
localStorage.getItem('blogPosts')
localStorage.getItem('adminAuth')
```

### Clear all data
```javascript
// In browser console
localStorage.clear()
location.reload()
```

### Create test data
```javascript
// In browser console (on dashboard page)
const testPost = {
  id: Date.now().toString(),
  title: "Test Post",
  excerpt: "This is a test",
  content: "Test content here",
  category: "Technology",
  date: new Date().toISOString().split('T')[0],
  readTime: "5 min read",
  published: true
}
const posts = JSON.parse(localStorage.getItem('blogPosts') || '[]')
posts.push(testPost)
localStorage.setItem('blogPosts', JSON.stringify(posts))
location.reload()
```

---

**Happy Testing!** 🎉

If you find any issues, please document them and refer to the implementation files for fixes.
