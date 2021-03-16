import SubTitulo from '../../components/titulos/SubTitulo'
import Titulo from '../../components/titulos/Titulo'

function Ciudadanos({ciudadanos}) {
    return (
        <div>
            <Titulo>Ciudadanos</Titulo>
            <SubTitulo>Subtitulo de la página</SubTitulo>
            <div>
                <ul>
                    {ciudadanos.map(({nombre, apellidos, dni}) => (
                        <li> --&gt; {nombre} {apellidos} - ({dni})</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('http://api:3030/api/ciudadanos')
    const ciudadanos = await res.json()
    console.log(ciudadanos)
    // By returning { props: ciudadanos }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        ciudadanos,
      },
    }
}

export default Ciudadanos;
