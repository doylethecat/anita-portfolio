import type { SocialInfo, IconComponent } from "@/types";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export const PERSONAL_INFO = {
  name: "Anita Wongchawalit",
  nickname: "Mimii",
  role: "Frontend Dev | UX/UI Design",
  bio: "UX/UI Designer & Frontend Developer with a CS degree. Specializing in user-centric design, digital accessibility, and translating complex visual concepts into seamless, high-performance web applications.",
  age: "20 years old",
  status: "Fresh Graduate (Computer Science)",
  interests: "Modern Web Tech, Interactive Design, Creative Coding",
  quote: "My mission is to transform intricate user problems into elegant, intuitive interfaces that make technology feel effortless."
};

export const SOCIALS: SocialInfo[] = [
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/anita-w-a7ba28380?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
  { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/share/1BErQeSC42/?mibextid=wwXIfr' },
  { name: 'GitHub', icon: 'github', url: 'https://github.com/Animimii' },
];

/** Maps social `icon` string keys to their React icon components */
export const SOCIAL_ICON_MAP: Record<string, IconComponent> = {
  linkedin: CiLinkedin,
  facebook: CiFacebook,
  github: FaGithub,
};