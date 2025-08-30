import { notFound } from 'next/navigation'
import { existsSync } from 'fs'
import { join } from 'path'
export default async function Page({ params }: { params: Promise<{ slug: string[] | string }> }) {
    const { slug } = await params
    const parts = Array.isArray(slug) ? slug : [slug]
    const path = parts.length ? parts.join('/') : 'index'
    const filePath = join(process.cwd(), 'app/content', `${path}.mdx`)

    if (!existsSync(filePath)) {
        notFound()
    }

    try {
        const Content = (await import(`@/app/content/${path}.mdx`)).default
        return <Content />
    } catch (e) {
        notFound()
    }
}