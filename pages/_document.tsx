import { Html, Head, Main, NextScript } from "next/document";
import Header from "@/components/ui/header";

export default function Document() {
    return (
        <Html dir="rtl" lang="fa">
            <Head />
            <body>
                <Header />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
