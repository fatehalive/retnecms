import CarouselFeatureToday from './CarouselFeatureToday'
import Data from './Data'

const MainFeatureToday = ()=>{
    return <section className="features-today second-style">
                <div className="container">

                    <div className="title-section">
                        <h1><span>Today's Featured</span></h1>
                    </div>

                    <div className="features-today-box owl-wrapper">
					    <div class="owl-carousel" data-num="4">
                            {Data.map((data)=>{
                                return <div>
                                    <CarouselFeatureToday
                                        category={data.category}
                                        date={data.date}
                                        imgSrc={data.img}
                                        user={data.user}
                                        comment={data.comment}
                                        title={data.title}
                                    />
                                </div>
                            })}

                        </div>   
                    </div>
                </div>
            </section>
                
}

export default MainFeatureToday;