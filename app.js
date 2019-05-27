const express=         require("express");
      path=            require("path"),
      hbs=             require("hbs"),
      app=             express(),
      publicDir=       path.join(__dirname,'/public'),
      viewPath=        path.join(__dirname+'/templates/views'),
      partialsPath=    path.join(__dirname+'/templates/partials'),
      geocode=         require("./utils/geocode"),
      wheather=        require("./utils/wheather"),
      port=            process.env.PORT || 3000;



app.set("view engine","hbs")
app.set("views",viewPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDir))

app.get("/",(req,res)=>{
    res.render("index",{
        title:"Weather"
    });
 })
 


app.get("/help",(req,res)=>{
    res.render("help",{
        title:"Help"
    });
 })
 
 app.get("/about",(req,res)=>{
    res.render("about",{
        title:"About"
    });
 })
 
 app.get("/weather",(req,res)=>{
     if(!req.query.address)
     {
        return res.send({
             error:"please Provide Address"
         });
     }
  
     geocode(req.query.address,(error,data)=>
     {
       if(error)
       {
           console.log("Unable to Find Location , Search For Another Location Location")
            return res.send({
                 error:error
             }) 
       } 
     wheather(data,(error,temp)=>
     {
         if(error){
            return res.send({
                error:error
            }) 
         }
    
             res.send({
                 location:temp.location,
                 temperature:temp.temperature,
                 probability:temp.probability
             })
         
     })  
   
   
   })
     
  
 
 })

 
 
 

app.listen(port,()=>{
    console.log("Server Started on Port" + port)
})