import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import "bootstrap-icons/font/bootstrap-icons.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learn With Skivy",
  description: "Learn with skivy to reach your goals.",
};
<link rel="icon" href="lwskivy/public/lwslogo.png" type="image/x-icon" sizes="100x100"></link>
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar />
      {children}</body>
    </html>
  );
}
