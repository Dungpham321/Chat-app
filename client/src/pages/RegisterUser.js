import React from 'react'

const RegisterUser = () => {
  
  return (
    <div className='mt-5'>
      <div className='bg-white w-full max-w-sm mx-2 rounded overflow-hidden p-4'>
        <h3>Xin chào đến với app trò chuyện!</h3>

        <form>
          <div>
            <label>Tên: </label>
            <input type='text' id='name' name='name' placeholder='nhập tên bạn'
              className='bg-slate-300 px-2 py-1 focus:bg-primary' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterUser