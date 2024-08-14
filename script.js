const labelElements = document.querySelectorAll(".faq__question");

labelElements.forEach((el)=>{
    el.addEventListener("keydown",(e)=>{
        if(e.key === "Enter"){
            el.click();
        }
        // e.key === "Enter" && el.click();
    })
})