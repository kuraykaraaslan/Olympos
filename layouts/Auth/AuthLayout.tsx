/* 
    AuthLayout.tsx 
    created: 01/02/2024
    author: @kuraykaraaslan

    Copyright © 2024 Kuray Karaaslan. All rights reserved.
*/

import "./style.css";


export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html className="h-full bg-gray-100">
            <body className="h-full bg-gray-100">
                {children}
            </body>
        </html>
    );
}