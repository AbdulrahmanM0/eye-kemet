import "@/styles/globals.scss";

import Authinticated from "@/components/layout/Authinticated";

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