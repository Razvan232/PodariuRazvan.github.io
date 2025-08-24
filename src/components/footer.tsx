import IconLink from './icon-link';
import { socialLinks } from '@/lib/data';

const Footer = () => {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-muted-foreground text-sm mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} Podariu Razvan. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-2">
            {socialLinks.map((link) => (
                <IconLink key={link.href} href={link.href} aria-label={link.label} variant="ghost">
                    <link.icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </IconLink>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
