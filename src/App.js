import './App.css';
import {ButtonPrimary, ButtonSecondary} from "./Components/Button";
import Navbar from "./Components/Navbar";
import Example from "./Components/TailwindNav.js";
import { Menu } from '@headlessui/react';
import IndexPage from "./Components/TUKNav.js";
import Header from "./Components/Header.js";
import Alert from  "./Components/Alert.js";
import MyApp from "./Components/tempHeader.js";
import Form from "./Components/Form.js";

function MyDropdown() {
  return (
    <Menu>
      <Menu.Button>More</Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Documentation
            </a>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75">Invite a friend (coming soon!)</span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}



function App() {
  return (
    <div className="App">
      <Example />
      <Header />
        {/*<Navbar items={["Suppliers","Sourcing","Catalog","Shop","Procurement","Invoicing","Analytics","Admin","Config","Integration","Settings"]}/>*/}
      {/* This is the main content */}       
      <main>
      <div className="px-4 xl:px-0 py-4 bg-gray-200">
        <div className="mx-auto container">
          <Form />
        </div>
      </div> 
        <MyApp />
        <Alert/>
        <MyDropdown/>
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            <h1>This is my content</h1>
            <div class="flex flex-auto w-1/2 xl:w-full min-w-80">
              <div class="relative flex flex-col flex-auto p-3 pl-6 bg-card border-green-500 rounded border-l-4 shadow overflow-hidden">
                <div class="flex items-center">
                  <div class="flex flex-col">
                    <div class="font-bold text-sm text-gray-500 uppercase tracking-wider">Previous Statement</div>
                    <div class="text-green-600 font-medium text-sm">Paid on June 8, 2021 </div>
                  </div>
                  <div class="ml-auto">
                    <button aria-haspopup="true" mat-icon-button="" class="mat-focus-indicator mat-menu-trigger mat-icon-button mat-button-base">
                      <span class="mat-button-wrapper">
                        <mat-icon role="img" class="mat-icon notranslate mat-icon-no-color" aria-hidden="true" data-mat-icon-type="svg" data-mat-icon-name="dots-vertical" data-mat-icon-namespace="heroicons_outline">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" fit="" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                          </svg>
                        </mat-icon>
                      </span>
                      <span matripple="" class="mat-ripple mat-button-ripple mat-button-ripple-round"></span>
                      <span class="mat-button-focus-overlay"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <MyDropdown/>
          </div>
          {/* /End replace */}
      </main>
    </div>
  );
}

export default App;
