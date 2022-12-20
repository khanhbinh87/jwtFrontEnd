import React, { useState } from 'react'
import './Login.scss'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import { loginUser } from '../../services/userService'

export default function Login() {
    let history = useHistory();
    const handleCreateNewUser = () => {
        history.push('/register')
    }
    const defaultIObjInput = {
        isValidValueLogin: true,
        isValidValuePassword: true
    }
    const [objValidLogin, setObjValidLogin] = useState(defaultIObjInput);
    const handleLogin = async () => {
        setObjValidLogin(defaultIObjInput)
        if (!valueLogin) {
            setObjValidLogin({ ...defaultIObjInput, isValidValueLogin: false })

            toast.error('Please enter your email or phone number ')
            return;
        }
        if (!password) {
            setObjValidLogin({ ...defaultIObjInput, isValidValuePassword: false })

            toast.error('Please enter your password ')
            return;
        }
        let response = await loginUser({ valueLogin, password });
        if(response && response.data && +response.data.EC === 0){
            let data = {
                isAuth:true,
                token:'fake token'
            }
            sessionStorage.setItem('account',JSON.stringify(data))
            history.push('/users')
            // window.location.reload()
        }
        if (response && response.data && +response.data.EC !== 0) {
            //error
            toast.error(response.data.EM)
        }
    }
    const [valueLogin, setValueLogin] = useState('')
    const [password, setPassword] = useState('')

    const handleKey =(e) => {
        if(e.charCode === 13 && e.code === 'Enter'){
            handleLogin()
        }   
    }
    return (
        <div className='login-container'>
            <div className='container'>
                <div className='row d-flex  vh-50 px-3 py-3'>
                    <div className='col-md-7 d-none d-md-block  d-flex flex-column  justify-content-md-center ps-5 '>
                        <h3 className='brand text-primary'>facebook</h3>
                        <p className='description'>Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn</p>
                    </div>
                    <div className='col-12 col-md-5 login-right px-3'>
                        <h3 className='brand text-primary text-center d-md-none'>facebook</h3>

                        <div className='d-flex flex-column gap-3 mt-2'>
                            <input
                                type="text"
                                placeholder='Email or phone number'
                                className={objValidLogin.isValidValueLogin ? 'form-control' : 'is-invalid form-control'}
                                value={valueLogin}
                                onChange={(e) => { setValueLogin(e.target.value) }}
                            />
                            <input
                                type="password"
                                placeholder='Password'
                                className={objValidLogin.isValidValuePassword ? 'form-control' : 'is-invalid form-control'}
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                                onKeyPress={(e) => handleKey(e)}
                            />
                            <button
                                className='btn btn-primary'
                                onClick={() => handleLogin()}
                            >Login</button>
                            <span className='text-center text-primary'>
                                <Link to="/" className='forgot-password text-decoration-none'>Forgot your password ?</Link>
                            </span>
                            <hr />
                            <div className='text-center'>
                                <button className='btn btn-success' onClick={() => handleCreateNewUser()}>
                                    Create user
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
