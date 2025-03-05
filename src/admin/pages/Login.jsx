import { useEffect, useState } from 'react'
import '../assets/css/login.css'
import { useNavigate } from 'react-router-dom'
import { LoginHandler } from '../connection/service/AuthService';
import { ADMIN_URLS } from '../utils/Urls';
export const Login =()=>{
    const navigate =useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const login =async()=>{
        const data={email,password}
        await LoginHandler(data,navigate)
    }
    const secury = async () => {
        const token = sessionStorage.getItem("token")
        if (token !== undefined && token !== null && token !== "undefined") {
            navigate(ADMIN_URLS.dashboard)
        }
    }

    useEffect(() => {
        secury()
    }, [])

    return(
        <div className='login-background'>
            <div className='login-container'>
                <h1>Login</h1>
                <form>
                    <div className='input-box'>
                    <input type="text" placeholder='email' value={email} onChange={e=>setEmail(e.target.value)}/>
                    </div>
                    <div className='input-box'>
                        <input type="text" placeholder='password' value={password} onChange={e=>setPassword(e.target.value)} />
                    </div>
                    
                    <div className='remember-forgot'>
                        <label><input type="checkbox"/>Rember me</label>
                        <a href="#">Forgot Password</a>
                    </div>
                </form>
                <button className='btn' onClick={()=>login()}>Login</button>
                <div className='register-link'>
                        <p>Dont have account? <a href="">Register</a></p>
                    </div>
            </div>
            </div>

    )
}