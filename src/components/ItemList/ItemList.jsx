import { Item } from "../Item/Item";

export const ItemList = ({productos}) => {
    return(
        <div className="ListGrupo">
            {productos.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList;