const {join} = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
    reactStrictMode: true, // Enable React strict mode at the top level
    async headers() {
        return [
            {
                // Matching all API routes
                source: "/v1/(.*)",
                headers: [
                    {key: "Access-Control-Allow-Credentials", value: "true"},
                    {key: "Access-Control-Allow-Origin", value: "http://localhost:3000"}, // Replace with your actual origin
                    {key: "Access-Control-Allow-Methods", value: "GET, DELETE, PATCH, POST, PUT"},
                    {
                        key: "Access-Control-Allow-Headers",
                        value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
                    },
                ]
            }
        ];
    },
    i18n: {
        locales: ['en', 'fr', 'es'], // An array of supported locales
        defaultLocale: 'en', // The default locale
    },

    sassOptions: {
        includePaths: [join(__dirname, 'src/styles')],
        prependData: `@import "variables.scss";`,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
    },
};

module.exports = nextConfig;
