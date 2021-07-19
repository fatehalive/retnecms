import * as React from 'react'
// import Header from '../../Component/Header/MainHeader'
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MainFeatureToday from '../../Component/Home/Main/Feature-Today-Sec/MainFeature'
import MainBlockWrapperSec from '../../Component/Home/Main/Block-Wrap-Sec1/MainBlockSec'
import MainSecVideo from '../../Component/Home/Main/Latest-Sec-Video/MainSecVideo'
import MainBlockWrap2 from '../../Component/Home/Main/Block-Wrap-Sec2/MainBlockWrap2'
// import Footer from '../../Component/Home/Footer/Footer'



class HomePage extends React.Component {
    render() {
      return<div>
          {/* HEADER */}
          {/* <Header/> */}
          {/* Feature Today */}
          <MainFeatureToday/>
          {/* BLOCK-WRAPPER-SECTION */}
          <MainBlockWrapperSec/>
          {/*  LATES VIDEOS SECTION*/}
          <MainSecVideo/>
          {/* BLOCK-WRAPPER-2 */}
          <MainBlockWrap2/>
          {/* FOOTER */}
          {/* <Footer/> */}
      </div>
    }
  }

export default HomePage;
