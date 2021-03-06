import SubTitulo from '../../components/titulos/SubTitulo'
import Titulo from '../../components/titulos/Titulo'

function Usuarios({users}) {
    return (
        <div>
            <Titulo>Usuarios</Titulo>
            <SubTitulo>Subtitulo de la página</SubTitulo>
            <div>
                <ul>
                    {users.map((user) => (
                        <li>{user.nombre}</li>
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
    const users = await res.json()
    console.log(users)
    // By returning { props: users }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        users,
      },
    }
}

export default Usuarios
