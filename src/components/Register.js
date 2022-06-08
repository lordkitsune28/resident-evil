import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registroEmailPasswordNombre } from "../redux/actions/actionRegister";
import { useForm } from '../hook/useForm';

export const Register = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        nombre: "",
        email: "",
        pass1: "",
        pass2: ""
    })

    const { nombre, email, pass1, pass2 } = formValues;

    const handleRegistro = (e) => {
        e.preventDefault();
        dispatch(registroEmailPasswordNombre(email, pass1, nombre))
    }

    return (
        <div className="my-5 w-100">
            <div className='mx-auto w-75'>
                <div className="mx-auto w-75">
                    <Form className="my-5 form py-2 my-3 w-50 mx-auto" onSubmit={handleRegistro}>
                        <Form.Group className="mb-3 mx-auto w-75" controlId="formBasicName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                name="nombre"
                                value={nombre}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 mx-auto w-75" controlId="formBasicEmail">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="email"
                                name="email"
                                value={email}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 mx-auto w-75" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="pass1"
                                value={pass1}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 mx-auto w-75" controlId="formBasicRepitPassword">
                            <Form.Label>Repita contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="pass2"
                                value={pass2}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <div className="mb-3 mx-auto w-75">
                            <Button className="w-100 boton" type="submit">
                                Registrarse
                            </Button>

                            <p className="text-center">¿Ya tienes cuenta? <Link className="ms-3  register" to="/">Login</Link></p>                        </div>
                    </Form>
                </div>
            </div>
        </div >
    )
}
