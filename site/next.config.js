/** @type {import('next').NextConfig} */

const nextConfig = {
 env: {
    name: 'My Custom Registry',
    description: 'The official store for My Custom supported workspaces.',
    icon: '/img/my_custom_logo.svg',
    listUrl: 'https://mycustomregistry.com/',
    contactUrl: 'https://mycustomregistry.com/support',
},
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
