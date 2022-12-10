

const ItemDetails = ({ item }) => {
    return (
        <article>
        <div>
            <img src={item.img}/>
            <div>
            <h1>{item.nombre}</h1>
            <p> $ {item.precio}</p>
            </div>
        </div>
        </article>
    )
}

export default ItemDetails