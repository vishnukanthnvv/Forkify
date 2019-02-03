// Global app controller

// import str from './models/Search';

// import { add as a, multiply as m, ID } from './views/searchView';
// console.log(`Using Imported functions! Add = ${a(ID, 3)} and multiply = ${m(4, 6)}. ${str}`);

// import * as searchView from './views/searchView';
// console.log(`Using Imported functions! Add = ${searchView.add(ID, 3)} and multiply = ${searchView.multiply(4, 6)}. ${str}`);




import Search from './models/Search';
import { elements, renderLoader, clearLoader, } from './views/base';
import * as searchView from './views/searchView';

/** Global state of the app 
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
*/
const state = {};

const controlSearch = async () => {
    // 1. get query from view
    const query = searchView.getInput();
    console.log(query);

    if (query) {
        // 2. new search object and add to state
        state.search = new Search(query);
        
        // 3. prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        // 4. search for recipes
        await state.search.getResults();
        clearLoader();
        // 5. render results on UI
        searchView.renderResults(state.search.results);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});
