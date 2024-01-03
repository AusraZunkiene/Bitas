const cocktailNameFilterElement = document.querySelector('#coctailNameFilter'),
	categorySelectElement = document.querySelector('#categorySelect'),
	glassSelectElement = document.querySelector('#glassTypeSelect'),
	ingredientSelectElement = document.querySelector('#ingrediantSelect'),
	luckyButtonElement = document.querySelector('#lucky'),
	drinksElement = document.getElementById(".drinks");

//Tris funkcijas sudedam į vieną
function fillCategorySelect(properties, selectElement, strFieldName) {
	let dynamicHTML = "";
	for (const property of properties) {
		dynamicHTML += `<option>${property[strFieldName]}</option>`;
		}
	selectElement.innerHTML = dynamicHTML;
	}

/*	const categoriesArray = [],
	drinksArray = [];

async function fillSelectElements() {
	await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
		.then((response) => response.json())
		.then((response) => {
			fillCategorySelect(response.drinks, categorySelectElement, "strCategory");
			//Map metodas grazina is objektu masyvo objektu laukus strCategory
			categoriesArray.push(
				...response.drinks.map((value) => value.strCategory)
			);
		})
		.catch((error) => console.log(error));

	await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
		.then((response) => response.json())
		.then((response) =>
			fillCategorySelect(response.drinks, glassSelectElement, "strGlass")
		);

	await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
		.then((response) => response.json())
		.then((response) =>
			fillCategorySelect(
				response.drinks,
				ingredientSelectElement,
				"strIngredient1"
			)
		);
}



async function getAllDrinks() {
	// https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
	for (const category of categoriesArray) {
		let dynamicUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(
			" ",
			"_"
		)}`;
		const response = await fetch(dynamicUrl);
		const answerFromServer = await response.json();
		for (const drink of answerFromServer.drinks) {
			drinksArray.push(drink);
		}
		// drinksArray.push(answerFromServer);
		// console.log(answerFromServer);
	}
}

function generateDrinksHTML(drinks) {
	let dynamicHTML = "";

	for (let drink of drinks) {
		dynamicHTML += `<div class="drink">
		<img
			src="${drink.strDrinkThumb}"
			alt=""
		/>
		<h2 class="drink-title">${drink.strDrink}</h2>
	</div>`;
	}
	dynamicDrinksElement.innerHTML = dynamicHTML;
}


async function initialization() {
	// 1. selectu uzpildymas
	await fillSelectElements();
	console.log(categoriesArray);
	await getAllDrinks();
	generateDrinksHTML(drinksArray); 
	console.log(drinksArray);
	// 2. dinaminis gerimu atvaizdavimas
}
initialization();*/
//Galima, kad nereiktų atskirai sujungti į vieną funkciją pakeičiant elementus

/*fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
.then((response) => response.json())
.then((response) => selectCategory(response));

fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
.then((response) => response.json())
.then((response) => selectGlassCategory(response));

fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
.then((response) => response.json())
.then((response) => selectIngredientCategory(response));

fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
.then((response) => response.json())
.then((response) => createRandom(response));


function selectCategory(category) {
    let dynamicHTML = '';
    const categoryArr = [];
    for(let value of category.drinks) {
        categoryArr.push(value);
        dynamicHTML += `<option>${(value.map(value.strCategory))}</option>`
    }
        categorySelectElement.innerHTML = dynamicHTML 
}

function selectGlassCategory(category) {
    let dynamicHTML = '';
    const categoryArr = [];
    for(let value of category.drinks) {
        categoryArr.push(value);
        dynamicHTML += `<option>${JSON.stringify(value.strGlass)}</option>`
    }
    glassSelectElement.innerHTML = dynamicHTML
}

function selectIngredientCategory(category) {
    let dynamicHTML = '';
    const categoryArr = [];
    for(let value of category.drinks) {
        categoryArr.push(value);
        dynamicHTML += `<option>${JSON.stringify(value.strIngredient1)}</option>`
    }
    ingredientSelectElement.innerHTML = dynamicHTML
   //Lieka kabutės, reikia nuimti 
}*/

/*

luckyButtonElement.addEventListener('click', () => { 
    createRandom});

    function createRandom(response) {
    let dynamicHTML = ``;
					dynamicHTML += `<div class="drink"><img src="${response.drinks.strDrinkThumb}">
                    <h2 class="drink-title">${response.drinks.strDrink}</h2></div>`;
                    drinksElement.innerHTML = dynamicHTML;
}
*/




const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".drinks");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
  dialog.showModal(


    ``
  );
});


closeButton.addEventListener("click", () => {
  dialog.close();
});



