let inputText = document.getElementById('input-text')
let btn = document.getElementById('btn')
let container = document.getElementById('container');
const arr=[];
btn.addEventListener('click',()=>{
    if(inputText.value==""){
        alert('please enter text')
    }
  else{
      let val=inputText.value;
      arr.push({key:val,state:false});
      inputText.value="";
      addTask()
  }

})
function addTask(){
    container.innerHTML="";
    for(let i=0;i<arr.length;i++){
       // let li=arr[i].key;
           let div1=document.createElement("div");
           //let node=document.createTextNode(li);
           let inpt=document.createTextNode('input');
           inpt.innerText=arr[i].key;
           const dltbtn = document.createElement('button');
           dltbtn.innerText = "Delete";
           const donebtn=document.createElement('button')
           donebtn.innerText="Done"
           //div1.append(node);
           div1.append(inpt);
           div1.append(dltbtn);
           div1.append(donebtn);
          container.append(div1);
          donebtn.addEventListener('click',()=>{
            inpt.style.textDecoration="line-through";
          });
          //dltbtn.addEventListener('click',dltButton());

    }
}





