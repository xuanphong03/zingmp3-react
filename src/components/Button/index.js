import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href = false,
    small = false,
    primary = false,
    display_flex = false,
    login_btn = false,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        display_flex,
        login_btn,
        small,
    });
    return (
        <Comp href={href} target="_blank" className={classes}>
            {children}
        </Comp>
    );
}

export default Button;
