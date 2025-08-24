import { Button, ButtonProps } from '@/components/ui/button';

interface IconLinkProps extends ButtonProps {
  href: string;
  'aria-label': string;
  children: React.ReactNode;
}

const IconLink = ({ href, children, ...props }: IconLinkProps) => (
  <Button asChild variant="outline" size="icon" {...props}>
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  </Button>
);

export default IconLink;