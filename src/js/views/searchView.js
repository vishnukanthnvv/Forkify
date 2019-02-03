// Example for  multiple item export
// export const add = (a, b) => a + b;
// export const multiply = (a, b) => a *b;
// export const ID = 23;

import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchResList.innerHTML = '';
};

/*
// 'pasta with tomato and spinach'
acc: 0 / acc + cur.lenght = 5 / newTitle = ['pasta']
acc: 5 / acc + cur.lenght = 9 / newTitle = ['pasta', 'with']
acc: 9 / acc + cur.lenght = 15 / newTitle = ['pasta', 'with', 'tomato']
acc: 15 / acc + cur.lenght = 18 / newTitle = ['pasta', 'with', 'tomato']
acc: 18 / acc + cur.lenght = 25 / newTitle = ['pasta', 'with', 'tomato']
*/
const limitRecipeTitle = (title, limit = 17) => {
    
    if(title.lenght > limit) {
        const newTitle = [];
        title.split(' ').reduce((acc, cur) => {
            if(acc + cur.lenght <= limit) {
                newTitle.push(cur);
            }
            return acc + cur.lenght;
        }, 0)

        // return the result
        return `${newTitle.join(' ')}...`;
    }
    return  title;


};

const renderRecipe = recipe => {
    const markup = `
        <li>
            <a class="results__link" href="${recipe.recipeID}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `;
    elements.searchResList.insertAdjacentHTML('beforeend', markup);
};

export const renderResults = recipes => {
    recipes.forEach(renderRecipe);
};