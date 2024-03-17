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
        <div className="min-w-64 min-h-64">
        <div className="col-span-1 p-4 bg-white rounded-lg shadow-md"
            style={{height: height ? height + "rem" : "auto", width: width ? width + "rem" : "auto"}}>
            <div className="flex items-center justify-between h-8 border-b border-gray-200">
                {hideHeader ? null : (
                <span className="text-sm font-medium text-black ml-2">{title ? title : "Card Title"}</span>
                )}
                <div className="flex flew-row items-center justify-center space-x-2 mr-2">
                    <button onClick={handleMinimize} className="text-sm font-medium text-black">{isMinimized ? "+" : "-"}</button>
                    <button onClick={handleHide} className="text-sm font-medium text-black">x</button>
                </div>
            </div>
            {isMinimized ? null : (
            <div className={"items-center justify-center w-full h-full"}>
                {children}
            </div>
            )}
        </div>
        </div>
    );
}

export default BaseCard;
