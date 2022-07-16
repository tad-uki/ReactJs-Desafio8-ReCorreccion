import React from "react";
import "./ItemDetail.css"
import "../ItemCount/ItemCount"
import ItemCount from "../ItemCount/ItemCount";
import {useState} from "react"
import {Link} from "react-router-dom"

export default function ItemDetail({title, description, price, imageUrl}){
    
    const [clicked, setClicked] = useState(false) 
    
    function onAdd(count){
        alert(`Quiero agregar ${count} de ${title}`)
        setClicked(true)
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

            {clicked?
                <section className="finishSection">
                    <button className="buttonFinish"> <Link to={"/cart"}> Terminar mi Compra </Link> </button>
                </section>
            :
                <ItemCount stock={23} initial={0} onAdd={onAdd} />}
        </>
    )   
}