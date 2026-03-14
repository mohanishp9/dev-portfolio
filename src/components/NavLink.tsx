import Link from "next/link";

interface Props {
    href: string;
    children: React.ReactNode;
}

export default function NavLink({ href, children }: Props) {
    return (
        <Link
            href={href}
            className="
        nav-underline
        font-space-mono
        text-[0.65rem]
        uppercase
        tracking-[0.25em]
        text-silver
        no-underline
        transition-colors
        duration-300
        hover:text-white
      "
        >
            {children}
        </Link>
    );
}