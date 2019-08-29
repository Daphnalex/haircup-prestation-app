import {ADD_ARTICLE} from "../actions/shoppingAction";
import {DELETE_ARTICLE, DELETE_REFERENCE_ARTICLE} from "../actions/shoppingAction";

if(!localStorage.articles){
    localStorage.setItem('articles',[]);
}

const initalState = {
    articles: []
}

if(localStorage.articles !== [] && localStorage.articles !== ""){
    initalState.articles = JSON.parse(localStorage.articles);
}

export const shoppingReducer = (state = initalState, action) => {
    switch(action.type){
        case ADD_ARTICLE:
            if(state.articles.length === 0){
                action.payload.quantity = 1;
                const newState = {
                    ...state,
                    articles: [action.payload]
                }
                return newState;
            };

            if(state.articles.length > 0){
                let testIsNewArticle = true;
                let articleIndex;
                state.articles.map((article,i) => {
                    if (article.reference === action.payload.reference){
                        //if reference of article exist
                        testIsNewArticle = false;
                        articleIndex = i;
                    }
                    return articleIndex;
                });
                 if (testIsNewArticle === true){
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
                   action.payload.quantity = state.articles[articleIndex].quantity + 1;
                   if (articleIndex === 0){
                       return {
                           ...state,
                           articles: [
                               action.payload,
                               ...state.articles.slice(articleIndex + 1)
                           ]
                       }
                   }
                   else if(articleIndex === state.articles.length - 1){
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
                                ...state.articles.slice(0,articleIndex),
                                action.payload,
                                ...state.articles.slice(articleIndex + 1)
                            ]
                        }
                   }
                   
                }
            };
            break;
        case DELETE_ARTICLE:
            //map all articles
            let newState;
            state.articles.map((article,index) => {
                //find article by his reference
                if(article.reference === action.payload.reference){
                    //if quantity of article = 1 delete article
                    if(article.quantity === 1){
                        if (index === 0){
                            newState = {
                                ...state,
                                articles: [
                                    ...state.articles.slice(index + 1)
                                ]
                            }
                        } else if (index === state.articles.length - 1){
                            newState = {
                                ...state,
                                articles: [
                                    ...state.articles.slice(0, index)
                                ]
                            }
                        } else {
                            newState = {
                                ...state,
                                articles: [
                                    ...state.articles.slice(0,index),
                                    ...state.articles.slice(index+1)
                                ]
                            }
                        }
                    } else {
                        //if quantity > 1 we remove one quantity to article
                        action.payload.quantity = state.articles[index].quantity - 1;
                        if (index === 0){
                            newState = {
                                ...state,
                                articles: [
                                    action.payload,
                                    ...state.articles.slice(index + 1)
                                ]
                            }
                        }
                        else if(index === state.articles.length - 1){
                            newState = {
                                 ...state,
                                 articles: [
                                     ...state.articles.slice(0,index),
                                     action.payload
                                 ]
                             }
                        } else {
                            newState = {
                                 ...state,
                                 articles : [
                                     ...state.articles.slice(0,index),
                                     action.payload,
                                     ...state.articles.slice(index + 1)
                                 ]
                             }
                        }
                    }
                }
            });
            return newState;
        case DELETE_REFERENCE_ARTICLE:
            let newStateRef;
            state.articles.map((article,index)=> {
                if (article.reference === action.payload.reference){
                    if (index === 0){
                        newStateRef = {
                            ...state,
                            articles: [
                                ...state.articles.slice(index+1)
                            ]
                        };
                    } else if (index === state.articles.length -1){
                        newStateRef = {
                            ...state,
                            articles: [
                                ...state.articles.slice(0,index)
                            ]
                        }
                    } else {
                        newStateRef = {
                            ...state,
                            articles: [
                                ...state.articles.slice(0,index),
                                ...state.articles.slice(index + 1)
                            ]
                        }
                    }
                }
            });
            return newStateRef;
        default:
            return state;
    }
}

export const getArticles = (state) => {
        return state.articles;
}

//calcul total of buying and send it in euro
export const getTotalShop = (state) => {
    let total = 0;
   if (state.articles.length !== 0){
        state.articles.map((article) => {
            total = total + (article.price*article.quantity);
        });
    }
    //transform cts to euro
    return total/100;
}

export const getNumberArticle = (state) => {
    let totalArticles = 0;
    if (state.articles.length !== 0){
        state.articles.map((article) => {
            totalArticles = totalArticles + article.quantity;
        });
    } 
    return totalArticles;
}