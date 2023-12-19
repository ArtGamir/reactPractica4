export default function StreamerCard(props) {
    let classnames = "streamer"
        if (props.status === "${}") {
            classnames += "NEW"
        }
    return(
        <article>
            <a className = {classnames} href="#">
                <img className="avatar"src={props.avatar}/>
                <div className="name-wraper">
                    <h2 className="name">{props.name}</h2>
                    <p className="cat">{props.cat}</p>
                </div>
                
                <div className="status-container">
                {props.status === "offline" ? <p>offline</p> : <div><div className="red-dot"></div><div className="viewers-aside">{props.status}</div></div>}
                </div>
            </a>
        </article>
    )
}