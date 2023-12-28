import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import { PostHogPageview } from '@/components/PosthogProvider'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: {
    template: '%s - Basile V.',
    default: 'Basile Vernouillet - Lead Developer JS',
  },
  description:
    'I’m Basile, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.',
  
    openGraph: {
      type: 'website',
      url: 'https://basile.vernouillet.dev',
    }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <Suspense>
        <PostHogPageview />
      </Suspense>
      <body className="flex h-full bg-stone-50 dark:bg-stone-950">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
