import React from 'react'
import { Link } from 'react-router-dom'

export const Score = () => {
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
                            <th scope="col">No Aprobado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr className='total'>
                            <th className='total' scope="row">total</th>
                            <td className='total' scope="col">0</td>
                            <td className='total' scope="col">0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h2>Personajes Desbloqueados</h2>
            </div>

        </div>
    )
}
