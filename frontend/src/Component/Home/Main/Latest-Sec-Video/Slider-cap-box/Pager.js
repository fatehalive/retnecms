import {Link} from 'react-router-dom'
import Data from './data'

const Pager = ()=>{
    return <div id="bx-pager">
        {Data.map((data)=>{
            return  <a data-slide-index={data.dataSlice} href="">
            <img src={data.img} alt=""/>
                {data.title}
            <span><i className="fa fa-clock-o"></i>{data.date}</span>
        </a>
        })}         
    </div>
}

export default Pager;