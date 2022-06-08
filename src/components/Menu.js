import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/actionLogin';

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
                <div className='row mx-auto'>
                    <div className='col boton mx-2'>
                    <img className='icono' src='https://res.cloudinary.com/donoutoby/image/upload/v1654672799/55-558252_live-stream-start-icon-white-png-clipart_cgb3l4.png' alt='start' />
                        <h3>Iniciar</h3>
                    </div>
                    <div className='col boton mx-2'>
                    <img className='icono' src='https://res.cloudinary.com/donoutoby/image/upload/v1654673509/descargar_aszpnd.png' alt='mis puntos' />
                        <h3>Mis Puntos</h3>
                    </div>
                    <div className='col boton mx-2' onClick={handleLogout}>
                        <img className='icono' src='https://res.cloudinary.com/donoutoby/image/upload/v1654672452/images_exdiaj.png' alt='cerrar sesion' />
                        <h3>Cerrar Sesion</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
