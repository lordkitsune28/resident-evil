import React, { useEffect, useState } from 'react'
import { ProgressBar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { quiz4 } from '../helpers/preguntas';
import { registerPunto } from '../redux/actions/actionScore';

export const Round4 = () => {
    const dispatch = useDispatch();

    const [puesto, setPuesto] = useState();
    const [aprobado, setAprobado] = useState(0);
    const [naprobado, setNaprobado] = useState(0);
    const [vida, setVida] = useState(3);
    const [round, setRound] = useState(0);

    let total = 0;
    let item = 0;
    let respuesta;
    const nivel = 4;
    let trofeos = false;

    const preguntas = () => {

        const posicion = Math.floor(Math.random() * (5 - 1) + 1);
        setPuesto(posicion)

    }


    const quiz = quiz4.filter((val) => val.id === puesto)

    useEffect(() => {
        preguntas();
    }, [])
    const evaluar = (e) => {
        respuesta = e.target.value
        item = 1
        console.log(respuesta)
        quiz.forEach(Element => {
            const { correcta } = Element
            if (respuesta === correcta) {
                setAprobado(aprobado + item)
                enviar()
            } else {

                setNaprobado(naprobado + item)
                setVida(vida - 1)
                enviar()

            }

        })

        preguntas()
    }

    const enviar = () => {
        total = aprobado + naprobado

        if (total === 5) {
            trofeos = true;
            setRound(total)

            dispatch(registerPunto(nivel, aprobado, trofeos))
            localStorage.setItem("premio4", JSON.stringify({
                aprobado, trofeos, nivel
            }));

        }
    }
    if (vida === 0) {
        return (
            <div className='w-100'>
                <div className='w-100'>
                    <table className="table continuar">
                        <thead>
                            <tr>
                                <th scope="col">Continuar</th>
                                <th scope="col"><div className='option text-center' onClick={(e) => window.location.replace('')}>Si</div></th>
                                <th scope="col">/</th>
                                <th scope="col option"><Link className='option' to="/">No</Link></th>
                            </tr>
                        </thead>

                    </table>
                </div>
                <img className='gameover' src='https://res.cloudinary.com/donoutoby/image/upload/v1654714800/sCr7ET_kwhk3h.gif' alt='has muerto' />
            </div>
        )
    } else if (round === 5) {


        return (
            <div className='text-center pt-2'>
                <div className='w-50 mt-4 mx-auto'>
                    <img className='gameover' src='https://res.cloudinary.com/donoutoby/image/upload/v1654765114/maxresdefault_thpvyq.jpg' alt='fin del round 1' />
                    <h1>Has sobrevivido al round 4</h1>
                    <p>felicidades lograste sobrevivir al cuarto round,
                        guao.... me dejas sin palabras..  eres un ser increible. has sobrevivido al primer, segundo y tercer round,
                        y ahora sobreviviste al cuarto guao.. enserio guao..
                        te mereces un premio, (has desbloqueado un personaje)<br /><br />
                        P.D. ??cual es tu personaje femenino favorito Ada Wong, Claire Redfield o jill valentine?...
                        el mio pos obviamente es Ada Wong... por cierto te deseo suerte en el ultimo round... la vas a necesitar :v
                        <br />
                        att: "lord kitsune" </p>
                    <table className="table continuar">
                        <thead>
                            <tr>
                                <th scope="col">Continuar</th>
                                <th scope="col"><Link className='option' to="/game4">Si</Link></th>
                                <th scope="col">/</th>
                                <th scope="col option"><Link className='option' to="/">No</Link></th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        )
    }
    else {

        return (
            <div className='text-center'>
                <Link className='atras' to="/">
                    <img className="w-25" src="https://res.cloudinary.com/donoutoby/image/upload/v1654711147/white-arrow-99-700x471_kqcs7v.png" alt="atras" />
                    <p>Atras</p>
                </Link>

                <div>

                    <div className='w-75 mt-5 d-inline-block'>
                        <ProgressBar variant="success" min={1} max={3} now={vida} />
                    </div>

                    {
                        quiz.map((charap, id) => (
                            <div className="card mx-auto mt-5 bg-transparent" style={{ width: "35rem" }} key={id}>
                                <img className='card-img-top mx-auto w-75' src={charap.img} alt={charap.pregunta} />
                                <div className='card-body'>
                                    <h4 className='card-title'>{charap.pregunta}</h4>


                                    <div className='btn-group-vertical'>
                                        <button value={charap.a} className="btn btn-outline-light my-2" onClick={(e) => evaluar(e)} id={charap.a}>{charap.a}</button>
                                        <button value={charap.b} className="btn btn-outline-light my-2" onClick={(e) => evaluar(e)} id={charap.b}>{charap.b}</button>
                                        <button value={charap.c} className="btn btn-outline-light my-2" onClick={(e) => evaluar(e)} id={charap.c}>{charap.c}</button>
                                        <button value={charap.d} className="btn btn-outline-light my-2" onClick={(e) => evaluar(e)} id={charap.d}>{charap.d}</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>
        )
    }
}
