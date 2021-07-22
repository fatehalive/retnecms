import {Link} from 'react-router-dom'
import Data from './data'

const Pager = ()=>{
    return <div id="bx-pager">
        {Data.map((data, index)=>{
            return  <Link data-slide-index={data.dataSlice} to="" key={index}>
            <img src={data.img} alt=""/>
                {data.title}
            <span><i className="fa fa-clock-o"></i>{data.date}</span>
        </Link>
        })}         
    </div>
}

export default Pager;