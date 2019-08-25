import {ADD_ARTICLE} from "../actions/shoppingAction";

const initalState = {
    articles: []
}

export const shoppingReducer = (state = initalState, action) => {
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
                let articleIndex;
                state.articles.map((article,i) => {
                    if (article.reference === action.payload.reference){
                        //if reference of article exist we add one quantity of the article
                        testIsNewArticle = false;
                        console.log("article avant de le retourner",article);
                        console.log("i avant de le retourner",i);
                       articleIndex = i;
                    }
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
                    console.log("index",articleIndex);
                   console.log('newState',state);
                   //return {...state, articles : newArticles};
                   console.log(state.articles[articleIndex].quantity);
                   action.payload.quantity = state.articles[articleIndex].quantity + 1;
                   console.log("action.payload",action.payload);
                   if (articleIndex === 0){
                       console.log('index 0')
                       return {
                           ...state,
                           articles: [
                               action.payload,
                               ...state.articles.slice(articleIndex + 1)
                           ]
                       }
                   }
                   else if(articleIndex === state.articles.length - 1){
                        console.log('dernier index');
                        console.log(state.articles);
                        return {
                            ...state,
                            articles: [
                                ...state.articles.slice(0,articleIndex),
                                action.payload
                            ]
                        }
                   } else {
                        return {
                            ...state,
                            articles : [
                                ...state.articles.slice(0,articleIndex - 1),
                                action.payload,
                                ...state.articles.slice(articleIndex + 1)
                            ]
                        }
                   }
                   
                }
                //return state;
            };
        default:
            return state;
    }
}

export const getArticles = (state) => {
    console.log("state in add article",state);
    return state.articles;
}

//calcul total of buying and send it in euro
export const getTotalShop = (state) => {
    let total = 0;
    state.articles.map((article) => {
        total = total + (article.price*article.quantity);
    });
    console.log("total du panier",total);
    //transform cts to euro
    return total/100;
}