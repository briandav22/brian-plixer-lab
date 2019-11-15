const axios = require('axios');

const ScrutinizerData = ()=>{
    const url = `https://10.60.1.69:8080/fcgi/scrut_fcgi.fcgi?`
    const params = {
        "rm": "manageExporters",
        "view": "ManageExporters",
        "authToken": "cLgDzrsMkYLVGbuM7kAee5e1",
        session_state: { "client_time_zone": "America/New_York", "order_by": [], "search": [], "query_limit": { "offset": 0, "max_num_rows": 50 }, "hostDisplayType": "dns" }
    
    }
    
    return axios.get(url, { params })
        
}

export default ScrutinizerData





