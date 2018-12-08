import React from 'react';

import './PortraitList.css';

export default ({items}) => (
    <div className="PortraitList">
    { items.map( (v,i) => 
        <div className="PortraitList__Item">
            <img className="PortraitList__Item__Img" key={i} src={v} alt="portrait"></img> 
            <p className="PortraitList__Item__Name">One Piece Chapter aaaa</p>
        </div>
    )}
    </div>
);