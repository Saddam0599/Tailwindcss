import React from 'react'

function Header() {
  return (
    <div className='flex justify-between max-w-[1200px] m-auto  items-center mt-[19px]	:'>
      <div className='flex '>
<img className='w-[20%]' src="/sms.svg" alt="sms" />
<img src="/talk.svg" alt="" />
      </div>

      <div className='flex gap-[63px] items-center'>
        <nav >
            <ul className='flex gap-[52px] '>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">System</a></li>
            </ul>
        </nav>
        <button className='text-[#6610F2] border-[#6610F2] border-2 py-[15px] px-[33px] rounded-[150px] hover:bg-[#6610F2] hover:text-[white] '>Contact us</button>
      </div>
    </div>
  )
}

export default Header
