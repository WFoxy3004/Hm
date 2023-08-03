import ListItem from "./ListItem"
import s from "./list.module.scss"
const List = (props) => {
    const currentList = props.searchStatus ? props.searchArr : props.products
    const Collections = currentList.map((item) => {
        return (
        <ListItem
            key={item.id}
            name={item.name}
            price={item.price}
        />)
    })
    return(
        <div className={s.list}>
            {Collections}
        </div>
    )
}

export default List