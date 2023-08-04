import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
<SectionIntro
  title="Delivering Excellence in Indie Game Testing"
  className="mt-24 sm:mt-32 lg:mt-40"
>
  <p>
    At CodeWardens, we are deeply involved in the indie gaming community and understand the specific challenges you face. Our tailored video game QA services help ensure your game provides the best player experience. Contact us to learn how we can help elevate your game to the next level.
  </p>
</SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time dateTime={caseStudy.year} className="font-semibold">
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Excellence()
{
  return(
    <div className='mt-10 bg-neutral-950 py-20 sm:mt-8 sm:py-20 lg:mt-14 flex justify-end text-right'>
      <SectionIntro 
        title="Delivering Excellence in Indie Game Testing"
        invert>
      <p>
        At CodeWardens, we are deeply involved in the indie gaming community and understand the specific challenges you face.
        Our tailored video game QA services help ensure your game provides the best player experience.
        Contact us to learn how we can help elevate your game to the next level.
      </p>
      <Button href="/contact" className="mt-6 sm:mt-8 lg:mt-10 " invert>
                Reach out
      </Button>
      </SectionIntro>

    </div>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        Whether it&apos;s adapting old games to new platforms or ensuring the top-notch performance of your latest release, your opportunities for growth (and our opportunities for billable hours) are virtually endless. 
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Functional">
              Our experts specialize in testing every aspect of your game&apos;s basic functionality, from controls to interfaces. No bug can hide from us!
            </ListItem>
            <ListItem title="Compatibility">
              Our team ensures that your game will run smoothly on a wide range of hardware and software configurations. Maximize your audience with optimal compatibility.
            </ListItem>
            <ListItem title="Performance">
              We apply rigorous testing to ensure that your game performs at its peak, even under the most resource-intensive scenarios. Deliver seamless gaming experiences every time.
            </ListItem>
            <ListItem title="Usability">
              We provide personalized usability testing to give you valuable insights into the player experience. Turn good games into great ones with our expert feedback.
            </ListItem>
        </List>

        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    "We're a dedicated team of video game enthusiasts committed to rigorous quality assurance. Our mission? To help you deliver stellar gaming experiences that captivate players and stand the test of time.",
}

export default async function Home() {
  let caseStudies = (await loadMDXMetadata('work')).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            No BS.<br/>Just QA.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
          We&apos;re a dedicated team of video game enthusiasts committed to rigorous quality assurance. 
          Our mission? To help you deliver stellar gaming experiences that captivate players and stand the test of time.
          </p>
        </FadeIn>
      </Container>

      {/* <Clients /> */}

      <Excellence caseStudies={caseStudies} />

      {/* <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'You', logo: logoPhobiaDark }}
      >
        The team at CodeWardens were quick, effective, and affordable. They helped me complete some important tests and let me ship my game in a state I was proud of! 
      </Testimonial> */}

      <Services />

      <ContactSection />
    </>
  )
}
