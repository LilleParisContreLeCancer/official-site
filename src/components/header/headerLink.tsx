import Link from 'next/link';
import clsx from 'clsx';

export type HeaderLinkProps = {
  href: string;
  label: string;
  className?: string;
}

export const HeaderLink = ({ href, label, className }: HeaderLinkProps) => {
  return (
    <li>
      <Link href={href} className={clsx('font-semibold text-lg', className)}>
        {label}
      </Link>
    </li>
  );
};