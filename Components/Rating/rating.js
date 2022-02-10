const starList = document.querySelectorAll(".star")

starList.forEach((star, i) => {
    star.onclick = () => {
        let current_star_level = i;

        starList.forEach((star, j) => {
            if(current_star_level >= j) {
                star.style.color = "#fd4"
            } else {
                star.style.color = "#444"
            }
        })
    }
})

console.log(starList)