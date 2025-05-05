/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: "export",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "github.githubassets.com",
                pathname: "/**",
            },
        ],
    },
};

module.exports = nextConfig;
