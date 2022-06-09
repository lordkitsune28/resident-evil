import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/actions/actionLogin';
import { Game } from './Game';
import { Score } from './Score';

export const Menu = (history) => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        history.replace('/login');
    }
    return (
        <div>
            <img className='banner' src='https://res.cloudinary.com/donoutoby/image/upload/v1654671587/resident-evil_fyzgig.png' alt='welcome to raccon city' />
            <div className='container mt-5 mx-auto'>
                <h1 className='text-center mb-5'>Bienvenido a Hell in Raccon city</h1>
                <div className='row mx-auto'>
                    
                    <Link className='col boton mx-5 links' to="/Game">
                        <img className='icono' src='https://res.cloudinary.com/donoutoby/image/upload/v1654672799/55-558252_live-stream-start-icon-white-png-clipart_cgb3l4.png' alt='start' />
                        <h3>Iniciar</h3>
                    </Link>
                    <Link className='col boton mx-5 links' to="/Score">
                        <img className='icono' src='https://res.cloudinary.com/donoutoby/image/upload/v1654673509/descargar_aszpnd.png' alt='mis puntos' />
                        <h3>Mis Puntos</h3>
                    </Link>
                    <div className='col boton mx-5 links' onClick={handleLogout}>
                        <img className='icono' src='https://res.cloudinary.com/donoutoby/image/upload/v1654672452/images_exdiaj.png' alt='cerrar sesion' />
                        <h3>Cerrar Sesion</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
