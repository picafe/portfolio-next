"use client";

import { Mail, Github, Linkedin, Code2 } from "lucide-react";

interface ContactLink {
    label: string;
    href: string;
    icon: React.ReactNode;
    detail?: string;
    ariaLabel: string;
}

const contacts: ContactLink[] = [
    {
        label: "Email",
        href: "mailto:hello@picafe.me",
        icon: <Mail className="w-6 h-6" />,
        ariaLabel: "Send email to hello@picafe.me",
    },
    {
        label: "GitHub",
        href: "https://github.com/picafe",
        icon: <Github className="w-6 h-6" />,
        ariaLabel: "Visit GitHub profile",
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/surya-tallapaneni-b23672282/",
        icon: <Linkedin className="w-6 h-6" />,
        ariaLabel: "Visit LinkedIn profile",
    },
    {
        label: "Devpost",
        href: "https://devpost.com/picafe",
        icon: <Code2 className="w-6 h-6" />,
        ariaLabel: "Visit Devpost profile",
    },
];

function ContactIconLink({ contact }: { contact: ContactLink }) {
    const isExternal = contact.href.startsWith("http") || contact.href.startsWith("mailto:");

    return (
        <a
            href={contact.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal && contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group flex flex-col items-center gap-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg p-1"
            aria-label={contact.ariaLabel}
        >
            <div className="p-2 rounded-full bg-white/5 border border-white/10 text-white transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 group-focus-visible:bg-white/10 group-focus-visible:border-white/20">
                {contact.icon}
            </div>
            <div className="flex flex-col items-center">
                <span className="text-sm font-medium text-zinc-300 group-hover:text-zinc-100 group-focus-visible:text-zinc-100 transition-colors duration-300 hidden sm:block">
                    {contact.label}
                </span>
            </div>
        </a>
    );
}

export default function Footer() {
    return (
        <footer className="w-full flex flex-col items-center md:flex-row md:items-center md:justify-between px-6 py-2 border-t border-white/10">
            <nav
                className="max-w-4xl"
                aria-label="Contact links"
            >
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {contacts.map((contact) => (
                        <ContactIconLink key={contact.label} contact={contact} />
                    ))}
                </div>

            </nav>
            <div className="text-center text-sm text-zinc-400">
                <p className="flex flex-wrap items-center justify-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
                        Timezone: <span className="font-semibold text-zinc-300">EST</span>
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
                        Response: <span className="font-semibold text-zinc-300">under a day</span>
                    </span>
                </p>
            </div>


        </footer>
    );
}
