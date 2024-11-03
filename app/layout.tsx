import './globals.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <main className="max-w-4xl mx-auto px-4 py-8">
                    {children}
                </main>
            </body>
        </html>
    )
}