
let arr=JSON.parse(localStorage.getItem("user")) || []

function getdata()
{
    event.preventDefault();
   let name=document.getElementById("name").value
   let email=document.getElementById("email").value
   let address=document.getElementById("address").value
   let amount=document.getElementById("amount").value

    let obj={
        name:name,
        email:email,
        address:address,
        amount:amount,
    }

    arr.push(obj)

    localStorage.setItem("user",JSON.stringify(arr))
}