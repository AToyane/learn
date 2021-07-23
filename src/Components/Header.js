import { Fragment } from 'react'
import { ButtonDefault, ButtonPrimary } from './Button'
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  LocationMarkerIcon,
  PencilIcon,
  OfficeBuildingIcon,
  CheckCircleIcon,
  ShoppingCartIcon,
  UserIcon,
  SaveIcon
} from '@heroicons/react/solid'
import { Menu, Transition } from '@headlessui/react'
import Tabs from "./Tabs2.js";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <header className="px-8 pt-4 shadow">
      <div className="lg:flex lg:items-center lg:justify-between">
      <div className="flex-1 min-w-0">
          {/* Breadcrumbs */}
            <p className="flex items-center text-blue-500 text-xs">
                <span>Procurement</span>
                <span className="mx-2">&gt;</span>
                <span>Requisitions</span>
            </p>
        {/* Title */}
        <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6 items-center">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate flex">REQ000201 - Req. 3/11/2021</h2>
            <div className="mt-2 flex items-center text-xs text-green-600 bg-green-100 rounded-full py-1 px-4 ">
                Ordered
            </div>
        </div>
        {/* Summary information */}
        <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <OfficeBuildingIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            Clarity Headquarters
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <UserIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            Patrick Conquet
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <ShoppingCartIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            Purchase
          </div>
        </div>
        {/* End of Summary */}
      </div>
      {/* Action buttons */}
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="hidden sm:block">
            <ButtonDefault>
                Reset Allocations
            </ButtonDefault>    
        </span>

        <span className="hidden sm:block ml-3">
            <ButtonDefault>
                Create RFx
            </ButtonDefault>    
        </span>

        <span className="hidden sm:block ml-3">
          <ButtonDefault>
                <SaveIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                Save
            </ButtonDefault>    
        </span>

        <span className="sm:ml-3">
        <ButtonPrimary>
            <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Submit for Approval
        </ButtonPrimary>
        </span>
      </div>
      </div>
      <Tabs />
    </header>
  )
}
