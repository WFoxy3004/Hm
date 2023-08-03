import s from "./search.module.scss"
const Search = (props) => { 

    const handleChange = (newValue) => {
        props.updateSearch(newValue)
    } 
    const handleClick = () => { 
        props.startSearch()
    }
    return (
        <div className={s.container}>
            <input
                onChange={(e)=>{handleChange(e.target.value)}}
                value={props.searchText}
                className={s.container_input}
                placeholder="Write search text"
            />
            <button
                onClick={handleClick}
                className={s.container_btn}
            >Search</button>
        </div>
    )
}

export default Search