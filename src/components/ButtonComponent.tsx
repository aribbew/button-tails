import classNames from "classnames";
import React from "react";


interface Props {
    iconRight?: React.ReactNode;
    iconLeft?: React.ReactNode;
    title?: React.ReactNode;
    onClick: () => void;
    disabled?: boolean | undefined;
    className?: string;
    textSize: string;
    bgColor: string;
    textColor: string;
    border: string;
    boxSizeTB: string;
    boxSizeRL: string;
}

const Button: React.FC<Props> = ({
    title,
    onClick,
    disabled,
    textSize,
    bgColor,
    textColor,
    border,
    iconRight,
    iconLeft,
    boxSizeTB,
    boxSizeRL
}) => {

    return (
        <button
            className={classNames(`
             disabled:opacity-20 rounded-lg border
              flex items-center justify-center gap-3`,
                {
                    "text-sm": textSize === 'sm',
                    "text-xl": textSize === 'lg',
                    "bg-white": bgColor === 'white',
                    "bg-black": bgColor === 'black',
                    "border-1.5 border-black": border === 'border-b',
                    "border border-transparent": border === 'border-n',
                    "border-2 border-white": border === 'border-w',
                    "text-black": textColor === 'black',
                    "text-white": textColor === 'white',
                    "px-0": boxSizeRL === 'none',
                    "px-1": boxSizeRL === 'sm',
                    "px-2": boxSizeRL === 'md',
                    "py-0": boxSizeTB === 'none',
                    "py-1": boxSizeTB === 'sm',
                    "py-2": boxSizeTB === 'md',
                })}
            disabled={disabled}
            onClick={onClick}
        >
            {iconRight}
            {title}
            {iconLeft}
        </button>
    );
}

export default Button;