import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './User.scss'
export default function User() {
    let history = useHistory()
    useEffect(()=>{
        let session = sessionStorage.getItem('account')
        
        if(!session ){
            history.push('/login')
        }
    }, [history])
  return (
    <div>User</div>
  )
}
