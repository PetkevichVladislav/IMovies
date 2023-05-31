/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/movies',
				destination: '/build/index.html'
			}
		]
	}
}

module.exports = nextConfig
