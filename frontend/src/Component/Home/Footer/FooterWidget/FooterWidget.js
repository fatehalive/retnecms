import CategoriesWidget from "./CategoriesWidget/CategoriesWidget"
import FlickrWidget from "./FlickrWidget/FlickrWidget"
import PostWidget from "./PostWidget/PostWidget"
import TextWidget from "./TextWidget/TextWidget"

const FooterWidget = ()=>{
    return <div class="footer-widgets-part">
           <div class="row">
                <TextWidget/>
                <PostWidget/>
                <CategoriesWidget/>
                <FlickrWidget/>
            </div> 
</div>
}

export default FooterWidget