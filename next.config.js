/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disable Sentry for now
    sentry: {
        disableServerWebpackPlugin: true,
        disableClientWebpackPlugin: true,
    }
}

module.exports = nextConfig