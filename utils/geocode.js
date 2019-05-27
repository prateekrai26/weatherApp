const request=require("request");

const geocode=(address,callback)=>
{
    const geo="https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoicHJhdGVla3JhaTI2MDIiLCJhIjoiY2p3MmNmZWdsMDFtcDQ4czBmbGlkaG5oMiJ9.w3i9acKt2eFyHOHE4SXfzQ"
   
    request({url:geo,json: true},(error,res)=>{
        if(error)
        { 
            callback("Please Connect to The Internet",undefined);}
        else if(res.body.features.length===0)
            {
              
               callback("Unable to Search This Location , Please Search Another Location",undefined);
            }
        else {
            callback(undefined,
                {
                   latitude :res.body.features[0].center[1],
                   longitude:res.body.features[0].center[0],
                   place:res.body.features[0].place_name
                }) 
        }
         
    });
}

module.exports=geocode;