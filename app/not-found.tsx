import BaseLayout from '@/components/base-layout';
import NotFoundPage from '@/components/sections/not-found-section';

// This page renders when a route like `/unknown.txt` is requested.
// In this case, the layout at `app/[locale]/layout.tsx` receives
// an invalid value as the `[locale]` param and calls `notFound()`.

export default function GlobalNotFound() {
  return (
    <BaseLayout locale="en">
      <NotFoundPage />
    </BaseLayout>
  );
}