export const locales = ["en", "am", "geez"] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  am: "አማርኛ",
  geez: "ግዕዝ",
};

export const localeDirections: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  am: "ltr",
  geez: "rtl",
};
