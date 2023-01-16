import React from 'react'
import Item from './Item'

export const ItemList = ({item}) => {
  return (
    item.map(p => 
        <Item
            key={p.id}
            {...p}
        />
        )
  )
}

export default ItemList