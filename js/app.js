

const readMenu = document.querySelector(".read-menu");

readMenu.addEventListener("click",function(){
    // selecting all the notification by ID and add a class for remove background
    let notification = document.querySelectorAll("#not");

    for(let j=0;j<notification.length;j++){
        notification[j].classList.add("active");
    }
    
    //slecting all the fontawesome icon and remove from the html  
    let circleIcon = document.querySelectorAll("#icon");
    console.log(circleIcon);
    for(let i=0;i<circleIcon.length;i++){
        circleIcon[i].remove();
    }

})
    // message read when clicked
    const messageRead = document.querySelector(".not04-sub");

    messageRead.addEventListener("click", function(){

        messageRead.classList.add("msgRead");
    })