import './globals.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <article className="prose prose-lg dark:prose-invert max-w-4xl mx-auto p-8">
                    {children}
                </article>
            </body>
        </html>
    )
}