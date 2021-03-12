
function Titulo({children}) {

    return (
        <>
        <h1>{children}</h1>

        <style jsx>

            {`
                h1{
                    color: darkslategrey;
                }
            `}

        </style>
        </>
    )
}

export default Titulo
