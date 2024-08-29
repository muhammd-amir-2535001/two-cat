import "./globals.css";
import { poppins , fixture ,rethinkSans,inter } from "@/helper/fonts";
export const metadata = {
  title: "Two Cat",
  description:
    "Two Cat",
};

export default function RootLayout({ children }) {

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${fixture.variable} ${rethinkSans.variable} ${inter.variable} font-sans`}
    >
      <body>
          <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
