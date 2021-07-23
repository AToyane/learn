import React from "react";
import clsx from "clsx";
import './Button.css';

function ButtonPrimary(props) {
    const {children, className, ...rest} = props;
    const classes = clsx("button button-primary", className);
    return <button className={classes} {...rest}>{children}</button>;
}

function ButtonSecondary(props) {
    const {children, className, ...rest} = props;
    const classes = clsx("button button-secondary", className);
    return <button className={classes} {...rest}>{children}</button>;
}

function ButtonDefault(props) {
    const {children, className, ...rest} = props;
    const classes = clsx("button button-default", className);
    return <button type="button" className={classes} {...rest}>{children}</button>;
}

export {ButtonPrimary, ButtonSecondary, ButtonDefault};
