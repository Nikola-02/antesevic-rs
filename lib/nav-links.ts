export type NavLink = {
  href: string;
  label: string;
  hidden?: boolean;
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Pocetna" },
  { href: "/portfolio", label: "Portfolio", hidden: true },
  { href: "/video", label: "Video galerija", hidden: true },
  { href: "/reviews", label: "Recenzije", hidden: true },
  { href: "/about", label: "O meni" },
];

export const visibleNavLinks = navLinks.filter((link) => !link.hidden);
