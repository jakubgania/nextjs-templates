
type IconProps = {
  src: string,
  height: number,
  width: number,
  blurDataUrl?: string,
  blurWidth?: number,
  blurHeight?: number
}

export type IconTextRowProps = {
  reverse: boolean,
  icon: IconProps,
  iconAlt: string,
  title: string,
  descriptionFirst: string,
  descriptionSecond: string
}

export type SocialMediaCardProps = {
  url: string,
  iconPath: string,
  iconAlt: string,
  title: string
}

export type SocialMediaCardv2Props = {
  url: string,
  iconPath: string,
  iconAlt: string,
  title: string,
  description: string
}

export type ContactLabelProps = {
  iconPath: string,
  iconAlt: string,
  title: string,
  hrefValue: string,
  hrefLabel: string
}

export type GradientProps = {
  gradient: string,
  text: string
}

export type MobileMenuProps = {
  menuState: boolean,
  toggleMenu: (id?: string) => void
}