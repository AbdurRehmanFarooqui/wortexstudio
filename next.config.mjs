/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wiysrhwnevctbcjlqron.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
      // If you are using signed URLs (like in your error), use this broader path:
      {
        protocol: 'https',
        hostname: 'wiysrhwnevctbcjlqron.supabase.co',
        port: '',
        pathname: '/storage/v1/object/sign/**',
      },
    ],
  },
};

export default nextConfig;