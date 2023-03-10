import { FaUser } from 'react-icons/fa'
import RegisterForm from '../components/RegisterForm'

function Register() {

  return (
    <>
      <div className='login-container-bg'>
        <div className='container'>
          <div className='login-box'>
            <section className='heading'>
              <FaUser />
              <h1>
                Register
              </h1>
              <p>Please create an account</p>
            </section>

            <RegisterForm />

          </div>
        </div>
      </div>
    </>
  )
}

export default Register
