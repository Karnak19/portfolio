import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'
import { pages } from '@/app/_pages'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-amber-500 dark:hover:text-amber-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-stone-100 pb-16 pt-10 dark:border-stone-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-stone-800 dark:text-stone-200">
                {pages.map((page) => (
                  <NavLink key={page.href} href={page.href}>
                    {page.label}
                  </NavLink>
                ))}
              </div>
              <p className="text-sm text-stone-400 dark:text-stone-500">
                &copy; {new Date().getFullYear()} Basile Vernouillet. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
