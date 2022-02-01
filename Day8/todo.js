let inputText = document.getElementById('input-text')
let btn = document.getElementById('btn')
let container = document.getElementById('container');
btn.addEventListener('click', () => {
   if(inputText.value==""){
      alert('please enter text')
  }
  else{
   const div1 = document.createElement('div');

   const inpt = document.createElement('input');
   inpt.value = inputText.value
   inputText.value = "";          
   inpt.setAttribute("readonly","readonly");

   const edtbtn = document.createElement('button');
   edtbtn.innerText = "Edit";
   const dltbtn = document.createElement('button');
   dltbtn.innerText = "Delete";
   const donebtn=document.createElement('button')
   donebtn.innerText="Done"

   div1.appendChild(inpt)
   div1.appendChild(edtbtn)
   div1.appendChild(dltbtn)
   div1.appendChild(donebtn)
   container.appendChild(div1) 

   edtbtn.addEventListener('click',()=>{
       if(edtbtn.innerText === 'Edit'){
          edtbtn.innerText ='save' 
        inpt.removeAttribute('readonly');
        inpt.focus()
       }
       else{
           edtbtn.innerText = 'Edit'
           inpt.setAttribute("readonly","readonly");
       }
      
   })
   dltbtn.addEventListener('click',()=>{
      container.removeChild(div1)
   })
 donebtn.addEventListener('click',()=>{
    inpt.style.textDecoration="line-through";
 })
}
})

