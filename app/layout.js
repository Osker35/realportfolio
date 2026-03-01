import './globals.css'

export const metadata = {
  title: 'Emre Sudi Ulker',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
