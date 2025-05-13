import withPWA from 'next-pwa';


const nextPWA = withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "github.com",
            },
            {
                protocol: 'https',
                hostname: "api.microlink.io",
            }
        ],
    },
};

// Apply plugins in the correct order
const configWithPlugins = nextPWA(nextConfig);

export default configWithPlugins;