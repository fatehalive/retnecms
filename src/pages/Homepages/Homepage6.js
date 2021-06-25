import * as React from 'react'
import Header from '../../Component/Header/MainHeader'
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MainFeatureToday from '../../Component/Home/Main/Feature-Today-Sec/MainFeature'
import MainBlockWrapperSec from '../../Component/Home/Main/Block-Wrap-Sec/MainBlockSec'
import MainSecVideo from '../../Component/Home/Main/Latest-Sec-Video/MainSecVideo'



class HomePage extends React.Component {
    render() {
      return<div className="container-fluid">
          {/* HEADER */}
          <Header/>
          {/* Feature Today */}
          <MainFeatureToday/>
          {/* BLOCK-WRAPPER-SECTION */}
          <MainBlockWrapperSec/>
          {/*  LATES VIDEOS SECTION*/}
          <MainSecVideo/>
      </div>
    }
  }

export default HomePage;
