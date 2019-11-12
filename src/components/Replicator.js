import React from 'react';
import ip from '../ipinfo/ipaddress';

const FlowPro = () => (
   <div>
    <div className="background">
       <div className="productTitle">
       
       
       <a href={`https://${ip}:8080` } 
          target="_blank" 
          >
          Replicator
       </a>
       <p className="productDescription">Replicator is a user datagram protocol (UDP) forwarder/fanout used to transparently duplicate UDP datagrams to multiple destinations. It simplifies adds, moves, and changes when an additional SIEM or NetFlow collector is introduced into security log management.</p>
       </div>
       </div>
       <div className= "centerHead">
       <p>Host IP Address:  {ip}:8080</p>
       <p>Username:  admin</p>
       <p>Password:  admin</p>
       <img className = "telescopeHead" src="https://www.plixer.com/wp-content/uploads/2019/05/data_analysis.svg
       "></img>
    </div>

       </div>
)




export default FlowPro