import SectionTitleHeader from "./section-title-header"
import DescriptionOfSection from "./description-of-section"
import Image from "next/image"

import FacebookIcon from '../public/facebook-messenger-96.png'
import DiscordIcon from '../public/discord-new-96.png'
import InstagramIcon from '../public/instagram-96.png'
import YouTubeIcon from '../public/youtube-96.png'
import SlackIcon from '../public/slack-96.png'
import LinkedInIcon from '../public/linkedin-2-96.png'

export default function SocialMediaSection() {
  const socialMedia = [
    {
      "url": "facebook-url-here",
      "icon": FacebookIcon,
      "icon_alt": "Facebook icon",
      "description": "Facebook"
    },
    {
      "url": "discord-url-here",
      "icon": DiscordIcon,
      "icon_alt": "Discord icon",
      "description": "Discord"
    },
    {
      "url": "instagram-url-here",
      "icon": InstagramIcon,
      "icon_alt": "Instagram icon",
      "description": "Instagram"
    },
    {
      "url": "youtube-url-here",
      "icon": YouTubeIcon,
      "icon_alt": "YouTube icon",
      "description": "YouTube"
    },
    {
      "url": "slack-url-here",
      "icon": SlackIcon,
      "icon_alt": "Slack icon",
      "description": "Slack"
    },
    {
      "url": "linkedin-url-here",
      "icon": LinkedInIcon,
      "icon_alt": "LinkedIn icon",
      "description": "LinkedIn"
    }
  ]

  return (
    <div className="mb-12">
      <SectionTitleHeader title="Social Media" />
      <DescriptionOfSection description="Check out my social media." />
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
        {socialMedia.map((item) => (
          <a href={item.url} target="_blank">
            <div className="rounded-xl text-center bg-slate-900 group">
              <div className="p-4">
                <div className="flex justify-center mb-2 sm:mb-3 md:mb-4">
                  <Image
                    src={item.icon}
                    alt={item.icon_alt}
                    quality={100}
                    className="
                      w-14
                      sm:w-20
                      md:w-24
                      group-hover:scale-105
                      group-hover:-rotate-12
                      ease-in duration-100
                    "
                  />
                </div>
                <span className="text-sm text-slate-600 font-bold group-hover:tracking-wider easy-in duration-100">{item.description}</span>
              </div>
            </div>
          </a> 
        ))}
      </div>
    </div>
  )
}