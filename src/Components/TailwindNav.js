import { Fragment } from 'react'
import { BellIcon } from '@heroicons/react/outline'
import clsx from "clsx";
import './Navbar.css';
import UserMenu from "./UserMenu.js"


const navigation = ["Suppliers","Sourcing","Catalog","Shop","Procurement","Invoicing","Analytics","Admin","Config","Integration","Settings"]
const profile = ['Your Profile', 'Settings', 'Sign out']

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
      <nav className="navBar">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <NavBrand/>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline">
                      {/* Ce qui permet d’afficher les différents items du menu */}
                      {navigation.map((item, itemIdx) =>
                        itemIdx === 0 ? (
                          <Fragment key={item}>
                            {/* Used for active item Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                            <a href="#" className="navItem bg-blue-500">
                              {item}
                            </a>
                          </Fragment>
                        ) : (
                          <a
                            key={item}
                            href="#"
                            className="navItem"
                          >
                            {item}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div>
                  <div className="ml-4 flex items-center md:ml-6">
                    <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <UserMenu/>
                  </div>
              </div>
            </div>
      </nav>
  )
}


function NavBrand(props) {
  const { children, className, ...rest } = props;
  const classes = clsx("navBrand", className);

  return <img className={classes} src="https://info.ivalua.com/hs-fs/hubfs/logo-ivalua-white.png?width=155&name=logo-ivalua-white.png" alt="Ivalua Logo"/>
}