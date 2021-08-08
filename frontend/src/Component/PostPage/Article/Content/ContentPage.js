import Suggestion from './CarouselSuggestion';
import React from 'react';
import Headline from './Headline';
import Content from './Content';

const ContentPage = ()=>{
 return (
  <div className="block-content">
    <div className="single-post-box">
      {/* Title */}
      <Headline />
      {/* Content */}
      <Content />
      {/* Suggestion */}
      <Suggestion />
    </div>
  </div>
  )
}

export default ContentPage