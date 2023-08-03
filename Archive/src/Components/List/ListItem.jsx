import s from './list.module.scss'
const ListItem = (props) =>{ 
    return (
        <div className={s.list_item}>
            <p>{props.name}</p>
            <p>{props.price}</p>
        </div>
    )
}

export default ListItem