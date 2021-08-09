import {Data1,Data2} from './Content/data'
import Option1 from './Content/Option1'
import Option2 from './Content/Option2'

const TabContent = ()=>{
    return <div className="tab-content">
            <div className="tab-pane active" id="option1">
                <ul className="list-posts">
                     {Data1.map((data,index)=>{
                        return <Option1
                                key={index}
                                imgSrc= {data.img}
                                date= {data.date}
                                title= {data.title}
                            />
                     
                     })}

                </ul>
            </div>

            {/* <div className="tab-pane" id="option2">
                <ul className="list-posts">
                {Data2.map((data,index)=>{
                        return <Option2
                                key={index}
                                imgSrc= {data.img}
                                date= {data.date}
                                title= {data.title}
                            />
                      
                     })}
                </ul>
            </div> */}

    </div>
}

export default TabContent