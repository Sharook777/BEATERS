import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

import "./globals.css";

const Inter = localFont({
  src: "/fonts/Inter.ttf",
  variable: "--font-inter",
  weight: "100 900",
});

export const metadata = {
  title: "Beaters Technologies",
  description: "Beaters Technologies official website",
};

export default function RootLayout({ children }) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <body className={`${Inter.variable} antialiased`}>
        <div
          style={{
            height: "100px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 50px",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            backdropFilter: "blur(5px)",
            zIndex: 1,
          }}
        >
          <Link href="/">
            <Image src="./assets/Logo.png" alt="Logo" width={200} height={60} />
          </Link>
          <div
            style={{
              gap: 20,
              display: "flex",
            }}
          >
            <Link
              href="/aboutus"
              style={{
                color: "#FFFFFF",
                margin: 10,
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              About us
            </Link>
            {/* <Link
              href="/newsandinsights"
              style={{
                color: "#FFFFFF",
                margin: 10,
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              News and Insights
            </Link> */}
            <Link
              // href="/newsandinsights"
              href="/"
              style={{
                background: "#2284C8",
                color: "#FFFFFF",
                margin: "0 10px",
                padding: 10,
                paddingLeft: 30,
                paddingRight: 30,
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 400,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
              }}
            >
              Connect with Us
              <Image
                src="./icons/messages.svg"
                alt="Logo"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
        <div style={{ overflow: "auto", height: "100vh" }}>
          {children}
          <div
            style={{
              background: "#00070D",
              padding: "50px 50px 50px 50px",
              color: "#fff",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "20%",
                display: "flex",
                gap: 50,
                flexDirection: "column",
              }}
            >
              <Image
                src="./assets/icon-logo.svg"
                alt="Logo"
                width={100}
                height={100}
                style={{
                  height: 100,
                }}
              />
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: 500,
                  }}
                >
                  Offices:
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 100,
                    color: "#FFFFFFB2",
                  }}
                >
                  Kerala, IN
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: 50,
                flexDirection: "column",
                flex: 1,
              }}
            >
              <div
                style={{
                  height: "100px",
                  fontSize: "40px",
                  fontWeight: 700,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                Beaters Technologies
              </div>
              <div
                style={{ display: "flex", gap: 10, flexDirection: "column" }}
              >
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                  }}
                >
                  beaterstechnologies@gmail.com
                </div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                  }}
                >
                  +91 9988776655
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: 40,
                    }}
                  >
                    <div>
                      <Image
                        src="./icons/facebook.svg"
                        alt="Logo"
                        width={20}
                        height={60}
                      />
                    </div>
                    <div>
                      <Image
                        src="./icons/linkedin.svg"
                        alt="Logo"
                        width={20}
                        height={60}
                      />
                    </div>
                    <div>
                      <Image
                        src="./icons/instagram.svg"
                        alt="Logo"
                        width={20}
                        height={60}
                      />
                    </div>
                    <div>
                      <Image
                        src="./icons/x_logo.svg"
                        alt="Logo"
                        width={20}
                        height={60}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: 8,
                      fontWeight: 200,
                      color: "#FFFFFFB2",
                      display: "flex",
                      alignItems: "end",
                    }}
                  >
                    © {currentYear} Beaters Technologies. All rights reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
