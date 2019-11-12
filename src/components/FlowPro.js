import React from 'react';
import ip from '../ipinfo/ipaddress';

const FlowPro = () => (
<div>
    <div className="background">
       <div className="productTitle">
       
       
       <a href={`https://${ip}:8080` } 
          target="_blank" 
          >
          FlowPro
       </a>
       <p className="productDescription">Plixer’s FlowPro network sensor delivers security and network insight where infrastructure otherwise falls short. With a single sensor, network operations can gain additional insight into the network while security operations simultaneously lowers risk, gains data context, and responds quickly to security incidents.</p>
       </div>
       </div>

       <div className= "centerHead">
       <p>Host IP Address:  {ip}:8080</p>
       <p>Username:  admin</p>
       <p>Password:  admin</p>
       <img className = "telescopeHead" src="https://www.plixer.com/wp-content/uploads/2019/05/powerful_reporting.svg"></img>
    </div>
    </div>
)



export default FlowPro