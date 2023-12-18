export default function CategoryCard (props) {
    let classnames = "category-button"
        if (props.status === "new") {
            classnames += "NEW"
        }
    return (
        <a className = {classnames}>
            <div className="image-container">
                <img className="category-img" src={props.image} alt="cover" />
                {props.status === "new" && <span className="new">NEW</span>}
            </div>
            <p className="category-cat">{props.cat}</p>
            <p className="viewers">{props.viewers}</p>
            
        </a>
    )
}