import { notFound } from 'next/navigation'
import { existsSync } from 'fs'
import { join } from 'path'

interface PageProps {
    params: Promise<{
        slug: string[]
    }> | {
        slug: string[]
    }
}

export default async function Page({ params }: PageProps) {
    const resolvedParams = await Promise.resolve(params)
    const slug = resolvedParams.slug.join('/')
    const filePath = join(process.cwd(), 'app/content', `${slug}.mdx`)

    if (!existsSync(filePath)) {
        notFound()
    }

    try {
        const Content = (await import(`@/app/content/${slug}.mdx`)).default
        return <Content />
    } catch (e) {
        notFound()
    }
}