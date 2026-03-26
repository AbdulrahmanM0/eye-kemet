import "@/styles/globals.scss";

import Authinticated from "@/components/layout/Authinticated";

export const metadata = {
  title: "EyeKemet - Home",
  description: "EyeKemet provides realistic and artistic iris extractions with high-quality results. Explore our unique eye art styles including realistic, artistic, pop-art, watercolor, and neon.",
  keywords: "EyeKemet, iris extraction, realistic eye, eye art, pop-art, watercolor, neon, AI art, eye image processing",
  authors: [{ name: "EyeKemet" }],
  openGraph: {
    title: "EyeKemet - Home",
    description: "Discover EyeKemet's realistic and artistic iris extractions. Browse unique eye styles and high-quality image results.",
    // url: "https://yourdomain.com",
    siteName: "EyeKemet",
    images: [
      {
        url: "https://yourdomain.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EyeKemet Iris Extraction Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EyeKemet - Home",
    description: "Realistic and artistic iris extractions with EyeKemet. Explore our unique eye art styles.",
    // images: ["https://yourdomain.com/preview.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <Authinticated>
          {children}
        </Authinticated>
      </body>
    </html>
  );
}