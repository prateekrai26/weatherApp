console.log("You are in CLient Side");

const loc=document.querySelector("#location");
const temp=document.querySelector("#temp");
loc.textContent="";
temp.textContent="";
const weatherForm=document.querySelector("form");
const search=document.querySelector("input");

weatherForm.addEventListener("submit",(e)=>
{
    e.preventDefault();
    const data=search.value;
    const url="http://localhost:3000/weather?address=" + data;
fetch(url).then((res)=>
{
    res.json().then((data)=>{
      
        if(data.error)
        {
           loc.textContent=data.error;
           temp.textContent="";

        }
        else
        {
          loc.textContent=data.location;
          temp.textContent="The Temperature at " + data.location + " is " + data.temperature + " Degree Celcius" + "And  The Possibilty of Rain is " + data.probability + "%."
        }
    })
  })
})

