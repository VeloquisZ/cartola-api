import { Link } from "react-router-dom"
import axios from "axios"
import { useState,useEffect } from "react"
import Jogadores from "./Jogadores.jsx"

function Home (){

    const [times,setTimes] = useState(null)

    // useEffect( () =>{
    //     buscarTimes()
    // },[])
    
    
    
    const buscarTimes = async () => {
        const resultado  = await axios.get("https://api.cartola.globo.com/clubes")
    setTimes(Object.values(resultado.data))
    }
console.log(times)

    return(
        
        <div>
            <img src="https://logodownload.org/wp-content/uploads/2017/05/cartola-fc-logo-5.png"
                className='cartola'></img>
            <br></br>
            {
                listarTimes.length > 0 && (
                    <ul>
                        {times.map((item, index) =>
                            <li key={index}>
                                <div>   
                                    <Link to={`/Jogadores/${item.id}/${item.nome}`}>
                                        <img src={item?.escudos['60x60']}></img>
                                    </Link>
                                </div>
                                <div className='nomeTime'>
                                    <p> <strong>{item?.nome} </strong></p>
                                    <p> {item?.apelido}  </p>
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