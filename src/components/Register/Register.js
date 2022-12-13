import React from 'react'
import './Register.scss'
import { useHistory } from 'react-router-dom'
export default function Register() {
    let history = useHistory();
    const handleLogin = () => {
        history.push('/login')
    }
    return (
        <div className='register-container'>
            <div className='container'>
                <div className='row d-flex  vh-50 px-3 py-3 '>
                    <div className='col-md-7 d-none d-md-block  d-flex flex-column  justify-content-md-center ps-5 '>
                        <h3 className='brand text-primary'>facebook</h3>
                        <p className='description'>Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn</p>
                    </div>
                    <div className='col-12 col-md-5 register-right px-3'>
                        <h3 className='brand text-primary text-center d-md-none'>facebook</h3>

                        <form className='d-flex flex-column gap-3 mt-2'>
                            <div className='form-group>'>
                                <label for="email">Email address :</label>
                                <input id="email" type="text" placeholder='Email ' className='d-block w-100 from-control p-2 rounded-2 border border-success' />
                            </div>
                            <div className='form-group>'>
                                <label for="phone">Phone number :</label>
                                <input id="phone" type="text" placeholder='Phone number' className='d-block w-100 from-control p-2 rounded-2 border border-success' />
                            </div>
                            <div className='form-group>'>
                                <label for="username">Username :</label>
                                <input id="username" type="text" placeholder='Username' className='d-block w-100 from-control p-2 rounded-2 border border-success' />
                            </div>
                            <div className='form-group>'>
                                <label for="password">Password :</label>
                                <input id="password" type="password" placeholder='Password' className='d-block w-100 from-control p-2 rounded-2 border border-success' />
                            </div>

                            <div className='form-group>'>
                                <label for="repassword">Re-enter password :</label>
                                <input id="repassword" type="password" placeholder='Re-enter password' className='d-block w-100 from-control p-2 rounded-2 border border-success' />
                            </div>
                            <button className='btn btn-primary'>Register</button>

                            <hr />
                            <div className='text-center'>
                                <button className='btn btn-success' onClick={() => handleLogin()}>
                                    Already've an account. Login
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}