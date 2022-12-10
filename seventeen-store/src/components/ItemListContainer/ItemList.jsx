import Item from "./Item"

const ItemList = ({Data}) => {
return (
    Data.map(p => 
        <Item
        key={p.id}
            {...p}
        />
        )
)
}

export default ItemList

