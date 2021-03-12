import SubTitulo from '../../components/titulos/SubTitulo'
import Titulo from '../../components/titulos/Titulo'

function Usuarios({children}) {
    return (
        <div>
            <Titulo>Usuarios</Titulo>
            <SubTitulo>Subtitulo de la página</SubTitulo>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Usuarios
