var modal = document.getElementById('myModal');
var icon = document.getElementById('open-modal-icon');
var form = document.getElementById('myForm');
var close = document.getElementById('close');

const filesElem=document.querySelector(".files")



icon.onclick= ()=>{
    modal.style.display="block";
}
close.onclick= ()=>{
    modal.style.display="none";
}


// form.addEventListener("submit", (event)=>{
//     event.preventDefault();
//     var formData= new FormData(form);
//     var xhr = new XMLHttpRequest();
//     var url = "http://localhost:5000/add-files";
//     var method = "POST";
//     xhr.open(method, url, true);
//     xhr.send(formData);
//     modal.style.display= "none";
// })

form.addEventListener('submit', (event)=>{
     event.preventDefault();
     const formData = new FormData(form);

     fetch("https://seopage-task-server.onrender.com/add-files",{
        method: 'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)

     })
     .then(response=> response.json())
     .catch(error=> console.log(error));
     modal.style.display="none";
     location.reload();

})

async function getFiles(){
    const url=await fetch("https://seopage-task-server.onrender.com/all-files")
    const res=await url.json();
    console.log(res)
    showfile(res);
    
}
getFiles();

function showfile(data){
    const file=document.createElement("div")
    file.classList.add("file")
    file.innerHTML=`<div>
    <p>${data.length}</p>
</div>`

filesElem.appendChild(file) 
}