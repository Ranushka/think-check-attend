'use client'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import Logo from '@/components/Logo'
import Link from '../atoms/Link'
import Button from '../atoms/Button'
import { classNames } from '../../helpers/classNames'
import { tinaField, useTina } from 'tinacms/dist/react'
const isDarkImage = false

const navigation = [
  { name: 'ABOUT', href: '#' },
  { name: 'RESOURCES', href: '#' },
  { name: 'THINK CHECK SUBMIT', href: '#' },
]

export default function Header({ globalData }: any) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const {
    data: { global },
  }: any = useTina(globalData)

  return (
    <header
      className={classNames(
        'absolute inset-x-0 top-0 z-50 max-w-7xl m-auto',
        isDarkImage ? 'text-white' : 'text-gray-900',
      )}
    >
      <nav
        className="flex items-center justify-between p-6 pt-0 lg:px-8 flex-col lg:flex-row"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <div
            className="bg-white py-4 px-6 rounded-b-2xl"
            data-tina-field={tinaField(global, 'logo')}
          >
            <Logo src={global.logo} />
          </div>
        </div>

        <div
          className="flex gap-x-6 lg:gap-x-8 mt-6 lg:mt-0 items-center"
          data-tina-field={tinaField(global)}
        >
          {global?.topNav.map((item: any) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-semibold leading-6"
              data-tina-field={tinaField(item)}
            >
              {item.label}
            </Link>
          ))}

          <Link href={'/validate'} className="hidden lg:flex">
            <Button variant="primary" className="font-semibold" size="md">
              Validate your conference
            </Button>
          </Link>
        </div>
      </nav>
      {/* <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Logo src={global.logo} />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div
                className="space-y-2 py-6"
                data-tina-field={tinaField(global)}
              >
                {global?.topNav.map((item: any) => (
                  <a
                    key={item.label}
                    href={item.href}
                    data-tina-field={tinaField(item)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog> */}
    </header>
  )
}
