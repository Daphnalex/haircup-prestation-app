import {ADD_ARTICLE} from "../actions/shoppingAction";

const initalState = {
    articles: []
}

export const shoppingReducer = (state = initalState, action) => {
    //console.log('enter in shoppingReducer',state);
    //console.log('action.type',action.type);
    console.log("length",state.articles.length);
    switch(action.type){
        case ADD_ARTICLE:
            console.log("entre dans ADD",state);
            
            if(state.articles.length === 0){
                action.payload.quantity = 1;
                const newState = {
                    ...state,
                    articles: [action.payload]
                }
                console.log("state afer 1",newState);
                return newState;
            };

            if(state.articles.length > 0){
                let testIsNewArticle = true;
                const newArticles = state.articles.map((article,i) => {
                    if (article.reference === action.payload.reference){
                        //if reference of article exist we add one quantity of the article
                        testIsNewArticle = false;
                        console.log("article avant de le retourner",article);
                       action.payload.quantity = article.quantity + 1;
                        console.log("state avant retour",state.articles);
                        const newArticle = {
                            ...article,
                            ...action.payload
                        }
                        console.log("newArticle",newArticle);
                        return newArticle;
                    }
                   return state;
                });
                 if (testIsNewArticle === true){
                     console.log("c'est un nouvel article");
                    //if article not exist we add it to the array
                    action.payload.quantity = 1;
                    return {
                        ...state,
                        articles: [
                            ...state.articles,
                            action.payload
                        ]
                    }
                } else {
                   console.log("on verra",newArticles);
                   console.log('newState',state);
                   return {...state, articles : newArticles};
                }
                return state;
            };
        default:
            return state;
    }
}

export const getArticles = (state) => {
    console.log("state in add article",state);
    return state.articles;
}