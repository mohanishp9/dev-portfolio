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
            className={`font-telegraph text-[0.7rem] uppercase tracking-[0.2em] transition-colors py-1 ${
                isActive
                    ? "text-[var(--news-ink)] font-bold border-b-2 border-[var(--news-ink)]"
                    : "text-[var(--news-muted)] hover:text-[var(--news-ink)] hover:border-b hover:border-[var(--news-muted)]"
            }`}
        >
            {children}
        </Link>
    );
}
