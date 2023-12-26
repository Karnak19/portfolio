'use client'

import { Button } from '@/components/Button'
import { useEffect, useState } from 'react'

export function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-stone-100 stroke-stone-400 dark:fill-stone-100/10 dark:stroke-stone-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-stone-400 dark:stroke-stone-500"
      />
    </svg>
  )
}

export function Skeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-4 w-full rounded bg-stone-100 dark:bg-stone-700/10" />
      <div className="mt-2 h-4 w-3/4 rounded bg-stone-100 dark:bg-stone-700/10" />
      <div className="mt-2 h-4 w-1/2 rounded bg-stone-100 dark:bg-stone-700/10" />
    </div>
  )
}

export default function Newsletter() {
  return (
    <form
      // action="/thank-you"
      className="rounded-2xl border border-stone-100 p-6 dark:border-stone-700/40"
    >
      <h2 className="flex text-sm font-semibold text-stone-900 dark:text-stone-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-stone-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-stone-800/5 placeholder:text-stone-400 focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-500/10 sm:text-sm dark:border-stone-700 dark:bg-stone-700/[0.15] dark:text-stone-200 dark:placeholder:text-stone-500 dark:focus:border-amber-400 dark:focus:ring-amber-400/10"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}
