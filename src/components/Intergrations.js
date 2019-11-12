import React from "react";
import ip from '../ipinfo/ipaddress';


const Intergrations = () => (
    <div>
        <div className="background">
            <div className="productTitle">
                <a href={`https://none`} target="_blank">Plixer Intergations</a>
                <p className="productDescription">Plixer's products have the capability of intergrating with a variety of thrird part prodcuts. Here are some popular examples</p>
            </div>
        </div>
        
            <div className="column left">
                <a href={`http://${ip}:8081`} target="_blank">
                    <img className="left" src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Splunk_logo.png"></img>
                </a>


            </div>
            <div className="column right">
                <p> About Splunk</p>
            </div>
            <div className="column left">
                <a href={`http://${ip}:8083`} target="_blank">
                    <img className="left" src="https://www.trzcacak.rs/myfile/detail/504-5044944_grafana-logo-curse-media.png"></img>
                </a> </div>
                <div className="column right">
                <p> About Grafana </p>
            </div>
  
    </div>
);


export default Intergrations;