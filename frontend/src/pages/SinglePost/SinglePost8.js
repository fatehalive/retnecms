import { Component } from "react"
import Header from "../../Component/Header/MainHeader"
import TickerNews from '../../Component/PostPage/Ticker-News/TickerNews'
import Article from '../../Component/PostPage/Article/Article'
import Footer from '../../Component/Home/Footer/Footer'

class SinglePost extends Component{
  render(){
    return(
      <div >
        <Header/>
        <TickerNews />
        <Article />
        <Footer/>
      </div>
    )
  }
}
export default SinglePost