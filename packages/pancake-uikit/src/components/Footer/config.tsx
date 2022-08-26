import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.nortswap.finance/contact-us",
      },
      {
        label: "Blog",
        href: "https://nortswap.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.nortswap.finance/contact-us/telegram",
      },
      {
        label: "NT",
        href: "https://docs.nortswap.finance/tokenomics/cake",
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.nortswap.finance/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.nortswap.finance/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.nortswap.finance/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/allnext",
      },
      {
        label: "Documentation",
        href: "https://docs.nortswap.finance",
      },
      {
        label: "Audits",
        href: "https://docs.nortswap.finance/help/faq#is-nortswap-safe-has-nortswap-been-audited",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/Nort83973702",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/NortTokenOfficial",
      },
      {
        label: "Português",
        href: "https://t.me/NortTokenOfficial",
      },
      {
        label: "Español",
        href: "https://t.me/NortTokenOfficial",
      },
      {
        label: "Announcements",
        href: "https://t.me/NortTokenOfficial",
      },
    ],
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://instagram.com/nort.app",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/allnext/",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
