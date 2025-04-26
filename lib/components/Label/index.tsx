import { createElement } from 'react';
import styles from './styles.module.css';
import classes, { NeuroRoles } from '../../utils/classes';

type LabelTypes = 'title' | 'subtitle' | 'text';
type LabelVariants = 'bits' | 'console' | 'neon' | 'terminal';
type LabelValidTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

type EitherTypeOrHtml =
    | { type: LabelTypes; tag?: never }
    | { tag?: LabelValidTags; type?: never };

type ILabel = EitherTypeOrHtml & {
    variant?: LabelVariants;
    role?: NeuroRoles;
} & React.HTMLAttributes<HTMLElement>;


const LabelElementMap = {
    title: 'h1',
    subtitle: 'h2',
    text: 'p',
    default: 'span'
}

const pre = 'neuro-label';

export const Label = (props: ILabel) => {
    const {
        children,
        tag,
        className = '',
        role = 'default',
        type = 'text',
        variant = 'terminal',
        ...rest
    } = props;

    const labelClass = classes(styles, className, pre, role, variant);
    const labelTag = tag || LabelElementMap[type] || LabelElementMap.default;

    return createElement(labelTag, {
        className: labelClass,
        children,
        ...rest,
    });
}