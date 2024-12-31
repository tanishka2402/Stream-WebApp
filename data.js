export const API_KEY ="AIzaSyBan66aG5jdl181RppW0Y5CRc59ZbVxCQQ";

 export const value_converter = (value) =>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else{
        return value;
    }
      
    
}
