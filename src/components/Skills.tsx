"use client";
import { DecompileNode } from "./Decompiler";

const capabilities = [
    {
        section: "LEDGER A",
        title: "Front-of-House Systems (Frontend)",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Responsive Layouts"],
        body: "Constructing interfaces that effortlessly sustain volatile application state across heterogeneous viewports—engineered for resilience rather than superficial demonstration.",
    },
    {
        section: "LEDGER B",
        title: "Engine Room & Telegraphy (Backend)",
        items: ["Node.js", "Express", "RESTful APIs", "JWT Authentication", "Custom Middleware", "WebSockets"],
        body: "Architecting backend gateways that maintain throughput under pressure. Uncompromising route safety, strict error categorization, and disciplined serialization.",
    },
    {
        section: "LEDGER C",
        title: "Ledgers & Warehousing (Database & DevOps)",
        items: ["MongoDB", "Mongoose ODM", "PostgreSQL", "Git Version Control", "Docker Containers", "Vercel Cloud"],
        body: "Structuring relational and document schemas strictly aligned with genuine read/write access patterns, ensuring zero unindexed query degradation.",
    },
    {
        section: "LEDGER D",
        title: "Measuring Instruments (Tools & Methods)",
        items: ["Postman API Suite", "Jest Testing", "Zod Schema Validation", "Linux CLI", "CI/CD Workflows", "System Design"],
        body: "Disciplined instrumentation ensuring rapid delivery cycles. Runtime schema validation that intercepts corrupt payloads before database ingestion.",
    },
];

export default function Skills() {
    const decompilerData = {
        catalog_index: {
            total_proficiencies: capabilities.reduce((acc, c) => acc + c.items.length, 0),
            primary_domain: "Full-Stack Web Engineering",
            audit_status: "Verified in Production Deployment"
        }
    };

    return (
        <DecompileNode name="Technical_Spec_Sheet" data={decompilerData}>
            <section id="skills" className="border-b border-[var(--news-rule-strong)] px-4 sm:px-8 lg:px-12 py-16">
                {/* Section Folio Header */}
                <div data-reveal className="flex items-center justify-between border-b border-[var(--news-rule-strong)] pb-3 mb-10 font-telegraph text-[0.68rem] uppercase tracking-[0.22em] text-[var(--news-muted)]">
                    <span className="font-bold text-[var(--news-ink)]">
                        PAGE II &bull; COMMERCIAL GAZETTE &bull; SPECIFICATIONS
                    </span>
                    <span className="font-headline italic text-sm text-[var(--news-ink)] normal-case">
                        The Master Register of Technical Proficiencies
                    </span>
                    <span className="hidden sm:inline">OFFICIAL SCHEDULE</span>
                </div>

                <div className="grid lg:grid-cols-12 gap-10">
                    {/* Left Column (4 cols): Sticky Header & Ledger Index */}
                    <div data-reveal="left" className="lg:col-span-4 lg:sticky lg:top-28 self-start">
                        <div className="font-headline font-black text-6xl text-[var(--news-ink)] leading-none mb-2">
                            SECTION II.
                        </div>
                        <h2 className="font-headline uppercase text-2xl sm:text-3xl tracking-tight text-[var(--news-ink)] mb-4 font-bold">
                            Commercial Spec Sheet
                        </h2>
                        <p className="font-editorial text-sm leading-relaxed text-[var(--news-muted)] mb-6">
                            Categorized strictly by genuine operational utility rather than commercial buzzwords. The exact machinery mobilized when architecting modern web platforms.
                        </p>

                        {/* Summary Certificate Box */}
                        <div className="border border-[var(--news-rule-strong)] p-5 bg-[var(--news-card)]">
                            <span className="font-telegraph text-[0.6rem] uppercase tracking-[0.25em] text-[var(--news-muted)] block mb-1">
                                AUDIT SCHEDULE // 2026
                            </span>
                            <div className="font-headline font-bold text-lg text-[var(--news-ink)] uppercase mb-2">
                                24 Verified Competencies
                            </div>
                            <p className="font-editorial text-xs italic text-[var(--news-muted)] leading-relaxed">
                                Every item listed represents daily hands-on implementation across commercial repositories and active applications.
                            </p>
                        </div>
                    </div>

                    {/* Right Column (8 cols): The 4 Ledger Tables */}
                    <div data-reveal className="lg:col-span-8 lg:border-l lg:border-[var(--news-rule)] lg:pl-10">
                        <div className="space-y-8">
                            {capabilities.map((cap) => (
                                <div
                                    key={cap.section}
                                    className="border border-[var(--news-rule-strong)] bg-[var(--news-card)] p-6"
                                >
                                    {/* Table Header Row */}
                                    <div className="flex flex-wrap items-baseline justify-between border-b-2 border-[var(--news-rule-strong)] pb-3 mb-4 gap-2">
                                        <div>
                                            <span className="font-telegraph text-[0.62rem] font-bold text-[var(--news-accent)] uppercase tracking-[0.2em] block">
                                                {cap.section}
                                            </span>
                                            <h3 className="font-headline font-bold text-xl text-[var(--news-ink)] uppercase tracking-wide">
                                                {cap.title}
                                            </h3>
                                        </div>
                                        <span className="font-telegraph text-[0.65rem] font-bold bg-[var(--news-ink)] text-[var(--news-bg)] px-2.5 py-0.5 uppercase tracking-widest">
                                            {String(cap.items.length).padStart(2, "0")} Instruments
                                        </span>
                                    </div>

                                    {/* Capabilities Pill Grid */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {cap.items.map((item) => (
                                            <span
                                                key={item}
                                                className="border border-[var(--news-rule)] bg-[var(--news-bg)] px-3 py-1 font-telegraph text-xs text-[var(--news-ink)] uppercase tracking-wider font-semibold shadow-xs"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Commentary Prose */}
                                    <p className="font-editorial text-xs italic text-[var(--news-muted)] leading-relaxed border-t border-[var(--news-rule)] pt-3">
                                        {cap.body}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </DecompileNode>
    );
}
