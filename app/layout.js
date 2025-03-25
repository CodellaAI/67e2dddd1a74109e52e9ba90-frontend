
import './globals.css';

export const metadata = {
  title: 'Simple Connect App',
  description: 'A minimalist frontend and backend connection demo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  )
}
