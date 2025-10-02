import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',                 // يخلي Next.js يصدّر الموقع كـ static
  basePath: '/my-web',              // هنا تحط اسم الريبو تبعك بالضبط
  assetPrefix: '/my-web/',          // عشان روابط الـ CSS/JS والصور تشتغل
  images: { unoptimized: true },    // GitHub Pages ما يدعم Image Optimization
  trailingSlash: true               // يساعد مع الروابط على Pages
};

export default nextConfig;
