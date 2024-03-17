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
            <body style={{minHeight: "100vh" }} className="bg-gray-100">
                    <DefaultNavbar/>
                    <div className="px-4 sm:px-6 lg:px-8 pt-3 pb-6 sticky top-0 z-50 bg-gray-100" >
                        {children}  
                    </div>
            </body>
        </html>
    );
}
