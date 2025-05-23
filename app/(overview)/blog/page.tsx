'use client'

import RecentPosts from '@/app/components/blog/BlogGridSection'
import BlogHeroBanner from '@/app/components/blog/BlogHeroBanner'
import BlogSearchSection from '@/app/components/blog/BlogSearchSection'
import RecommendedBlog from '@/app/components/blog/RecomendedBlog'
import SearchBar from '@/app/components/blog/SearchBar'
import React from 'react'


function Blogpage() {
  return (
    <div>
        <BlogHeroBanner />
        <SearchBar />
         <BlogSearchSection />
       < RecentPosts />
       <RecommendedBlog />
    </div>
  );
}

export default Blogpage

