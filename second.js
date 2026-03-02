const parent=document.getElementById('parent');
parent.addEventListener('click',(e)=>{// e is the event obeserver it will tell which botton is clicked among all options
    // console.log(e.target);//kisi ko v click kiya toh ushki value hme e.taret se pta chl jayegi
       const child=e.target;
       const body=document.querySelector('body');
       body.style.backgroundColor=child.id;
})