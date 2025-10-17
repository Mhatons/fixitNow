
'use client';

import { usePathname } from "next/navigation";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "@/contexts/CartContext";
import { UserProvider } from "@/contexts/UserContext";
import { BranchProvider } from "@/contexts/BranchContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { ReduxProvider } from "@/providers/ReduxProvider";
import { ConvexClientProvider } from "./ConvexClientProvider";

// We'll use the built-in Convex authentication system instead of a custom implementation

// Use a local font stack instead
const fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';


function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isMessagesPage = pathname === '/messages';
  
  return (
    <div
      // style={{
      //   backgroundImage: `url('/images/andreea-avramescu-wR56AUlEsE4-unsplash.jpg')`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   backgroundRepeat: 'no-repeat',
      //   backgroundAttachment: 'fixed',
      // }}
     className={``}>
      <div className=" pb-16 pt-8 " >
        {children}
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#E1972F" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Avenue Impact - course feedback</title>
        <link rel="icon" type="image/png" href="/images/logo.png" />
      </head>
      <body 
      // className={fontFamily}
      >
          <ReduxProvider>
            <ConvexClientProvider>
              <AuthProvider>
                <UserProvider>
                  <BranchProvider>
                    <CartProvider>
                        <LayoutContent>
                          {children}
                        </LayoutContent>
                        <ToastContainer />
                    </CartProvider>
                  </BranchProvider>
                </UserProvider>
              </AuthProvider>
            </ConvexClientProvider>
          </ReduxProvider>
      </body>
    </html>
  );
}
