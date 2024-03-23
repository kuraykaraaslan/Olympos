/* 
    SettingsLayout.tsx
    created: 01/02/2024
    author: @kuraykaraaslan

    Copyright © 2024 Kuray Karaaslan. All rights reserved.
*/
import SettingsMenu from "@/components/Menu/SettingsMenu";

export default function SettingsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className="grid grid-cols-3 md:grid-cols-12 gap-4 mt-5">
            <div className="col-span-3">
                <SettingsMenu />
            </div>
            <div className="col-span-3 md:col-span-9 bg-white p-8 rounded-lg shadow-md text-black">
                {children}
            </div>
        </div>
    );
}

