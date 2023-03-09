import LoginForm from "../components/LoginForm";
import { FaRegHeart } from 'react-icons/fa'

function Login() {

  return (
    <>
      <div className='login-container-bg'>
        <div className='container'>
          <div className='login-box'>

            <section className='heading'>
              <FaRegHeart />
              <h1>
                Build-A-Registry
              </h1>
              <p>Login or sign up to start building</p>
            </section>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
