const bar = document.querySelector(".fa-bars");
const nav = document.querySelector(".ul");

const display = () =>{
    nav.style.display = 'block';
}

const hide = () =>{
    nav.style.display = 'none';
}

bar.addEventListener('click', () =>{
    return display();
})

// bar.addEventListener('mouseout', () =>{
//     hide()
// })
