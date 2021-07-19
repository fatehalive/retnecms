import * as React from 'react'


// MAIN COMPONENT
import MainFeatureToday from '../../Component/Home/Main/Feature-Today-Sec/MainFeature'
import MainBlockWrapperSec from '../../Component/Home/Main/Block-Wrap-Sec1/MainBlockSec'
import MainSecVideo from '../../Component/Home/Main/Latest-Sec-Video/MainSecVideo'
import MainBlockWrap2 from '../../Component/Home/Main/Block-Wrap-Sec2/MainBlockWrap2'




class HomePage extends React.Component {
    render() {
      return<div>
    
          {/* Feature Today */}
          <MainFeatureToday/>
          {/* BLOCK-WRAPPER-SECTION */}
          <MainBlockWrapperSec/>
          {/*  LATES VIDEOS SECTION*/}
          <MainSecVideo/>
          {/* BLOCK-WRAPPER-2 */}
          <MainBlockWrap2/>

      </div>
    }
  }

export default HomePage;
