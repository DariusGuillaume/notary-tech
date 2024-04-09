import React from 'react'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white text-center p-3'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-between'>
          {/*copyright*/}
          <div className='text-white'>
            <p>&copy; Valerie Lord-Tucker 2024 All rights reserved</p>
          </div>
          {/*email icon*/}
          <div className='mt-2'>
            <a href='mailto:Vlordtucker@yahoo.com' target='_blank' rel='noopener noreferrer'>
              <MdEmail className='text-2xl' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer