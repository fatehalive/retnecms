import {Link} from 'react-router-dom'

// const ListData = [
//     {nama:"All"},
//     {nama:"Politics"},
//     {nama:"Business"},
//     {nama:"Economy"},
//     {nama:"Music"},
// ]

const ListWorld = ()=>{
    return(
        <div className="filter-block">
            <div className="filter-posts">
                <ul className="filter-posts">
                   {/* {ListData.map((Data)=>{
                       if(Data.nama !=="Lifestyle"){
                           <li>
                               <Link className="active" to='#'>Lifestyle</Link>
                           </li>
                       } else {
                           <li>
                               <Link to='#'>{Data.nama}</Link>
                           </li>
                       }
                   })} */}
                   <li>
                       <Link to="#">All</Link>
                   </li>
					<li>
                        <Link to="#">Politics</Link>
                    </li>
					<li>
                        <Link to="#">Business</Link>
                    </li>
					<li>
                        <Link className="active" to="#">Lifestyle</Link>
                    </li>
					<li>
                        <Link to="#">Economy</Link>
                    </li>
					<li>
                        <Link to="#">Music</Link>
                    </li>
                </ul>
            </div>
        </div>
    )    
}

export default ListWorld;