import { notFound } from 'next/navigation'
import { existsSync } from 'fs'
import { join } from 'path'

interface PageProps {
    params: {
        slug: string[]
    }
}

export default async function Page({ params }: PageProps) {
    const slug = params.slug.join('/')
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