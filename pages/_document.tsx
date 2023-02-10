import { Html, Head, Main, NextScript } from "next/document";

// my components
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export default function Document() {
    return (
        <Html dir="rtl" lang="fa">
            <Head />
            <body className="pt-24 flex flex-col items-center bg-back">
                <Header />
                <Main />
                <Footer />
                <NextScript />
            </body>
        </Html>
    );
}
