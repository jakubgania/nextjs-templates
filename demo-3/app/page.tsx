import Image from 'next/image'

import WordChanger from './word-changer'
import Gradient from './gradient'
import ContactLabel from './contact-label'
import Logo from './logo'
import IconTextRow from './icon-text-row'
import SocialMediaCard from './social-media-card'
import SocialMediaCardv2 from './social-media-card-v2'

import { iconTextRow } from '@/utils/icon-text-row'
import { socialMedia } from '@/utils/social-media'

export default function Home() {
  const year = new Date().getFullYear()

  return (
    <main>
      <div className="h-[28rem] md:h-[32rem] lg:h-[36rem] flex items-center px-8 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="max-w-screen-2xl mx-auto text-black text-left">
          <h1 className="2xl:text-7xl xl:text-5xl lg:text-4xl text-3xl font-black tracking-wide">
            Hello. <br/> Example Text.
          </h1>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto 2xl:mt-60 lg:mt-40 md:mt-32 mt-24">
        <div className="flex justify-center">
          <WordChanger />
        </div>
      </div>

      <div id="section_1" className="max-w-screen-2xl mx-auto 2xl:my-60 lg:my-40 md:my-32 my-24">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mx-8 md:mx-6 lg:mx-4">
          <div>
            <Image src="/temp-image.jpg" alt="example img" width={1000} height={1000} quality={100} priority={true} />
          </div>
          <div className="ml-0 mt-8 md:ml-10 md:mt-0">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
              Section 1
            </h2>
            <p className="text-base md:text-lg tracking-wide mt-5 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ul className="list-disc pl-12">
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
            </ul>
          </div>
        </div>
      </div>

      <Gradient gradient="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400" text="Sample Text." />

      <div id="section_2" className="max-w-screen-2xl mx-auto">
        {iconTextRow.map((item) => (
          <IconTextRow
            reverse={item.reverse}
            icon={item.icon}
            iconAlt={item.iconAlt}
            title={item.title}
            descriptionFirst={item.descriptionFirst}
            descriptionSecond={item.descriptionSecond}
          />
        ))}
      </div>

      <Gradient gradient="bg-gradient-to-r from-sky-500 via-pink-500 to-yellow-600" text="Sample Text." />

      <div id="section_3" className="max-w-screen-2xl mx-auto 2xl:my-60 lg:my-40 md:my-32 my-24">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mx-8 md:mx-6 lg:mx-4">
          <div className="mr-0 md:mr-10">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-wide">
              Sample Title
            </h3>
            <p className="text-base md:text-lg mt-5 mb-5 tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="inline md:hidden">
              <Image src="/temp-image.jpg" alt="example img" width={1000} height={1000} quality={100} />
            </div>
            <p className="text-base md:text-lg mt-5 mb-5 tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="hidden md:inline">
            <Image src="/temp-image.jpg" alt="example img" width={1000} height={1000} quality={100} />
          </div>
        </div>
      </div>

      <Gradient gradient="bg-gradient-to-r from-orange-400 via-rose-500 to-purple-600" text="Sample Text." />

      <div className="w-full">
        <div className="text-center 2xl:mt-60 lg:mt-40 md:mt-32 mt-24 mb-20">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Social Media
          </h2>
          <p className="pt-4 text-base font-semibold tracking-wide">
            For more news check social media below.
          </p>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto mb-60">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-8 md:mx-6 lg:mx-4">
          {/* <SocialMediaCard
            url=""
            iconPath="/icons8-facebook-144.png"
            iconAlt="Facebook icon"
            title="Facebook"
          />
          
          <SocialMediaCard
            url=""
            iconPath="/icons8-instagram-144.png"
            iconAlt="Instagram icon"
            title="Instagram"
          />
          
          <SocialMediaCard
            url=""
            iconPath="/icons8-youtube-144.png"
            iconAlt="YouTube icon"
            title="YouTube"
          />

          <SocialMediaCard
            url=""
            iconPath="/icons8-twitter-144.png"
            iconAlt="Twitter icon"
            title="Twitter"
          /> */}

          {socialMedia.map((item) => (
            <SocialMediaCardv2
              url={item.url}
              iconPath={item.iconPath}
              iconAlt={item.iconAlt}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>

      <Gradient gradient=" bg-gradient-to-r from-orange-400 to-rose-500" text="Sample Text." />

      <div className="w-full">
        <div className="text-center 2xl:mt-60 lg:mt-40 md:mt-32 mt-24 mb-20">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide">
            Contact
          </h2>
          <p className="pt-4 text-base font-semibold tracking-wide">
            Write an E-mail or just call.
          </p>
        </div>
      </div>

      <div id="section_4" className="max-w-screen-2xl mx-auto 2xl:mb-60 lg:mb-40 md:mb-32 mb-24">
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mx-8 md:mx-6 lg:mx-4">
          <ContactLabel
            iconPath="/icons8-phone-96.png"
            iconAlt="phone icon"
            title="Telephone"
            hrefValue="123123123"
            hrefLabel="+00 123 123 123"
          />
          <ContactLabel
            iconPath="/icons8-laptop-e-mail-96.png"
            iconAlt="email icon"
            title="E-mail"
            hrefValue="mailto:example@example.com"
            hrefLabel="example@example.com"
          />
        </div>
      </div>

      <footer className="bg-slate-100">
        <div className="max-w-screen-2xl mx-auto">
          <div className="py-16 md:py-20 mx-8 md:mx-6 lg:mx-4">
            <div className="pb-2 md:pb-4">
              <Logo />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 mx-8 md:mx-6 lg:mx-4">
            <div className="mb-6 md:mb-0">
              <h4 className="text-sm font-semibold mb-2 md:mb-4 uppercase">
                general
              </h4>
              <div className="text-sm text-gray-600 cursor-default">
                <div className="mb-1">
                  Home
                </div>
                <div className="mb-1">
                  About
                </div>
                <div className="mb-1">
                  Contact
                </div>
                <div className="mb-1">
                  Privacy
                </div>
              </div>
            </div>
            <div className="mb-6 md:mb-0">
              <h4 className="text-sm font-semibold mb-2 md:mb-4 uppercase">
                contact
              </h4>
              <div className="text-sm text-gray-600 cursor-default">
                <div className="mb-1">
                  Telephone
                </div>
                <div className="mb-1">
                  E-mail
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2 md:mb-4 uppercase">
                other
              </h4>
              <div className="text-sm text-gray-600 cursor-default">
                <div className="mb-1">
                  Carrer
                </div>
                <div className="mb-1">
                  Newsroom
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-xs pt-20 pb-10">
          <div className="mb-2">
            <p>&copy; {year}</p>
          </div>
          <div className="tracking-wide">
            <p>designed by Jakub Gania</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
