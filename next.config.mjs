import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    experimental: {
        mdxRs: true // Enable Rust-based MDX compiler
    }
}

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        // Optionally configure any MDX options here
    }
})

export default withMDX(nextConfig)