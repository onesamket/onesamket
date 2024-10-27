import withPWA from 'next-pwa';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/i18n.ts');

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
const configWithPlugins = withNextIntl(nextPWA(nextConfig));

export default configWithPlugins;