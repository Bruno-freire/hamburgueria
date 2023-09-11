import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hamburgueria',
  description: 'Catálogo digital para hamburgueria com enorme variedade de produtos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body>{children}</body>
    </html>
  )
}
