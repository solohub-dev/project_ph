"use strict"

// відслідковуєємо кліки нна всій сторінці та викнуємо функцію documentActions

let documentActions = (e) => {
     const targetElement = e.target
     if (targetElement.closest('.icon-menu')) {
document.documentElement.classList.toggle('open-menu')          
     }
}
document.addEventListener("click", documentActions)  
