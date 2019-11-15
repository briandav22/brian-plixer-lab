import React from "react";
import ip from '../../ipinfo/ipaddress';
import './product.component.css'



const Product = (props) => {
    
    const { name, description, image, data = [] } = props

    console.log(data)
    return (

        <div>
            <div className="background">
                <div className="productTitle">
                    <a href={`https://${ip}:8080`} target="_blank">{name}</a>
                    <p className="productDescription">{description}</p>
                </div>
            </div>
            <div> {data.map((exporter)=><h1>{exporter}</h1>)}</div>

            <div className="centerHead">

                <p>Host IP Address:  <a href={`https://${ip}:8080`} target="_blank">{`https://${ip}:8080`}</a></p>
                <p>Username:  admin</p>
                <p>Password:  admin</p>

                <img className="telescopeHead" src={image}></img>

            </div>

        </div>)

};



export default Product