import React from 'react'

function Footer() {
  return (
    <div>
      <footer className='flex flex-col space-y-10 justify-center m-10 mb-0'>
        <nav className='flex justify-center flex-wrap gap-6 text-slate-500 font-medium bg-gradient-to-r from-white to-blue-400 '>
          <a className='hover:text-cyan-500 text-green-900 ' href='#'>Home</a>
          <a className='hover:text-cyan-500 text-green-600 ' href='#'>About</a>
          <a className='hover:text-cyan-500 text-green-500 ' href='#'>Delivery</a>
          <a className='hover:text-cyan-500 text-green-500 ' href='#'>Contact</a>

        </nav>

        <div className='flex justify-center space-x-5 transition duration-500 ease-in-out transform hover:scale-105'>
          <a href='https://facebook.com' target='blank' rel='nofollow noopener'>
          <img src='./image/facebooklogo.png' alt='Facebook Logo'/>

          </a>

          <a href='https://youtube.com' target='blank' rel='nofollow noopener'>
          <img src='./image/youtubelogo.png' alt='Youtube Logo'/>

          </a>

          <a href='https://linkedin.com' target='blank' rel='nofollow noopener'>
          <img src='./image/linkedinlogo.png' alt='Linkedin Logo'/>

          </a>

        </div>

        <p className='text-center hover:text-cyan-600 text-green-900 font-medium mb-8'>2025 Basma Khan. All Rigths  Reserved</p>

<br/>
<br/>
      </footer>
    </div>
  )
}

export default Footer
