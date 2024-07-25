import React, { Component } from 'react'
import NewsItem from './NewsItem'
export default class Business extends Component {
    constructor(){
        super();
        
        this.state = {
          articles: [],
          loading: false
        }
      }
    
      async componentDidMount(){  
        console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=057ccd80c6cc418eb1cbfb06a0044dec";
        let data = await fetch(url);
        let parseddata = await data.json();
        console.log(parseddata);
        this.setState({articles: parseddata.articles});
      }
    
      render() {
        return (
          <div className="container my-3 ">
            <h2>Today News - Top Headlines</h2>
            <hr/>
            <div className="row">
            {this.state.articles.map((element)=>{
              return (
                <div className="col-md-4" key={element.url} >
                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} newsUrl={element.url} imageUrl={element.urlToImage?element.urlToImage:"https://www.northampton.ac.uk/wp-content/uploads/2018/11/default-svp_news.jpg"}/>
                </div>)
            })}
             </div>
          </div>
        )
      }
    }
