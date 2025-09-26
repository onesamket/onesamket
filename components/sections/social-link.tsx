export function SocialLink({
    href,
    icon,
    label,
}: {
    href: string;
    icon: React.ReactNode;
    label: string;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gray-100 p-3 transition-colors hover:bg-gray-200 dark:bg-black dark:hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label={label}
        >
            {icon}
        </a>
    );
}
