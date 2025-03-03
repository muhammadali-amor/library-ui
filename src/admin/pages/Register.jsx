import '../assets/css/register.css'
export const Register=()=>{
    return(
        <div className='login-backgrounda'>
        <div className='login-containera'>
            <h1>Register</h1>
            <form>
                <div className='input-boxa'>
                <input type="text" placeholder='name'/>
                </div>
                <div className='input-boxa'>
                <input type="text" placeholder='surname'/>
                </div>
                <div className='input-boxa'>
                <input type="text" placeholder='email'/>
                </div>
                <div className='input-boxa'>
                    <input type="text" placeholder='password'/>
                </div>
                
                <div className='remember-forgota'>
                    <label><input type="checkbox"/>Rember me</label>
                    <a href="#">Forgot Password</a>
                </div>
            </form>
            <button className='btna'>Register</button>
            <div className='register-linka'>
                    <p>Dont have account? <a href="">Login</a></p>
                </div>
        </div>
        </div>
    )
}