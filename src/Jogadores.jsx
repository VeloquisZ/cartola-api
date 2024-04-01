import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './index.css'

function jogadores() {
    const [jogadores, setJogadores] = useState([])
    let { id } = useParams()

    useEffect(() => {
        jogadoresId()
    }, [])

    const jogadoresId = async () => {
        const resultado = await axios.get(`https://api.cartola.globo.com/atletas/mercado/${id}`)
        let lista = Object.values(resultado.data.atletas)
        setJogadores(lista)
    }
    console.log(jogadores)


    const tamanhoFoto = (foto) => {
        if (typeof (foto) == 'string') {
            let mudarResolucao = foto.replace('FORMATO', '220x220');
            return mudarResolucao
        }}

    return (


        <div>
            <Link to={'/'}>
            <img src="https://logodownload.org/wp-content/uploads/2017/05/cartola-fc-logo-5.png"
                className='cartola'></img>
                </Link>
            <br></br>


            {
                jogadores.length >= 1 && (
                    <ul>
                        {jogadores.map((item, index) =>
                            <li key={index}>
                                <div className='fotos'>
                                   <img src={tamanhoFoto(item.foto)}></img>
                                </div>
                                <div className='nomes'>
                                    <p> <strong id='texto'>{item.nome} </strong></p>
                                </div>

                            </li>

                        )
                        }
                    </ul>
                )
            }

        </div>
    )

}

export default jogadores