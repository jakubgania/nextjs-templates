import SectionTitleHeader from "./section-title-header"
import DescriptionOfSection from "./description-of-section"
import Image from "next/image"

import EmailIcon from '../public/icons8-gmail-96.png'
import PhoneIcon from '../public/icons8-callback-96.png'

export default function ContactSection() {
  return (
    <div className="mb-12">
      <SectionTitleHeader title="Contact" />
      <DescriptionOfSection description="If you have any questions or proposals for cooperation, write or call." />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="py-4 pl-4 rounded-xl bg-slate-900 group">
          <div className="flex items-center cursor-default">
            <div className="w-8">
              <Image
                src={EmailIcon}
                alt="E-mail icon"
                quality={100}
                className="group-hover:-rotate-12 transition ease-in-out duration-100"
              />
            </div>
            <div className="ml-4">
              <a
                href="mailto:example@example.com"
                className="text-slate-500 text-sm tracking-wide font-semibold group-hover:text-slate-400 transition ease-in-out duration-100"
              >
                example@example.com
              </a>
            </div>
          </div>
        </div>
        <div className="py-4 pl-4 rounded-xl bg-slate-900 group">
          <div className="flex items-center cursor-default">
            <div className="w-8">
              <Image
                src={PhoneIcon}
                alt="Phone icon"
                quality={100}
                className="group-hover:-rotate-12 transition ease-in-out duration-100"
              />
            </div>
            <div className="ml-4">
              <a
                href="tel:+00 123 123 123"
                className="text-slate-500 text-sm tracking-wide font-semibold group-hover:text-slate-400 transition ease-in-out duration-100"
              >
                +00 123 123 123
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}