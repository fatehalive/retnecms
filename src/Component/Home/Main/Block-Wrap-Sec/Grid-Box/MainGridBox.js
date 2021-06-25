import Data from './data'
import GridSection from './GridSection'

const MainGridBox = ()=>{
    return <div className="grid-box">

                 <div className="row">
                    {Data.map((data)=>{
                        return <div>
                            <GridSection
                            category = {data.category}
                            imgHm = {data.imgB}
                            title= {data.title}
                            date= {data.date}
                            user={data.user}
                            comment = {data.comment}
                            view= {data.view}
                            imgSt={data.imgS}
                            />
                        </div>
                    })}   

                </div>
            </div>
}

export default MainGridBox