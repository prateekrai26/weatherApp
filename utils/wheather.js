const request=require("request");

const wheather=(data,callback)=>
{
    const url="https://api.darksky.net/forecast/93678909886892816f4d6ccbf502080e/"
    +data.latitude+","+data.longitude + "?units=si" ;
    request({url,json:true},(error,res)=>{
        if(error){
          callback("Unable to connect Whether",undefined);}
        else if(res.body.error)
            {
                
                callback("Unable to connect Whether",undefined);
            }
        else {
          
          callback(undefined,
            {
                location:data.place,
                temperature:res.body.currently.temperature,
                probability:res.body.currently.precipProbability
            }) 
        }
    });
}

module.exports=wheather;