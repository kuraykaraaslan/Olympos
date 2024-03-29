'use client';
import React from "react";

interface BaseCardProps {
    children?: React.ReactNode;
    height?: number;
    width?: number;
    minimized?: boolean;
    title?: string;
    canMinimize?: boolean;
    canHidden?: boolean;
    hideHeader?: boolean;
    className?: string;

}


const BaseCard = ({ children, height, width, minimized, title, canMinimize, canHidden, hideHeader, className }: BaseCardProps) => {

    const [isMinimized, setIsMinimized] = React.useState(minimized ? minimized : false);
    const [isHidden, setIsHidden] = React.useState(false);

    const handleHide = () => {
        setIsHidden(!isHidden);
    }

    const handleMinimize = () => {
        setIsMinimized(!isMinimized);   
    }
    if (isHidden) {
        return null;
    }
    return (
        <div className="min-w-64 min-h-64 max-h-96">
        <div className="col-span-1 bg-white rounded-lg shadow-md" >
            <div className={"items-center justify-center w-full h-full pr-2 pt-2"}>
                {children}
            </div>
        </div>
        </div>
    );
}

export default BaseCard;
