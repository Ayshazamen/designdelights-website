import React, {useState} from "react";
import Helmet from "../components/UI/Helmet";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase.config.js";
import {toast} from "react-toastify"
import "../styles/login.css";


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const signIn = async(e)=>{
    e.preventDefault()
    setLoading(true)

    try{
      const userCredential = await signInWithEmailAndPassword (auth, email, password)
      const user = userCredential.user
      console.log(user)
      setLoading(false)
      toast.success('successfully logged in');
      navigate('/AppointmentForm')

    }catch(error){
      setLoading(false)
      toast.error(error.message)
    }
  }
  return(
     <Helmet title='Login'>
    
      <section>
        <Container>
          <Row>
            {
              loading? <Col lg='12' className="text-center"><h5 className="fw-bold">
              Loading........</h5></Col>:<Col lg='6' className="m-auto text-center">
              <h3 className="fw-bold mb-4">Login</h3>
              
              <form className="auth_form" onSubmit={signIn}>
                <div className="form_group">
                  <input type="email"
                  className="login_form-control"
                   placeholder="Enter your email"
                    value={email} onChange={e=> setEmail(e.target.value)}/>
                  </div>
                  <div className="form_group">
                <input type="password" 
                className="login_form-control"
                placeholder="Enter your password" 
                value={password} onChange={e=> setPassword(e.target.value)}/>
                </div>
                <button type= "submit" className=" auth_btn">Login</button>
                <p>Don't have an account? <Link to='/signup'>Create an account</Link></p>
              </form>
              
            </Col>
            }
          </Row>
        </Container>
      </section>
    
  </Helmet>
  )
    
};

export default Login;