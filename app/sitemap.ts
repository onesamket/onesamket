import { MetadataRoute } from "next";


export default function sitemap(): MetadataRoute.Sitemap {
  return [getEntry("/"), getEntry("/am"), getEntry("/en")];
}

function getEntry(href: string) { 
  return {
    url: getUrl(href),
    alternates: {
      languages: Object.fromEntries(
        ["en", "am"].map((locale) => [locale, getUrl(href)])
      ),
    },
  };
}

function getUrl(href: string) {
  const pathname = href;
  return "https://onesamket.com" + pathname;
}
