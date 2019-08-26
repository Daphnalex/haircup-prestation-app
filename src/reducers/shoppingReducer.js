import {ADD_ARTICLE} from "../actions/shoppingAction";
import {DELETE_ARTICLE, DELETE_REFERENCE_ARTICLE} from "../actions/shoppingAction";

const initalState = {
    articles: []
}

export const shoppingReducer = (state = initalState, action) => {
    switch(action.type){
        case ADD_ARTICLE:
            console.log("case ADD ARTICLE",state);
            
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
                        //if reference of article exist
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
                   action.payload.quantity = state.articles[articleIndex].quantity + 1;
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
            };
        case DELETE_ARTICLE:
            console.log("case DELETE ARTICLE");
            //map all articles
            let newState;
            state.articles.map((article,index) => {
                console.log("map articles");
                //find article by his reference
                if(article.reference === action.payload.reference){
                    console.log("référence de l'article trouvé");
                    //if quantity of article = 1 delete article
                    if(article.quantity === 1){
                        console.log("quantité de l'article = 1")
                        if (index === 0){
                            console.log("index = 0");
                            newState = {
                                ...state,
                                articles: [
                                    ...state.articles.slice(index + 1)
                                ]
                            }
                        } else if (index === state.articles.length - 1){
                            console.log("index = dernier article")
                            newState = {
                                ...state,
                                articles: [
                                    ...state.articles.slice(0, index)
                                ]
                            }
                        } else {
                            console.log("index au milieu")
                            newState = {
                                ...state,
                                articles: [
                                    ...state.articles.slice(0,index),
                                    ...state.articles.slice(index+1)
                                ]
                            }
                        }
                    } else {
                        console.log("plus d'une quantité trouvé")
                        //if quantity > 1 we remove one quantity to article
                        action.payload.quantity = state.articles[index].quantity - 1;
                        if (index === 0){
                            console.log("index = 0")
                            newState = {
                                ...state,
                                articles: [
                                    action.payload,
                                    ...state.articles.slice(index + 1)
                                ]
                            }
                        }
                        else if(index === state.articles.length - 1){
                            console.log("index = dernier article")
                            newState = {
                                 ...state,
                                 articles: [
                                     ...state.articles.slice(0,index),
                                     action.payload
                                 ]
                             }
                        } else {
                            console.log("article au milieu");
                            console.log("action payload",action.payload);
                            console.log("articles",state.articles);
                            console.log(state.articles.slice(0,index-1))
                             newState = {
                                 ...state,
                                 articles : [
                                     ...state.articles.slice(0,index),
                                     action.payload,
                                     ...state.articles.slice(index + 1)
                                 ]
                             }
                             console.log("newState avant sortie",newState);
                        }
                    }
                }
            });
            console.log("newState",newState);
            return newState;
        case DELETE_REFERENCE_ARTICLE:
            console.log('case DELETE REFERENCE',state);
            console.log("payload",action.payload.reference);
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
            console.log('new state ref',newStateRef);
            return newStateRef;
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

export const getNumberArticle = (state) => {
    let totalArticles = 0;
    console.log("articles",state);
    state.articles.map((article) => {
        totalArticles = totalArticles + article.quantity;
    })
    console.log("totalArticles",totalArticles);
    return totalArticles;
}