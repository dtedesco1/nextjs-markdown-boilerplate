import { readFileSync, existsSync, readdirSync } from 'fs'
import { join } from 'path'
import { notFound } from 'next/navigation'

// Get all MDX files in the app directory
async function getMDXPaths() {
    const files = readdirSync(join(process.cwd(), 'app'))
        .filter(file => file.endsWith('.mdx'))
        .map(file => file.replace('.mdx', ''))
    return files
}

export async function generateStaticParams() {
    const paths = await getMDXPaths()
    return paths.map(path => ({
        slug: [path]
    }))
}

interface PageProps {
    params: Promise<{ slug: string[] }>
}

export default async function Page({ params }: PageProps) {
    // Handle async params
    const resolvedParams = await params
    const slug = resolvedParams.slug.join('/')
    const filePath = join(process.cwd(), 'app', `${slug}.mdx`)

    if (!existsSync(filePath)) {
        notFound()
    }

    const Component = await import(`../${slug}.mdx`)

    return (
        <article className="prose prose-lg dark:prose-invert">
            <Component.default />
        </article>
    )
}
