import React from "react";
import "./ItemDetail.css"
import "../ItemCount/ItemCount"
import ItemCount from "../ItemCount/ItemCount";
export default function ItemDetail({title, description, price, imageUrl}){
    function onAdd(count){
        alert(`Quiero agregar ${count} de ${title}`)
    }
    return(
        <>
          <div id="itemDetail">
                <section>
                    <img src={imageUrl} alt={title} className="imgDetail"/>
                </section>

                <section id="itemArticle">
                    <h2> {title} </h2>
                    <p> ${price} </p>
                    <article> {description} </article>
                </section>
            </div>
            <ItemCount stock={23} initial={0} onAdd={onAdd} />
        </>
    )   
}