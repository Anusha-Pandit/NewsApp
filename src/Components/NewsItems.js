import React from 'react'

//export class NewsItems extends Component {
   const NewsItems =(props)=>{
   // render() {
        let { title, description,imageUrl,newsUrl,author,date,source} = props;
        return (
            <div className="my-3">
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageUrl? "https://s.yimg.com/ny/api/res/1.2/RQY8cqJlD12LJmbk8vJAkQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-09/41c0f3b0-73f9-11ef-bafd-5b9c5cd648f2" :imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author? "unknown" : author}, On {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source.name}
  </span>
                </div>
            </div>
        )
    }


export default NewsItems
