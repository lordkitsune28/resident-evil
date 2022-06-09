import React, { useEffect, useState } from 'react'
import { ProgressBar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { quiz2 } from '../helpers/preguntas';
import { registerPunto } from '../redux/actions/actionscore';

export const Round2 = () => {
  const dispatch = useDispatch();

    const [puesto, setPuesto] = useState();
    const [aprobado, setAprobado] = useState(0);
    const [naprobado, setNaprobado] = useState(0);
    const [vida, setVida] = useState(3);
    const [round, setRound] = useState(0);
   
    let total = 0;
    let item = 0;
    let respuesta;

    const preguntas = () => {

        const posicion = Math.floor(Math.random() * (5 - 1) + 1);
        setPuesto(posicion)

    }


    const quiz = quiz2.filter((val) => val.id === puesto)

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

        if (total === 4) {
            setRound(total)
            const round = 2;
            dispatch(registerPunto(round, aprobado))


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
    } else if (round === 4) {


        return (
            <div className='text-center pt-2'>
                <div className='w-50 mt-4 mx-auto'>
                    <img className='gameover' src='https://res.cloudinary.com/donoutoby/image/upload/v1654765114/resident-evil-5-2016628152840_1_uawxyo.jpg' alt='fin del round 1' />
                    <h1>Has sobrevivido al round 2</h1>
                    <p>felicidades lograste sobrevivir al segundo round,
                        oye que bueno que hayas sobrevivido, es un logro... aunque hay mas round y mas dificiles.
                        reconosco que eres un hueso duro de roer por eso has logrado desbloquear un personaje.
                        <br/><br/>
                        P.D. procura no combertirte en comida para zombies :v
                        <br/>
                        att: "lord kitsune" </p>
                    <table className="table continuar">
                        <thead>
                            <tr>
                                <th scope="col">Continuar</th>
                                <th scope="col"><Link className='option' to="/game2">Si</Link></th>
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
