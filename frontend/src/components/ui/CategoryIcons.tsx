interface CategoryIconProps {
    size?: number;
    className?: string;
    stroke?: string;
    strokeWidth?: number;
}

export function MealIcon({
    size,
    className,
    stroke = "currentColor",
    strokeWidth = 2.5,
}: CategoryIconProps) {
    return (
        <svg
            width={size}
            height={size}
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2" />
            <path d="M7 2v20" />
            <path d="M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
        </svg>
    );
}

export function CocktailIcon({
    size,
    className,
    stroke = "currentColor",
    strokeWidth = 2.5,
}: CategoryIconProps) {
    return (
        <svg
            width={size}
            height={size}
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M8 22h8M12 11v11M3 3l9 8 9-8M5 3h14" />
        </svg>
    );
}
