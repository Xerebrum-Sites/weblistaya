import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import ogImage from "../assets/og-share.jpg?url";
import favicon from "../assets/logo.png?url";

const SITE_URL = "https://weblistaya.com.ar";
const SITE_NAME = "Web Lista YA";
const SITE_TITLE = "Web Lista YA — Diseño web profesional en 7 días | Argentina";
const SITE_DESCRIPTION =
  "Diseñamos tu web profesional en 7 días. Rápido, simple y económico. Para emprendedores y pymes en Argentina. Pago en cuotas, sin sorpresas.";
const SITE_KEYWORDS =
  "diseño web, páginas web Argentina, web para pymes, web para emprendedores, diseño web económico, web rápido, sitio web profesional, landing page, desarrollo web Rosario";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "keywords", content: SITE_KEYWORDS },
      { name: "author", content: SITE_NAME },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow" },
      { name: "language", content: "Spanish" },
      { name: "geo.region", content: "AR" },
      { name: "geo.country", content: "Argentina" },
      { name: "theme-color", content: "#6EEB00" },
      // Open Graph
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:locale", content: "es_AR" },
      { property: "og:image", content: `${SITE_URL}${ogImage}` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Web Lista YA — Tu web profesional en 7 días" },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: `${SITE_URL}${ogImage}` },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap",
      },
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", href: favicon, type: "image/png" },
      { rel: "apple-touch-icon", href: favicon },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
    scripts: [
      {
        children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-P9TZWTVG');`,
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${SITE_URL}#business`,
          name: SITE_NAME,
          description: SITE_DESCRIPTION,
          url: SITE_URL,
          image: `${SITE_URL}${ogImage}`,
          logo: `${SITE_URL}${favicon}`,
          email: "quiero@weblistaya.com.ar",
          telephone: "+5493412604109",
          priceRange: "$$",
          areaServed: { "@type": "Country", name: "Argentina" },
          address: { "@type": "PostalAddress", addressCountry: "AR" },
          sameAs: ["https://wa.me/5493412604109"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
          inLanguage: "es-AR",
          publisher: { "@id": `${SITE_URL}#business` },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Diseño y desarrollo web",
          provider: { "@id": `${SITE_URL}#business` },
          areaServed: { "@type": "Country", name: "Argentina" },
          description:
            "Diseño de sitios web profesionales para emprendedores y pymes. Entrega en 7 días, pago en cuotas.",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR">
      <head>
        <HeadContent />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P9TZWTVG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
