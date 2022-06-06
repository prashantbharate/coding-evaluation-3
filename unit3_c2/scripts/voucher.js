
let arr1=JSON.parse(localStorage.getItem("purchase")) || []


 async function getgrossery()
 {
     let getdata=JSON.parse(localStorage.getItem("user")) || []
         try{
             const res= await fetch('https://masai-vouchers-api.herokuapp.com/api/vouchers')
             const data=await res.json();
             console.log()
             appendata(data[0].vouchers)
         }
         catch(err){
                console.log(err)
         }

         getdata.map(function(el,i){
             let bal= document.getElementById("wallet_balance")
             wallet_balance.innerText=Number(el.amount)
         })

 } 

 function  appendata(imhere){
    // console.log(imhere)
    imhere.map(function(el,i)
     {
        // console.log(el.name)
         let container= document.getElementById("container")
       
            let div1=document.createElement("div")
            div1.setAttribute("id","voucher_list")

            let im1=document.createElement("img")
            im1.src=el.image;
            im1.style.width="100%"

            let p1=document.createElement("p")
            p1.innerText=el.name;
        //console.log(el.name)
            let p2=document.createElement("p")
            p2.innerText=el.price;
            //let x=Number(el.price)
            let btn=document.createElement("button")
            btn.innerText="Buy Voucher"
            btn.setAttribute("id","buy_voucher")
            btn.addEventListener("click",addtocart(el,i))
               // alert("hi")
        

             div1.append(im1,p1,p2,btn)   
            container.append(div1)
     });
 }

 function addtocart(el,i)
 {
    // event.preventDefault();
   //  alert("hi")
   let obj={
       img:el.image,
       name:el.name,
       price:el.price
   }
   arr1.push(obj)
   localStorage.setItem("purchase",JSON.stringify(arr1))
 }
