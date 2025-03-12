
import { Github, Linkedin, Mail } from "lucide-react";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export const SocialLinks = ({ className = "", iconSize = 20 }: SocialLinksProps) => {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/varun7582",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      href: "https://github.com/arunv8055",
      icon: Github,
    },
    {
      name: "Email",
      href: "mailto:arun7582@outlook.com",
      icon: Mail,
    },
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors text-muted-foreground hover:text-primary"
          aria-label={link.name}
        >
          <link.icon size={iconSize} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
