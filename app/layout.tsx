import { Footer, Navbar } from '@/components'
import './globals.css'


export const metadata = {
  title: 'Car Hub',
  description: 'Car Hub is a car rental service that allows you to rent a car from anywhere in the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      <body className={"relative"}>
        <Navbar />
        {children}
        <Footer />
      </body>
      
    </html>
  )
}
