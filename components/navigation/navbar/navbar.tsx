import { ModeToggle } from '@/components/ui/darkModeToggle'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between background-ligh900_dark200 fixed z-50 w-full h-12 gap-5 px-4 shadow-light-300 dark:shadow-none sm:px-8">
      <Link href="/" className='flex items-center gap-1'>
        <Image 
          src="/images/site-logo.svg"
          width={23}
          height={23}
          alt='Overflow Logo'
        />

        <p className='h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden'>
          <span className='text-primary-500'>Over</span>flow
        </p>
      </Link>
      <p>Global Search</p>
      <ModeToggle />
    </nav>
  )
}

export default Navbar