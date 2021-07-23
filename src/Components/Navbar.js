import React, { useState, useEffect } from "react";
import clsx from "clsx";
import './Navbar.css';
import { Popover } from '@headlessui/react'

function MyPopover(props) {
    const { children, className, ...rest } = props;
    const classes = clsx("navItem", className);

    return (
        <Popover className="relative">
            <Popover.Button>{children}</Popover.Button>

            <Popover.Panel className="absolute z-10">
                <div className="grid grid-cols-2">
                    <a href="/analytics">Analytics</a>
                    <a href="/engagement">Engagement</a>
                    <a href="/security">Security</a>
                    <a href="/integrations">Integrations</a>
                </div>

                <img src="/solutions.jpg" alt="" />
            </Popover.Panel>
        </Popover>
    )
}


export default function Navbar(props) {
    const { children, items, className, ...rest } = props;
    const classes = clsx("navBar", className);

    return <nav className={classes} {...rest}>{children}
        <div className="flex flex-1">
            <NavBrand />
            {items.map(item => <MyPopover key={item}>{item}</MyPopover>)}
        </div>
        <div className="flex">
            <NavNotifications />
            <NavUser userName="Alexis Toyane" />
            {/*<NavA11y />
        <NavUser />*/}
        </div>
    </nav>;
}

function NavItem(props) {
    const [isOpen, setIsOpen] = useState(false);
    const { children, className, ...rest } = props;
    const classes = clsx("navItem", className);

    useEffect(() => {
        console.log("plop")
    }, [isOpen]);

    function handleNavItemMouseClick() {
        setIsOpen(true);
    }

    function handleNavItemMouseLeave() {
        setIsOpen(false);
    }

    return (
        <>
            <button className={classes} onClick={handleNavItemMouseClick} onMouseLeave={handleNavItemMouseLeave} >{children}</button>
            {isOpen &&
                <div className="menu">
                    <button class="button button-primary">Test</button>
                    <button>Test 2</button>
                </div>}
        </>
    )
}

function NavBrand(props) {
    const { children, className, ...rest } = props;
    const classes = clsx("navBrand", className);

    return <img className={classes} src="https://info.ivalua.com/hs-fs/hubfs/logo-ivalua-white.png?width=155&name=logo-ivalua-white.png" />
}

function NavNotifications(props) {
    const { children, className, ...rest } = props;
    const classes = clsx("navBrand", className);

    return <img className={classes} src="https://info.ivalua.com/hs-fs/hubfs/logo-ivalua-white.png?width=155&name=logo-ivalua-white.png" />
}

function NavUser(props) {
    const { children, className, ...rest } = props;
    const classes = clsx("h-8 w-8 rounded-full self-center", className);

    return (
        <div className="flex">
            <img className={classes} src="https://i1.rgstatic.net/ii/profile.image/272266223157269-1441924734362_Q128/Alexis-Toyane.jpg" />
            <div className="text-sm self-center pl-2">{props.userName}</div>
        </div>
    )
}