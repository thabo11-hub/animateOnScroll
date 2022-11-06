const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList;
        }
    });
});

const hiddenElement = document.querySelectorAll('.hidden')