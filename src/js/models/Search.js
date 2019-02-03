// Example for  default export
// export default 'I am an imported string';

// API Key for food2fork: 4305347f10e7b0aff6ca3bd997e04d69
// Search API URL: https://www.food2fork.com/api/search

import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = '4305347f10e7b0aff6ca3bd997e04d69';
        //const key = '462b1cc8d4f2730081462fbc65136320';
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            console.log(res);
            this.results = res.data.recipes;
            //console.log(this.results);
        }
        catch(error) {
            alert(error);
        }
    }
}