import Link from "next/link";

interface Props {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
}

export default function NavLink({ href, children, isActive = false }: Props) {
    return (
        <Link
            href={href}
            className={`nav-link ${isActive ? "is-active" : ""}`}
        >
            {children}
        </Link>
    );
}
