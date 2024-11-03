import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // Add your custom components here
        h1: ({ children }) => (
            <h1 style={{ color: '#2c2' }}>{children}</h1>
        ),
        img: (props) => (
            <Image
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                {...props}
            />
        ),
        ...components,
    }
}
