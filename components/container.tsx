import React, { FC, HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> { }

export const Container: FC<ContainerProps> = ({ children, className, ...props }) => {
    return (
        <div
            className={` h-full w-full bg-white dark:bg-gray-800 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#4b5563_1px,transparent_1px)] [background-size:16px_16px] ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};
