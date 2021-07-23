import {
    ChevronDownIcon
  } from '@heroicons/react/solid'

const tabs = [
    { name: 'Items & Services', href: '#', current: true },
    { name: 'Allocations', href: '#', current: false },
    { name: 'Budgets', href: '#', current: false },
    { name: 'Terms', href: '#', current: false },
    { name: 'Workflow' , href: '#', current: false },
    { name: 'My new tab' , href: '#', current: false }
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Tabs() {

    return (
      <div className="pt-6 pb-2">
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          <select
            id="tabs"
            name="tabs"
            className="block w-full focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
            defaultValue={tabs.find((tab) => tab.current).name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="flex space-x-4" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:text-gray-700',
                  'px-3 py-2 font-medium text-sm rounded-md flex-row'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    )
  }