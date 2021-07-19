import { Component } from "react"

// MAIN COMPONENT
import TickerNews from '../../Component/PostPage/Ticker-News/TickerNews'
import Article from '../../Component/PostPage/Article/Article'


class SinglePost extends Component{
  render(){
    return(
      <div>

        <TickerNews />
        <Article />

      </div>
    )
  }
}
export default SinglePost