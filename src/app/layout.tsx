import { ReactNode } from 'react'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}): ReactNode {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
