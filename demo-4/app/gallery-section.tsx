import SectionTitleHeader from "./section-title-header"
import DescriptionOfSection from "./description-of-section"
import Image from "next/image"

import ExampleImg from '../public/gallery-background.webp'

export default function GallerySection() {
  const gallery = [
    {
      "id": "1",
      "description": "Description of the first photo.",
      "image": ExampleImg,
      "image_alt": "Image 1"
    },
    {
      "id": "2",
      "description": "Description of the second photo.",
      "image": ExampleImg,
      "image_alt": "Image 2"
    },
    {
      "id": "3",
      "description": "Description of the third photo.",
      "image": ExampleImg,
      "image_alt": "Image 3"
    }
  ]

  return (
    <div className="mb-12">
      <SectionTitleHeader title="Gallery" />
      <DescriptionOfSection description="Some of my photos." />
      <div>
        {gallery.map((item) => (
          <div key={item.id} className="flex flex-col-reverse sm:flex-row mb-8">
            <div className="flex basis-full sm:basis-1/3 text-gray-200 items-center">
              <p className="text-sm">
                {item.description}
              </p>
            </div>
            <div className="basis-full sm:basis-2/3">
              <Image
                src={item.image}
                alt={item.image_alt}
                quality={100}
                className="rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}