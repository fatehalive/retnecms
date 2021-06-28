import LatestArticle from "./Latest-Article/LatestArticle"
import MainSideBar from "./SideBar/MainSideBar"

const MainBlockWrap = ()=>{
    return <section class="block-wrapper">
                <div class="container">
                    <div class="row">
                        <LatestArticle/>
                        <MainSideBar/>

                    </div>
                </div>
            </section>
}

export default MainBlockWrap;