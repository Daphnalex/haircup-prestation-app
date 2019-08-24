import {ADD_ARTICLE} from "../actions/shoppingAction";

const initalState = {
    articles: []
}

export const shoppingReducer = (state = initalState, action) => {
    //console.log('enter in shoppingReducer',state);
    //console.log('action.type',action.type);
    switch(action.type){
        case ADD_ARTICLE:
            console.log("entre dans ADD",state)
            //first case : articles is empty
            if(state.articles.length === 0){
                action.payload.quantity = 1;
                const newState = {
                    ...state,
                    articles: [action.payload]
                }
                console.log("state afer 1",newState);
                return newState;
            } else {
                //second case : array articles is not empty - we map the array
                const newArticles = state.articles.map(article => {
                    if (article.reference === action.payload.reference){
                        //if reference of article exist we add one quantity of the article
                        article.quantity ++;
                        console.log("article avant de le retourner",article);
                        return article;
                    } else {
                        //if reference of article not exist we add the new article
                        console.log("action.payload",action.payload);
                        const newState = [
                            ...state.articles,
                            action.payload
                        ]
                        return newState;
                    }
                });
                console.log("newArticles",newArticles);
                console.log('state after 2',state.articles);
                //return newArticles;
                const test = {
                    ...state,
                    articles: newArticles
                };
                console.log("test",typeof(test.articles));
                return test;
            }
            
           
        default:
            return state;
    }
}

export const getArticles = (state) => {
    console.log("state in add article",state);
    return state.articles;
}