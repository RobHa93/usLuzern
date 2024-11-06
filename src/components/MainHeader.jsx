'use client'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Shop', href: '/shop' },
  { name: 'Über Uns', href: '/about-team' },
  { name: 'Kontakt', href: '/Kontakt' },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <Link to="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img
            alt=""
            src="../src/assets//logo_usLuzern.PNG"
            className="h-8"
          />
        </Link>

        {/* Desktop Search Bar */}
        <div className="relative mx-auto hidden lg:block">
          <input
            type="text"
            placeholder="Suche..."
            className="border border-gray-300 rounded-md px-3 py-1 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-xs"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex lg:gap-x-12 items-center font-serif">
          {navigation.map((item) => (
            <Link key={item.name} to={item.href} className="text-sm font-semibold text-gray-900">
              {item.name}
            </Link>
          ))}
          <Link to="/sign-in" className="text-sm font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Mobile Menu and Search Icon */}
        <div className="flex lg:hidden items-center space-x-4">
          <button
            type="button"
            onClick={() => setSearchVisible(!searchVisible)}
            className="text-gray-700"
          >
            <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Search Bar */}
      {searchVisible && (
        <div className="lg:hidden px-6 py-4">
          <input
            type="text"
            placeholder="Suche..."
            className="border border-gray-300 rounded-md px-3 py-1 text-sm font-sans w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}

      {/* Mobile Toggle Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="../src/assets//logo_usLuzern.PNG"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-serif font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  to="/sign-in"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-serif font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
