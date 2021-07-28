import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newArticle = (heading, subtitles) => (
        <div className="article">
            <div className="article__left">
                <FiberManualRecordIcon style={{fontSize: "15px",marginTop:"7px"}} />
            </div>
            <div className="article__right">
                <h4>{heading}</h4>
                <p>{subtitles}</p>
            </div>
        </div>
    );
    return (
        <div className="widgets"> 
            <div className="widgets__header">
                <h2>Linkedin</h2>
                 <InfoIcon/>
            </div>
            {newArticle("Hafez Elashry", "from  Egypt")}
            {newArticle("Hafez Elashry", "from  Egypt")}
            {newArticle("Hafez Elashry", "from  Egypt")}
            {newArticle("Hafez Elashry", "from  Egypt")}
            {newArticle("Hafez Elashry", "from  Egypt")}
            {newArticle("Hafez Elashry", "from  Egypt")}
        </div>
    )
}

export default Widgets
