import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function jogadores() {
    const [jogadores, setJogadores] = useState(null)
    let { id } = useParams()

    useEffect(() => {
        jogadoresId()
    }, [])

    const jogadoresId = async () => {
        const resultado = await axios.get(`https://api.cartola.globo.com/atletas/mercado/${id}`)
        let lista = Object.values(resultado.data)
        setJogadores(lista)
    }
    console.log(jogadores)

    return (
        <>
        {jogadores && (
            <>
                <h1>{jogadores.apelido}</h1>
              </>
        )}
        {!jogadores && (
            <p>Carregando...</p>
        )}
    </>
    )

}

export default jogadores