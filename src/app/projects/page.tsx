import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAirsoftMarket from '@/images/logos/airsoft-market.webp'
import logoOriginsDigital from '@/images/logos/origins-digital.png'
import { GitHubIcon } from '@/components/SocialIcons'

const projects = [
  {
    name: 'Airsoft Market',
    description:
      'Marketplace for 🇫🇷 airsoft players to buy and sell their equipment.',
    link: {
      href: 'http://airsoft-market.store',
      label: 'airsoft-market.store',
    },
    logo: logoAirsoftMarket,
  },
  {
    name: 'Origins OTT Platform',
    description:
      'Over the top platforms product for sports organizations to stream, monetize their content.',
    link: {
      href: 'https://www.origins-digital.com/_page__ott',
      label: 'origins-digital.com/ott',
    },
    logo: logoOriginsDigital,
  },
  {
    name: 'Fetcher',
    description:
      'A tiny (less than 1kb) dead simple wrapper for Fetch API instance. Kind of Axios instance but for fetch.',
    link: {
      href: 'https://github.com/Karnak19/Fetcher',
      label: 'github.com/Karnak19/Fetcher',
    },
    icon: (
      <GitHubIcon className="h-8 w-8 fill-stone-500 transition group-hover:fill-stone-600 dark:fill-stone-400 dark:group-hover:fill-stone-300" />
    ),
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

const description = 'My portfolio: where every project is a fierce contender.'

export const metadata: Metadata = {
  title: 'Projects',
  description,
}

export default function Projects() {
  return (
    <SimpleLayout
      title={description}
      intro="Here are some of the projects I’ve worked on over the years. Some of them are personal open-source projects, some are professional projects I’ve worked on at my jobs."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-stone-800/5 ring-1 ring-stone-900/5 dark:border dark:border-stone-700/50 dark:bg-stone-800 dark:ring-0">
              {project.logo && (
                <Image src={project.logo} alt="" className="h-8 w-8" />
              )}

              {project.icon && project.icon}
            </div>
            <h2 className="mt-6 text-base font-semibold text-stone-800 dark:text-stone-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-stone-400 transition group-hover:text-amber-500 dark:text-stone-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
