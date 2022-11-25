import Saludo from "./Saludo/Saludo";

const ItemListContainer = () => {
    const saludo = { greeting: "Bienvenidos a Seventeen Store" }

    return (
        <div style={{textAlign: 'center'}}>
            <Saludo greeting={saludo.greeting} />
        </div>
    )

}

export default ItemListContainer;