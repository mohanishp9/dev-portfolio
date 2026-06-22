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
            className={`font-jetbrains text-xs uppercase tracking-widest transition-colors ${
                isActive ? "text-slate-50 border-b-2 border-accent pb-1" : "text-slate-400 hover:text-slate-50"
            }`}
        >
            {children}
        </Link>
    );
}
