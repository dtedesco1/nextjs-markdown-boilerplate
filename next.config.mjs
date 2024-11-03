import createMDX from '@next/mdx'

export default createMDX()(/** @type {import('next').NextConfig} */({
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx']
}))