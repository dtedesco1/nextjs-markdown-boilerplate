import { notFound } from 'next/navigation'
import { existsSync } from 'fs'
import { join } from 'path'
import { PageProps as NextPageProps } from '@/.next/types/app/[...slug]/page'

export default async function Page({ params }: NextPageProps) {
    const { slug } = await params
    const path = slug.join('/')
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