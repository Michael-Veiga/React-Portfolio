import React from 'react';


// const style = useSpring({opacity: 1, from: {opacity: 0}});

function CardInfo(props) {

    return(
        <div className="g-card-info">
            <p className="g-card-title text-white">{props.title}</p>
            <p className="g-card-sub-title text-white">{props.subTitle}</p>
            <a className="mr-2 text-white font-weight-bolder" href={props.link} target="_blank" rel="noopener noreferrer">Site Link</a>
            <a className="text-white font-weight-bolder" href={props.repo} target="_blank" rel="noopener noreferrer">Repository</a>
       </div>
    );
}

export default CardInfo;