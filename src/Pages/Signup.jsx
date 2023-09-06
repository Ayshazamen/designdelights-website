import React, { useState } from "react";
import Helmet from "../components/UI/Helmet";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth } from "../firebase.config.js";
import { toast } from "react-toastify";
import { db } from "../firebase.config.js";

import "../styles/login.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      //store user data in firestore database
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayName: username,
        email,
      });

      setLoading(false);
      toast.success('Account Created')
      // After successful signup, navigate to the login page
      navigate("/login");
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  return (
    <Helmet title="Signup">
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                <h5 className="fw-bold">Loading........</h5>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <h3 className="fw-bold mb-4">Signup</h3>
                <form className="auth_form" onSubmit={signup}>
                  <div className="form_group">
                    <input
                      type="text"
                      className="login_form-control"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  <div className="form_group">
                    <input
                      type="email"
                      className="login_form-control"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form_group">
                    <input
                      type="password"
                      className="login_form-control"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="signup_btn">
                    Create an Account
                  </button>
                  <p>
                    Already have an account? <Link to="/Login">Login</Link>
                  </p>
                </form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Signup;