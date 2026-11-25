// next.config.js
module.exports = {
  eslint: {
    // Windows checkouts often use CRLF; linebreak-style is enforced as LF.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'assets.maccarianagency.com',
      'philipsweb.blob.core.windows.net',
    ],
  },
  async redirects() {
    return [
      {
        source: '/stratergy-guides',
        destination: '/strategy-guides',
        permanent: true,
      },
      {
        source: '/stratergy-guides/:path*',
        destination: '/strategy-guides/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};
