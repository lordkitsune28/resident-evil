import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { listScore } from '../redux/actions/actionScore';
import { Trofeos } from './Trofeos'

export const Score = () => {
    const dispatch = useDispatch();

    const aprobado1 = JSON.parse(localStorage.getItem('premio1'));
    const aprobado2 = JSON.parse(localStorage.getItem('premio2'));
    const aprobado3 = JSON.parse(localStorage.getItem('premio3'));
    const aprobado4 = JSON.parse(localStorage.getItem('premio4'));
    const aprobado5 = JSON.parse(localStorage.getItem('premio5'));

    let total = aprobado1.aprobado + aprobado2.aprobado + aprobado3.aprobado + aprobado4.aprobado + aprobado5.aprobado

    useEffect(() => {
        dispatch(listScore());
    }, [dispatch])

    return (
        <div className='text-center'>
            <Link className='atras' to="/">
                <img className="w-25" src="https://res.cloudinary.com/donoutoby/image/upload/v1654711147/white-arrow-99-700x471_kqcs7v.png" alt="atras" />
                <p>Atras</p>
            </Link>
            <h1>Resultados</h1>
            <div className='w-50 mx-auto my-5'>

                <table class="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Round</th>
                            <th scope="col">Aprobado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{aprobado1.aprobado}</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>{aprobado2.aprobado}</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>{aprobado3.aprobado}</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>{aprobado4.aprobado}</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>{aprobado5.aprobado}</td>
                        </tr>
                        <tr className='total'>
                            <th className='total' scope="row">total</th>
                            <td className='total' >{total}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h2>Personajes Desbloqueados</h2>

                <div className='w-75 mx-auto'>
                    <Trofeos />
                </div>
            </div>

        </div>
    )
}
