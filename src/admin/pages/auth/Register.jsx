import { useState } from 'react'
import '../assets/css/register.css'
import { RegisterHandler } from '../../connection/service/AuthService'
import { useNavigate } from 'react-router-dom'
export const Register=()=>{
    const navigate =useNavigate()
    const [name,setName]=useState('')
    const [surname,setSurname]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')


    const register = async () => {
        try {
            const data = {name, surname, email, password}
            await RegisterHandler(data, navigate)
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <div className='login-backgrounda'>
        <div className='login-containera'>
            <h1>Register</h1>
            <form>
                <div className='input-boxa'>
                <input type="text" placeholder='name' value={name} onChange={e=>setName(e.target.value)}/>
                </div>
                <div className='input-boxa'>
                <input type="text" placeholder='surname'  value={surname} onChange={e=>setSurname(e.target.value)}/>
                </div>
                <div className='input-boxa'>
                <input type="text" placeholder='email'  value={email} onChange={e=>setEmail(e.target.value)}/>
                </div>
                <div className='input-boxa'>
                    <input type="text" placeholder='password'  value={password} onChange={e=>setPassword(e.target.value)}/>
                </div>
                
                <div className='remember-forgota'>
                    <label><input type="checkbox"/>Rember me</label>
                    <a href="#">Forgot Password</a>
                </div>
            </form>
            <button className='btna' onClick={()=>register()}>Register</button>
            <div className='register-linka'>
                    <p>Dont have account? <a href="">Login</a></p>
                </div>
        </div>
        </div>
    )
}