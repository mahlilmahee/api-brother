const mobile =()=>{
     fetch('https://jsonplaceholder.typicode.com/comments')
     .then(res =>res.json())
     .then(data=>bababhandari(data));
}
mobile();
const bababhandari=data=>{
    //  console.log(data);
     
    data.forEach(element=>
        
        {console.log(element.name);
            document.getElementById("buttonadd").addEventListener('click',function(){
              const uldata =document.getElementById('uldata');
            const li = document.createElement('li');
            li.innerText=`${element.email} ${element.name}`;
            const div =document.getElementById('cumma');
            div.appendChild(li);  
            })
            
        
        
        
        });
    
   

        // document.getElementById('buttonadd').addEventListener('click',function(){
        //     const uldata=document.getElementById('uldata');
        //  const li =document.createElement('li');
        //  li.innerText=`email: ${element.email}
        //         name:${element.name} `;
        //  const div =document.getElementById("cumma");
        //  div.appendChild(li);
        
          
     }


