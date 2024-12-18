

const carder = (props)=>{

    return(
        <div className="card">
            <p className="cardPara">{props.cardDel}</p>
            <div className="info">
                <img src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" alt="" />
                <div className="cardDir">
                    <h3>Gladis Lennon</h3>
                    <p>Head of SEO</p>
                </div>
            </div>
        </div>
    )
}
export default carder