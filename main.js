const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav_links")

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".links").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000
}

// header container
ScrollReveal().reveal(".header_grid_content h1", scrollRevealOption)

ScrollReveal().reveal(".header_grid_content h4", {
    ...scrollRevealOption,
    delay: 500,
})

ScrollReveal().reveal(".header_grid_content img", {
    ...scrollRevealOption,
    delay: 700,
})

ScrollReveal().reveal(".header_grid_content .btn", {
    ...scrollRevealOption,
    delay: 1000,
})

//services

ScrollReveal().reveal(".cards .card", {
    ...scrollRevealOption,
    interval: 300,
    delay: 200,
})
//about

ScrollReveal().reveal(".about_container .section_header",scrollRevealOption)
ScrollReveal().reveal(".about_container .section_subheader",{
    ...scrollRevealOption,
    delay: 500,
})

ScrollReveal().reveal(".about_image img",{
    ...scrollRevealOption,
    delay: 600,
})

ScrollReveal().reveal(".about_container .about_flex",{
    ...scrollRevealOption,
    delay: 1000,
})

ScrollReveal().reveal(".about_container .btn",{
    ...scrollRevealOption,
    delay: 1500,
})