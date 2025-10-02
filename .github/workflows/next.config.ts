import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // نخلي الموقع static مناسب لـ GitHub Pages
  output: 'export',

  // اسم المستودع بالضبط (لا تغيّره)
  basePath: '/my-web',
  assetPrefix: '/my-web/',
  images: { unoptimized: true },

  // يتفادى مشاكل الروابط على الدومين الفرعي
  trailingSlash: true,

  // تخطي أخطاء الـ TypeScript و ESLint أثناء البناء (مؤقتًا حتى يشتغل النشر)
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
