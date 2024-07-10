// Typography.tsx
import React from 'react';

// Define the props type



// Define the Typography component
const Typography: React.FC<TypographyProps> = ({
    text = 'Welcome to Machine',
    tag: Tag = 'h1', // Default to 'div' if no tag is provided
    className,
    style,
    ariaLabel,
    ariaLabelledBy,
    children,
}) => {
    return (
        <Tag
            className={className}
            style={style}
            aria-label={ariaLabel} // Use correct JSX attribute naming
            aria-labelledby={ariaLabelledBy}
        >
            {text}, {children} {/* Render text and children */}
        </Tag>
    );
};

export default Typography;
