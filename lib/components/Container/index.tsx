import React from 'react';
import styles from './styles.module.css';

export const Container = (props: React.ButtonHTMLAttributes<HTMLDivElement>) => {
    const { children, className, ...rest } = props;

    return (
        <div className={`${styles.container} ${className}`} {...rest}>
            {children}
        </div>
    );
}