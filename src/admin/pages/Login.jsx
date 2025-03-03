import '../assets/css/login.css'
export const Login =()=>{
    return(
        <div className='login-background'>
            <div className='login-container'>
                <h1>Login</h1>
                <form>
                    <div className='input-box'>
                    <input type="text" placeholder='email'/>
                    </div>
                    <div className='input-box'>
                        <input type="text" placeholder='password'/>
                    </div>
                    <div className='remember-forgot'>
                        <label><input type="checkbox"/>Rember me</label>
                        <a href="#">Forgot Password</a>
                    </div>
                    <button className='btn'>Login</button>
                    <div className='register-link'>
                        <p>Dont have account? <a href="">Register</a></p>
                    </div>
                </form>
            </div>
            </div>

    )
}