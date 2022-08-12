import { ReactDOM } from "react";
function Portal(){
    
return  ReactDOM.createPortal(
    <h1>Portal demo</h1>,
    document.getElementById('portal'));
}

export default Portal;