import localFont from 'next/font/local'

import { StoreProvider } from '@/redux/StoreProvider'

import { Toaster } from "react-hot-toast"

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
          <App>
            <Toaster position="bottom-right" />
            {children}
          </App>
        </StoreProvider>
      </body>
    </html>
  )
}