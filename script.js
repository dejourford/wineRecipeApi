
const recipeBtn = document.querySelector('.recipeBtn')

// event listener for recipe btn
recipeBtn.addEventListener('click', fetchDrink)


// cocktail api
function fetchDrink(){
    const userChoice = document.querySelector('.userChoice').value
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userChoice}`
    
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const arrayLength = data.drinks.length
        const randomChoice =  Math.floor(Math.random() * arrayLength)
        document.querySelector('.name').innerText = data.drinks[randomChoice - 1].strDrink
        document.querySelector('img').src = data.drinks[randomChoice - 1].strDrinkThumb
        document.querySelector('.instructions').innerText = data.drinks[randomChoice - 1].strInstructions
        

    })
    .catch (error => {
        console.log(`error ${error}`)
    })

    
}

