import React from 'react'

const NewsItem =(props)=> {




        let { title, description, imageUrl, newsUrl,author,date } = props
        return (
            <div className='my-3'>
                {/* <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}> {source} </span> */}
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imageUrl?"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/05/10/1786344-fssbud-xsaekun.jpg":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem
