import React from 'react'
import './Login.scss'
export default function Login() {
    return (
        <div className='login-container'>
            <div className='container'>
                <div className='row d-flex justify-content-center align-items-md-center vh-100 px-3 py-3'>
                    <div className='col-md-7 d-none d-md-block  d-flex flex-column  justify-content-md-center ps-5 '>
                        <h3 className='brand text-primary'>facebook</h3>
                        <p className='description'>Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn</p>
                    </div>
                    <div className='col-12 col-md-5 login-right px-3'>
                        <h3 className='brand text-primary text-center d-md-none'>facebook</h3>

                        <form className='d-flex flex-column gap-3 mt-2'>
                            <input type="text" placeholder='Email or phone number' className='from-group p-2 rounded-2 border border-primary' />
                            <input type="password" placeholder='Password' className='from-group p-2 rounded-2 border border-info' />
                            <button className='btn btn-primary'>Login</button>
                            <span className='text-center text-primary'>Forget password ?</span>
                            <hr />
                            <div className='text-center'>
                                <button className='btn btn-success'>Create user</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
