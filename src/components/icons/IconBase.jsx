export function IconBase({ children, size = 24, className }) {
    return (
        <svg
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            width={size}
            height={size}
            fill="currentColor"
            className={className}
        >
            {children}
        </svg>
    );
}