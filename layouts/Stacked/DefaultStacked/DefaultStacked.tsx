/* 
    DefaultStacked.tsx
    created: 01/02/2024
    author: @kuraykaraaslan

    Copyright © 2024 Kuray Karaaslan. All rights reserved.
*/

import "./style.css";

import DefaultNavbar from "@/components/Navbar/DefaultNavbar";

export default function DefaultStacked({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
            <body  style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }} className="bg-base-200">
                    <DefaultNavbar/>
                    <div style={{ flex: 1 }} className="min-h-[calc(100vh-3rem)]">
                        {/* [children] */}
                        {children}
                    </div>
            </body>
        </html>
    );
}
