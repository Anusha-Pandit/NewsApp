import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import InfiniteScroll from 'react-infinite-scroll-component';


//export class News extends Component {
const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    document.title = `NewsApp - ${props.category}`;

    //async updateNews() {
    const updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        // this.setState({
        //     articles: parsedData.articles,
        //     totalResults: parsedData.totalResults
        // });
    }
    //async componentDidMount() {
    useEffect(() => {
        updateNews();
    }, [page, props.category])
    
    // const handlePrevClick = async () => {
    //     setPage( page- 1 );
    //    updateNews();
    // }
    // const handleNextClick = async () => {
    // setPage(page+1)
    //     updateNews();
    // }
    const fetchMoreData = async () => {
        setPage(page+1);
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles || []));
        setTotalResults(parsedData.totalResults || 0);
    };

    return (
        <>
            <div className="container my-3" >
                <h2 className="text-center" style={{margin:'35px 0px',marginTop:'90px'}}>NewsApp-Top Headlines({props.category})</h2>
                <InfiniteScroll
                    dataLength={articles?.length || 0} //This is important field to render the next data
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<h4>Loading...</h4>}>
                    <div className="container">
                        <div className="row">
                            {articles.map((Element) => {
                                return <div className="col-md-4" key={Element.url}>
                                    <NewsItems title={Element.title ? Element.title : ""} description={Element.desc ? Element.desc : ""} imageUrl={Element.urlToImage}
                                        newsUrl={Element.url} author={Element.author} date={Element.publishedAt} source={Element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div> */}
            </div>
        </>
    )
}

export default News
