import './globals.css'
import Navigation from './components/Navigation'

export const metadata = {
  title: 'Joaquín Mellado Quevedo',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}


