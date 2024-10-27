'use client'

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Check } from 'lucide-react';
import { routing } from '@/i18n/routing';
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languageNames: Record<string, string> = {
    en: 'English',
    am: 'አማርኛ',
    geez: 'ግዕዝ'
};

export default function LanguageSwitcher() {
    const router = useRouter();
    const currentLocale = useLocale();

    const handleLanguageChange = (newLocale: string) => {
        router.push(`/${newLocale}`);
    };

    return (
        <div className="fixed top-4 right-4 z-50">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="w-10 h-10 rounded-full bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg border-none 
                                   bg-white dark:bg-gray-800"
                    >
                        <motion.div
                            whileHover={{ rotate: 180 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Globe className="h-5 w-5 text-black dark:text-white" />
                        </motion.div>
                        <span className="sr-only">Toggle language menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    align="end"
                    className="w-40 bg-white dark:bg-gray-800 bg-opacity-20 dark:bg-opacity-30 
                               backdrop-filter backdrop-blur-lg shadow-lg border-none"
                >
                    <AnimatePresence>
                        {routing.locales.map((locale) => (
                            <DropdownMenuItem
                                key={locale}
                                onSelect={() => handleLanguageChange(locale)}
                                className="focus:bg-opacity-30 focus:bg-white dark:focus:bg-gray-700 hover:opacity-90 cursor-pointer"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex items-center justify-between w-full text-black dark:text-white"
                                >
                                    <span>{languageNames[locale]}</span>
                                    {locale === currentLocale && (
                                        <Check className="h-4 w-4 text-black dark:text-white" />
                                    )}
                                </motion.div>
                            </DropdownMenuItem>
                        ))}
                    </AnimatePresence>
                </DropdownMenuContent>
            </DropdownMenu>
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full right-0 mt-2 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full px-3 py-1 
                           text-black dark:text-white text-sm bg-white dark:bg-gray-800"
            >
                {currentLocale.toUpperCase()}
            </motion.div>
        </div>
    );
}
