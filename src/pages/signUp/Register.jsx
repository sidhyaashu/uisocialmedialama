import './Register.scss'


const Register = () => {
  return (
    <div className='register'>
      <div className="registerContainer">
        <div className="formm">
          <input type="text" placeholder='Enter your name' />
          <input type="email" placeholder='Enter your email' />
          <input type="number" placeholder='Enter your phone number' />
          <input type="password" name="password" placeholder='Enter your password'/>
          <input type="password" name="cpassword" placeholder='Confirm your password' />
          <input type="text" placeholder='Enter your address' />
          <input type="text" placeholder='Enter your skill'/>
          <input type="text" placeholder='Enter your skill'/>
          <input type="text" placeholder='Enter your skill'/>
          <button>REGISTER</button>
        </div>
        <div className="imagee">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy__emauK7xSalnUdxKdMlY2nGxOQ3dcDcoSODu_Bs&s" alt="" />
            <div className="goToLogin"> LOGIN</div>
        </div>
        
      </div>
    </div>
  )
}

export default Register
