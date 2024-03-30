import { Link } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import './index.css';

function Home() {

    const [times, setTimes] = useState([])

    useEffect( () =>{
        buscarTimes()
    },[])



    const buscarTimes = async () => {
        const resultado = await axios.get("https://api.cartola.globo.com/clubes")
        let lista = Object.values(resultado.data)
         console.log(lista)
        setTimes(lista)
    }


    return (

        <div>
            <img src="https://logodownload.org/wp-content/uploads/2017/05/cartola-fc-logo-5.png"
                className='cartola'></img>
            <br></br>
            {times.length == 0 ? <h1>Carregando</h1> : <></>}
            {
                times.length >= 1 && (
                    <ul>
                        {times.map((item, index) =>
                            <li key={index}>
                                <div>
                                    <Link to={`/jogadores/${item.id}`}>
                                        <img src={item.escudos['30x30']}></img>
                                    </Link>
                                </div>
                                <div>
                                    <p> <strong>{item.nome} </strong></p>
                                    <p> {item.apelido}  </p>
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

export default Home