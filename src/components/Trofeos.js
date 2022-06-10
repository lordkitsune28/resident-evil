import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { premios } from '../helpers/trofeos';

export const Trofeos = () => {
    const { prueba } = useSelector(store => store.punto);

    const aprobado5 = JSON.parse(localStorage.getItem('premio5'));
    const evalue = aprobado5.trofeos;
    console.log(evalue)
    useEffect(() => { }, [prueba])
    const play = () => {
        let audio = document.getElementById('a1');
        audio.play();
    }


    if (aprobado5 == "") {
        return (
            <div>
                <div className='w-75 mx-auto my-5 p-2 bg-black'>
                    <h1>Aun no ha desbloqueado ningun personaje</h1>
                </div>
            </div>
        )

    } else {
        if (aprobado5.trofeos) {
            return (
                <div className='w-75 mx-auto'>
                    <div>
                        {
                            premios.map((element, index) => (


                                <div key={index} class="card bg-black mx-auto mb-3" style={{ width: '540px' }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={element.img} class="img-fluid rounded-start w-100" alt={element.nombre} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{element.nombre}</h5>
                                                <p className="card-text">{element.descripcion}</p>

                                                <audio controls>
                                                    <source src={element.audio} type="audio/mp3"/>
                                                        Tu navegador no soporta audio HTML5.
                                                </audio>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            )



                        }
                    </div>


                </div>
            )
        }

    }

}
