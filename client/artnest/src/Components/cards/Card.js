import React from "react";
import "./card.css";
import GradeIcon from '@mui/icons-material/Grade';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
function Card(props) {
  return (
    <>
      <div className="card">
        <img src={props.imgsrc} alt="" className="card_img" />
        <div className="card_info">
          <div className="card_title">{props.title}</div>
          <div className="card_category">{props.category}</div>
          <div className="card_price">{props.price}</div>
          <div className="card_like_comment">
             <GradeIcon/>
             <ChatBubbleIcon/>

          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
