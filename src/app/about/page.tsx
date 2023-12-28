import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/photos/ai-avatar.jpeg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-stone-800 transition hover:text-amber-500 dark:text-stone-200 dark:hover:text-amber-500"
      >
        <Icon className="h-6 w-6 flex-none fill-stone-500 transition group-hover:fill-amber-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

const socials = [
  {
    href: 'https://twitter.com/bazbazeso',
    icon: TwitterIcon,
    label: 'Follow on Twitter',
    className: '',
  },
  {
    href: 'https://instagram.com/basile_vern',
    icon: InstagramIcon,
    label: 'Follow on Instagram',
    className: 'mt-4',
  },
  {
    href: 'httos://github.com/Karnak19',
    icon: GitHubIcon,
    label: 'Follow on GitHub',
    className: 'mt-4',
  },
  {
    href: 'https://linkedin.com/in/basile-vernouillet',
    icon: LinkedInIcon,
    label: 'Follow on LinkedIn',
    className: 'mt-4',
  },
  {
    href: 'mailto:basile.vernouillet@gmail.com',
    icon: MailIcon,
    label: 'basile.vernouillet@gmail.com',
    className: 'mt-8 border-t border-stone-100 pt-8 dark:border-stone-700/40',
  },
]

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-6 rounded-2xl bg-stone-100 object-cover dark:bg-stone-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-stone-800 sm:text-5xl dark:text-stone-100">
            I’m Basile. I live near Capbreton in France, where I code some
            stuff.
          </h1>
          <div className="mt-6 space-y-7 text-base text-stone-600 dark:text-stone-400">
            <p>
              As long as I can remember, I was always fascinated by computers,
              video games and internet. But the true passion came when I
              discovered programming at about 20 during my first year of
              engineering school. I was amazed by the power of this tool and the
              possibilities it offers.
            </p>
            <p>
              My dad was kind of a geek, he was always playing video games with
              me, Gran Turismo, Tekken, Counter Strike. Also, he teaches me how
              to build a computer.
            </p>
            <p>
              I started to learn programming during high school in France (BTS),
              first with raw PHP, SQL and CSS. Remember the era of{' '}
              <code className="rounded bg-stone-500 p-0.5 text-sm text-stone-900">
                float: left;
              </code>{' '}
              to make kind of flexbox layout ? 😂 Apps we were building were
              ugly and lacking of true interactivity, but it was a good start.
              This is where I had to learn JavaScript.
            </p>
            <p>
              Other than programming, I love to play video games, but also
              recently fell in love with combat sports, especially kickboxing.
              After many years without any sport, it was really hard to get back
              in shape, but I’m really proud of my progress. 💪🥊
            </p>
            <p>
              As of today, I’m working as a lead front-end developer at Origins
              Digital, owned by Euro Media Group, Origins work exclusively with
              sporting organisations to ensure that the needs of today’s fans
              are met. We provide digital experiences by increasing
              interactivity and engagement.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {socials.map((social) => {
              return (
                <SocialLink
                  key={social.href}
                  href={social.href}
                  icon={social.icon}
                  className={social.className}
                >
                  {social.label}
                </SocialLink>
              )
            })}
          </ul>
        </div>
      </div>
    </Container>
  )
}
