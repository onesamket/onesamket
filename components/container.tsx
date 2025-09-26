import React, { FC, HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export const Container: FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={`h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[#01040f] dark:bg-[radial-gradient(#1f1f21_1px,transparent_1px)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
