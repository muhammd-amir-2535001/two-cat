import "./globals.css";
export const metadata = {
  title: "Two Cat",
  description:
    "Two Cat",
};

export default function RootLayout({ children }) {

  return (
    <html
      lang="en"
      className={`font-sans`}
    >
      <body>
          <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
