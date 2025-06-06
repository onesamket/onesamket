import { clsx } from 'clsx';

import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

type Props = {
    children: ReactNode;
    locale: string;
};

export default async function BaseLayout({ children, locale }: Props) {
    return (
        <html className="h-full" lang={locale}>
            <body className={clsx(inter.className, 'flex h-full flex-col')}>
                {children}
            </body>
        </html>
    );
}