import { ReactNode } from 'react';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';

type Props = {
    children: ReactNode;
};
export default function RootLayout({ children }: Props) {
    return (
        <html>,
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}