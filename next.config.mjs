import withPWA from 'next-pwa';

const nextPWA = withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "github.com",
            },
            {
                hostname: "api.microlink.io",
            }
        ],
    },
}

export default nextPWA(nextConfig);