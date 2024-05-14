import React from "react";
import pizza_count from '../components/up';

function pizza(props) {
    return (
        <div className="main_blocks">
            <img src={props.img} alt="pizza" />
            <div className="main_text">
                <h3 className="main_title">Пепперони</h3>
                <p className="text_grey">Ничего лишнего! Томатный соус, колбаски, Пепперони и Моцарелла</p>
                <select className="choice">
                    <option selected="selected">Диаметр</option>
                    <option>25 см</option>
                    <option>35 см</option>
                    <option>45 см</option>
                </select>
                <h2>oт 550₽</h2>
                <Updater/>
            </div>
        </div>
    );
}

export default pizza;