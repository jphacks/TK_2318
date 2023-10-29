import { Noto_Sans_JP } from "next/font/google";


  
 export const notoJp = Noto_Sans_JP({
    weight: ["400", "500","600","700","800","900"],
    subsets: ["latin"],
    variable: "--font-notojp",
    display: "swap",
  });