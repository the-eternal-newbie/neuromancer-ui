import { createElement } from 'react';
import styles from './styles.module.css';
import classes, { NeuroRoles } from '../../utils/classes';

type ContainerBackgroundVariants = 'solid' | 'glass' | 'blurred';
type ContainerTypes = 'generic' | 'section' | 'article';
type ContainerVariants = 'neon' | 'target' | 'bracket' | 'rplcnt' | 'ghost';
type ContainerValidTags = 'div' | 'section' | 'article' | 'header' | 'footer' | 'nav' | 'main' | 'aside';

type EitherTypeOrHtml =
    | { type: ContainerTypes; tag?: never }
    | { tag?: ContainerValidTags; type?: never };

type IContainer = EitherTypeOrHtml & {
    variant?: ContainerVariants;
    role?: NeuroRoles;
    backgroundType?: ContainerBackgroundVariants;
} & React.HTMLAttributes<HTMLElement>;

const ContainerElementMap = {
    generic: 'div',
    section: 'section',
    article: 'article',
    default: 'span'
}

const pre = 'neuro-container';

export const Container = (props: IContainer) => {
    const {
        children,
        tag,
        backgroundType = 'glass',
        className = '',
        role = 'default',
        type = 'generic',
        variant = 'ghost',
        ...rest
    } = props;

    const containerClass = classes(
        styles,
        className,
        pre,
        backgroundType,
        variant,
        role
    );

    const containerTag = tag || ContainerElementMap[type] || ContainerElementMap.default;

    return createElement(containerTag, {
        className: containerClass,
        children,
        ...rest,
    });
};
