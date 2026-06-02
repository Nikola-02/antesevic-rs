export type NavLinkKey = "home" | "about" | "portfolio" | "video" | "reviews";

export type NavLink = {
  href: string;
  key: NavLinkKey;
  hidden?: boolean;
};

export const navLinks: NavLink[] = [
  { href: "/", key: "home" },
  { href: "/portfolio", key: "portfolio", hidden: true },
  { href: "/video", key: "video", hidden: true },
  { href: "/reviews", key: "reviews", hidden: true },
  { href: "/about", key: "about" },
];

export const visibleNavLinks = navLinks.filter((link) => !link.hidden);
