import { useTranslations } from 'next-intl';
import { HeroSection } from './hero-section';
import SparklesText from '../anim/sparkles-text';
import WordPullUp from '../anim/word-pullup';
import Link from 'next/link';
import { Button } from '../ui/button';
export default function GreetingSection() {

    const t = useTranslations('intro')
    return (
        <section className="flex flex-col gap-5">
            <HeroSection />
            <SparklesText
                className="text-2xl md:text-4xl"
                text={t('greeting')}
            />
            <WordPullUp
                className="font-normal md:text-xl tracking-tight md:font-bold text-black dark:text-white"
                words={`${t('job')} ${t('motto')}`}
            />
            <Link target="_blank" href="https://flowcv.com/resume/vkc21asr0g">
                <Button className="h-full">{t('link')}</Button>
            </Link>
        </section>
    )

}
