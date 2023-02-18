import './Login.scss'

const Login = () => {
  return (
    <div className='loginn'>
      <div className="login_container">
        <input className='login_box' type="email" placeholder='Enter your email' />
        <input className='login_box' type="password" placeholder='Enter your password' />
        <div className='loginBtn' >LOGIN</div>
        

        <div className="registerinfo">
        <span>I have no account !</span>
        <span style={{color:"tomato",cursor:"pointer"}} >register</span>
        </div>
        
      </div>
        
    </div>
  )
}

export default Login
