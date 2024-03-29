import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import { PostHogPageview } from '@/components/PosthogProvider'
import { Suspense } from 'react'
import PlausibleProvider from 'next-plausible'

export const metadata: Metadata = {
  metadataBase: new URL('https://basile.vernouillet.dev'),
  title: {
    template: '%s - Basile V.',
    default: 'Basile Vernouillet - Lead Developer JS',
  },
  description:
    'I’m Basile, a Javascript developer based in South West of France. I’m currently working at Origins Digital as a Lead Frontend Developer. I’m passionate about web technologies, and I love to learn new things.',

  openGraph: {
    type: 'website',
    url: 'https://basile.vernouillet.dev',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <meta name="title" content="Basile Vernouillet" />
        <PlausibleProvider domain="basile.vernouillet.dev" customDomain='https://plausible.rover.vernouillet.dev' />

      </head>
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
