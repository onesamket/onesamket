import { Container } from '@/components/container';
import FooterSection from '@/components/sections/footer-section';
import { cn } from '@/libs/utils';
import { ThemeProvider } from '@/providers/theme-provider';
import Script from 'next/script';
import { ReactNode, Suspense } from 'react';
import './globals.css';
import Loading from './loading';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, 'children'>) {
  return {
    title: 'Tewodros Birhanu',
    description: "Tewodros Birhanu's personal website.",
    manifest: '/manifest.json',
    themeColor: '#3b82f6',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover',
    appleWebApp: {
      capable: true,
      statusBarStyle: 'default',
      title: 'Tewodros Birhanu',
    },
    formatDetection: {
      telephone: false,
    },
    openGraph: {
      title: 'Tewodros Birhanu',
      description: "Tewodros Birhanu's personal website.",
      images: [
        {
          url: '/profile.png',
          width: 1200,
          height: 630,
          alt: 'Tewodros Birhanu',
        },
      ],
      url: 'https://onesamket.com',
      siteName: 'Tewodros Birhanu',
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@onesamket',
      title: 'Tewodros Birhanu',
      description: "Tewodros Birhanu's personal website.",
      images: ['/profile.png'],
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  return (
    <html
      lang={locale}
      dir={'ltr'}
      className={cn('min-h-screen bg-background font-sans antialiased')}
    >
      <head>
        {/* PWA Meta Tags */}
        <meta name="application-name" content="Tewodros Birhanu" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Tewodros Birhanu" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icon.png" />

        {/* Favicons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<Loading />}>
            <Container className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
              <main className="w-full p-5 text-center md:p-12 lg:p-24">
                {children}
              </main>
              <FooterSection />
            </Container>
          </Suspense>
        </ThemeProvider>

        <Script id="schema-script" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Tewodros Birhanu",
              "url": "https://onesamket.com",
              "sameAs": [
                "https://github.com/onesamket",
                "https://x.com/onesamket",
                "https://www.linkedin.com/in/ln-onesamket",
                "https://instagram.com/onesamket_",
                "https://t.me/onesamket"
              ] 
            }
          `}
        </Script>

        {/*  PWA Install Button Script with Theme Support */}
        <Script id="pwa-install" strategy="afterInteractive">
          {`
            let deferredPrompt;
            let installButton;
            let installTooltip;

            // Function to get current theme
            function getCurrentTheme() {
              if (typeof window !== 'undefined') {
                return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
              }
              return 'dark'; // default
            }

            // Function to get theme-aware colors
            function getThemeColors() {
              const isDark = getCurrentTheme() === 'dark';
              return {
                background: isDark ? '#000000' : '#ffffff',
                backgroundHover: isDark ? '#1a1a1a' : '#f5f5f5',
                border: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                shadow: isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)',
                shadowHover: isDark ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.2)',
                text: isDark ? '#ffffff' : '#000000',
                tooltipBg: isDark ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.95)',
                tooltipText: isDark ? '#ffffff' : '#000000',
                tooltipBorder: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
              };
            }

            // Create theme-aware install button styles
            function createInstallButtonStyles() {
              const colors = getThemeColors();
              return \`
                #pwa-install-button {
                  position: fixed;
                  bottom: 24px;
                  right: 24px;
                  width: 56px;
                  height: 56px;
                  background: \${colors.background};
                  border: 2px solid \${colors.border};
                  border-radius: 50%;
                  color: \${colors.text};
                  cursor: pointer;
                  box-shadow: 0 8px 32px \${colors.shadow};
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  z-index: 1000;
                  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                  backdrop-filter: blur(10px);
                }
                
                #pwa-install-button:hover {
                  transform: translateY(-2px) scale(1.05);
                  box-shadow: 0 12px 40px \${colors.shadowHover};
                  background: \${colors.backgroundHover};
                }
                
                #pwa-install-button:active {
                  transform: translateY(0) scale(0.95);
                }
                
                #pwa-install-button:disabled {
                  opacity: 0.5;
                  cursor: not-allowed;
                  transform: none;
                }
                
                #pwa-install-button svg {
                  width: 24px;
                  height: 24px;
                  transition: transform 0.2s ease;
                }
                
                #pwa-install-button:hover svg {
                  transform: scale(1.1);
                }
                
                #pwa-install-tooltip {
                  position: fixed;
                  bottom: 90px;
                  right: 24px;
                  background: \${colors.tooltipBg};
                  color: \${colors.tooltipText};
                  padding: 12px 16px;
                  border-radius: 12px;
                  font-size: 14px;
                  font-weight: 500;
                  white-space: nowrap;
                  z-index: 999;
                  opacity: 0;
                  transform: translateY(10px);
                  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                  backdrop-filter: blur(10px);
                  border: 1px solid \${colors.tooltipBorder};
                  box-shadow: 0 8px 32px \${colors.shadow};
                }
                
                #pwa-install-tooltip.show {
                  opacity: 1;
                  transform: translateY(0);
                }
                
                #pwa-install-tooltip::after {
                  content: '';
                  position: absolute;
                  bottom: -6px;
                  right: 20px;
                  width: 0;
                  height: 0;
                  border-left: 6px solid transparent;
                  border-right: 6px solid transparent;
                  border-top: 6px solid \${colors.tooltipBg};
                }
                
                @media (max-width: 640px) {
                  #pwa-install-button {
                    bottom: 20px;
                    right: 20px;
                    width: 52px;
                    height: 52px;
                  }
                  
                  #pwa-install-button svg {
                    width: 22px;
                    height: 22px;
                  }
                  
                  #pwa-install-tooltip {
                    bottom: 82px;
                    right: 20px;
                    font-size: 13px;
                    padding: 10px 14px;
                  }
                }
              \`;
            }

            // Create Download icon SVG
            function createDownloadIcon() {
              return \`
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7,10 12,15 17,10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              \`;
            }

            // Add styles to head
            function addStyles() {
              const styleSheet = document.createElement('style');
              styleSheet.id = 'pwa-install-styles';
              styleSheet.textContent = createInstallButtonStyles();
              document.head.appendChild(styleSheet);
            }

            // Update styles when theme changes
            function updateStyles() {
              const existingStyles = document.getElementById('pwa-install-styles');
              if (existingStyles) {
                existingStyles.textContent = createInstallButtonStyles();
              }
            }

            // Listen for theme changes
            function setupThemeListener() {
              const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                  if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    updateStyles();
                  }
                });
              });
              
              observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ['class']
              });
            }

            window.addEventListener('beforeinstallprompt', (e) => {
              e.preventDefault();
              deferredPrompt = e;
              
              // Add styles
              addStyles();
              setupThemeListener();
              
              // Create floating install button
              const installBtn = document.createElement('button');
              installBtn.id = 'pwa-install-button';
              installBtn.innerHTML = createDownloadIcon();
              installBtn.title = 'Install App';
              installBtn.setAttribute('aria-label', 'Install this app on your device');
              
              // Create tooltip
              const tooltip = document.createElement('div');
              tooltip.id = 'pwa-install-tooltip';
              tooltip.textContent = 'Install App';
              
              document.body.appendChild(installBtn);
              document.body.appendChild(tooltip);
              
              // Show tooltip on hover
              let tooltipTimeout;
              installBtn.addEventListener('mouseenter', () => {
                clearTimeout(tooltipTimeout);
                tooltip.classList.add('show');
              });
              
              installBtn.addEventListener('mouseleave', () => {
                tooltipTimeout = setTimeout(() => {
                  tooltip.classList.remove('show');
                }, 100);
              });
              
              // Install button click handler
              installBtn.addEventListener('click', async () => {
                if (deferredPrompt) {
                  // Show install prompt
                  deferredPrompt.prompt();
                  const { outcome } = await deferredPrompt.userChoice;
                  
                  // Remove button and tooltip
                  installBtn.remove();
                  tooltip.remove();
                  
                  // Show success message
                  if (outcome === 'accepted') {
                    showInstallSuccess();
                  }
                  
                  deferredPrompt = null;
                }
              });
              
              // Auto-hide after 10 seconds
              setTimeout(() => {
                if (installBtn && installBtn.parentNode) {
                  installBtn.style.opacity = '0.7';
                  installBtn.title = 'Install App (Click to install)';
                }
              }, 10000);
            });

            // Show success message
            function showInstallSuccess() {
              const colors = getThemeColors();
              const successToast = document.createElement('div');
              successToast.style.cssText = \`
                position: fixed;
                bottom: 24px;
                right: 24px;
                background: \${colors.background};
                color: \${colors.text};
                padding: 16px 20px;
                border-radius: 12px;
                font-size: 14px;
                font-weight: 500;
                z-index: 1001;
                box-shadow: 0 8px 32px \${colors.shadow};
                backdrop-filter: blur(10px);
                border: 1px solid \${colors.border};
                animation: slideInUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              \`;
              successToast.innerHTML = '🎉 App installed successfully!';
              
              // Add animation keyframes
              const animationStyle = document.createElement('style');
              animationStyle.textContent = \`
                @keyframes slideInUp {
                  from {
                    opacity: 0;
                    transform: translateY(20px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
              \`;
              document.head.appendChild(animationStyle);
              
              document.body.appendChild(successToast);
              
              // Remove after 3 seconds
              setTimeout(() => {
                successToast.style.animation = 'slideInUp 0.3s cubic-bezier(0.4, 0, 0.2, 1) reverse';
                setTimeout(() => {
                  successToast.remove();
                  animationStyle.remove();
                }, 300);
              }, 3000);
            }

            window.addEventListener('appinstalled', () => {
              // Remove install button if it exists
              const installBtn = document.getElementById('pwa-install-button');
              const tooltip = document.getElementById('pwa-install-tooltip');
              const styles = document.getElementById('pwa-install-styles');
              if (installBtn) installBtn.remove();
              if (tooltip) tooltip.remove();
              if (styles) styles.remove();
            });
          `}
        </Script>
      </body>
    </html>
  );
}
