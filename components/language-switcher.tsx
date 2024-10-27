'use client'

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent } from 'react';
import { routing } from '@/i18n/routing';

export default function LanguageSwitcher() {
    const router = useRouter();
    const currentLocale = useLocale();

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;
        router.push(`/${newLocale}`);
    };

    return (
        <select
            onChange={handleChange}
            value={currentLocale}
            className="absolute top-4 right-4 bg-background border border-input rounded-md px-2 py-1 text-sm"
        >
            {routing.locales.map((locale) => (
                <option key={locale} value={locale}>
                    {locale === 'en' ? 'English' : locale === 'am' ? 'አማርኛ' : 'ግዕዝ'}
                </option>
            ))}
        </select>
    );
}