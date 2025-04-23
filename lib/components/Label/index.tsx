import React from 'react';
import styles from './styles.module.css';

export const Label = (props: React.HTMLAttributes<HTMLParagraphElement>) => {
    const { className, children, ...rest } = props;

    return (
        <p className={`${className} ${styles.label}`} {...rest}>{children}</p>
    );
}