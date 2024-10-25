import { SocialItem } from "@/types/icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";

export const socialsList: SocialItem[] = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/sambennettdev/",
    icon: faLinkedin,
  },
  //   {
  //     title: "X",
  //     href: "https://x.com/SamBennettDev",
  //     icon: faXTwitter,
  //   },
  {
    title: "GitHub",
    href: "https://github.com/SamBennettDev",
    icon: faGithub,
  },
];
