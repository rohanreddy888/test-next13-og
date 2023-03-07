import Test from "./test";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Web3 Hack Statistics, Hackerboard - QuillAudits",
  description:
    "Get statistics and deep analysis of recent crypto hacks, vulnerabilities, and attack vectors around the web3 world.",
  openGraph: {
    title: "Web3 Hack Statistics, Hackerboard - QuillAudits",
    url: "https://www.quillaudits.com/tools/hackerboard",
    description:
      "Get statistics and deep analysis of recent crypto hacks, vulnerabilities, and attack vectors around the web3 world.",

    images: [
      {
        url: "https://quillaudits.com/api/og?amount=6B&number=1000",
        secureUrl: "https://quillaudits.com/api/og?amount=6B&number=1000",
        alt: "Web3 Hack Statistics, Hackerboard - QuillAudits",
        width: 1200,
        height: 630,
        type: "image/png",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.quillaudits.com/tools/hackerboard",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web3 Hack Statistics, Hackerboard - QuillAudits",
    description:
      "Get statistics and deep analysis of recent crypto hacks, vulnerabilities, and attack vectors around the web3 world.",
    creator: "@QuillAudits",
    images: ["https://quillaudits.com/api/og?amount=6B&number=1000"],
  },
  robots: {
    index: true,
  },
};
export default function Home() {
  return (
    <>
      <Test />
    </>
  );
}
