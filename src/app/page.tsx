import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import logoOrigins from '@/images/logos/origins-digital.png'
import logoPytheas from '@/images/logos/pytheas-capital.jpeg'
import logoWCS from '@/images/logos/wcs.png'
import keyboard from '@/images/photos/keyboard.jpg'
import aiAvatar from '@/images/photos/ai-avatar.jpeg'
import watch from '@/images/photos/watch.jpeg'
import aiBoxerGirl from '@/images/photos/ai-boxer-girl.png'
import aiDeveloper from '@/images/photos/ai-developer.png'
import { formatDate } from '@/lib/formatDate'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Basile Vernouillet',
}

export default async function Home() {
  const articles = [
    {
      slug: 'about',
      title: 'About',
      date: '2023-12-27',
      description:
        'I’m Basile. I live near Capbreton in France, where I code some stuff.',
      author: 'Basile Vernouillet',
    },
    {
      slug: 'projects',
      title: 'Projects',
      date: '2023-12-27',
      description: 'My portfolio: where every project is a fierce contender.',
      author: 'Basile Vernouillet',
    },
  ]

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-stone-800 sm:text-5xl dark:text-stone-100">
            Javascript developer, geek and poor kickboxer.
          </h1>
          <p className="mt-6 text-base text-stone-600 dark:text-stone-400">
            Hey, nice to meet you ! I’m Basile, a Javascript developer based
            near Capbreton. Currently working at{' '}
            <a href="https://origins.digital" target="_blank">
              Origins Digital
            </a>{' '}
            as Lead Developer Frontend. I love to build web things, combat
            sports, surf and some other stuff !
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/bazbazeso"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com/basile_vern"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/Karnak19"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/basile-vernouillet"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container
        className="mt-24 md:mt-28 xl:animate-scrolling-y"
        style={{
          animationTimeline: 'scroll(root)',
        }}
      >
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
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
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-stone-100 stroke-stone-400 dark:fill-stone-100/10 dark:stroke-stone-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-stone-400 dark:stroke-stone-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({
  article,
}: {
  article: { slug: string; title: string; date: string; description: string }
}) {
  return (
    <Card as="article">
      <Card.Title href={`/${article.slug}`}>{article.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-stone-500 transition group-hover:fill-stone-600 dark:fill-stone-400 dark:group-hover:fill-stone-300" />
    </Link>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-stone-800/5 ring-1 ring-stone-900/5 dark:border dark:border-stone-700/50 dark:bg-stone-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7 object-contain" />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-stone-900 dark:text-stone-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-stone-500 dark:text-stone-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-stone-400 dark:text-stone-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Origins Digital',
      title: 'Lead Developer Frontend',
      logo: logoOrigins,
      start: '2021',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Pytheas Capital Advisor',
      title: 'Lead Developer',
      logo: logoPytheas,
      start: '2021',
      end: '2021',
    },
    {
      company: 'Wild Code School',
      title: 'JS Teacher',
      logo: logoWCS,
      start: '2018',
      end: '2021',
    },
  ]

  return (
    <div className="rounded-2xl border border-stone-100 p-6 dark:border-stone-700/40">
      <h2 className="flex text-sm font-semibold text-stone-900 dark:text-stone-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="https://cv.basile.vernouillet.dev" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-stone-400 transition group-active:stroke-stone-600 dark:group-hover:stroke-stone-50 dark:group-active:stroke-stone-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-3', '-rotate-3']

  return (
    <div className="mt-16 overflow-x-clip sm:mt-20">
      <div
        className="-my-4 flex justify-center gap-5 py-8 sm:gap-8 xl:animate-scrolling-y-2"
        style={{ animationTimeline: 'scroll(root)' }}
      >
        {[
          aiAvatar,
          watch,
          keyboard,
          aiBoxerGirl,
          aiAvatar,
          aiDeveloper,
          watch,
          aiBoxerGirl,
          aiDeveloper,
        ].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-stone-100 sm:w-72 sm:rounded-2xl dark:bg-stone-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
