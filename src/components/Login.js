import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { loginEmailPassword, loginFacebook, loginGoogle } from '../redux/actions/actionLogin';
import { useForm } from '../hook/useForm';


const Login = () => {

    const dispatch = useDispatch();

    const [values, handleInputChange, reset] = useForm({
        email: "",
        password: ""

    })

    const { email, password } = values;

    const handleGoogle = () => {
        dispatch(loginGoogle())
    }

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(loginEmailPassword(email, password))
        reset()
    }

    return (
        <div className="my-5 w-100">

            <div className='float-start w-50'>

                <div className='intro'>
                    <img className='rounded-circle' src='https://res.cloudinary.com/donoutoby/image/upload/v1654665558/KXLh_hylqtn.gif' alt='logo de umbrella corporation' />
                    <h1 className='title'>Hell in Raccon City</h1>
                    <h6>"our business is life itself"</h6>
                    <p>
                        Este es un cuestionario de la serie de video juegos de resident evil, para medir tu conocimiento en dicha franquicia
                    </p>
                </div>

            </div>

            <div className='bg-secondary bg-gradient'>
                <Form className="my-5 form py-2 w-50 mx-auto float-end" onSubmit={handleLogin}>
                    <div className="auth__social-networks mx-auto w-75">
                        <div className="google-btn boton" onClick={handleGoogle}>
                            <div className="google-icon-wrapper py-2 google">
                                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" /> Iniciar con Google
                            </div>
                        </div>
                    </div>

                    <div className='mx-auto w-75'>
                        <div className="mx-auto w-75">
                            <Form.Group className="mb-3 mx-auto w-75" controlId="formBasicEmail">
                                <Form.Label>Correo</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    value={email}
                                    onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group className="mb-3 mx-auto w-75" controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={password}
                                    onChange={handleInputChange} />
                            </Form.Group>
                            <Form.Group className="mb-3 mx-auto w-75">
                                <Button className="w-100 boton" type="submit">
                                    Enviar
                                </Button>
                            </Form.Group>
                            <p className="text-center">¿no tienes cuenta? <Link className="register" to="/register">Registrate</Link></p>
                        </div>
                    </div>

                </Form>
            </div>
        </div>

    );
}

export default Login;