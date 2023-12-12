import localFont from 'next/font/local'

import { StoreProvider } from '@/redux/StoreProvider'

import App from '@/components/App'

import './globals.css'

export const metadata = {
  title: 'Shopping Cart',
  description: 'next.js shopping cart',
}

const vazirFont = localFont({
  src: '../public/fonts/Vazirmatn-Regular.woff2'
})


export default function RootLayout({ children }) {
  return (
    <html lang='en' >
      <body className={`${vazirFont.className} text-gray-900 bg-white`} >
        <StoreProvider>
          <App>{children}</App>
        </StoreProvider>
      </body>
    </html>
  )
}