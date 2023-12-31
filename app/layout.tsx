import './globals.css'
import { client } from '@/tina/__generated__/client'
import type { Metadata } from 'next'
import { Inter, Nanum_Myeongjo } from 'next/font/google'

import Header from '@/components/shared/header'

import Footer from '@/components/shared/Footer'
import { GlobalProvider } from '../context/globalContext'
import { ReactChildren } from '@/types/types'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const nanumMyeongjo = Nanum_Myeongjo({
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }: ReactChildren) {
  const globalData = await getTinaGlobal()

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${nanumMyeongjo.variable} font-sans text-gray-700`}
      >
        <GlobalProvider>
          <Header globalData={globalData} />
          {children}
          <Footer globalData={globalData} />
        </GlobalProvider>
      </body>
    </html>
  )
}

const getTinaGlobal = async () => {
  const tinaProps = await client.queries.global({
    relativePath: `index.json`,
  })

  return tinaProps
}
