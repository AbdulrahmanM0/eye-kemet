import "@/styles/globals.scss";
import Provider from "@/components/layout/Provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
