export const ADD_ARTICLE = "ADD_ARTICLE";

export const addArticleSuccess = (article) => {
    return {
        type: ADD_ARTICLE,
        payload: article
    }
};

export const addArticle = (article) => {
    return dispatch => {
        dispatch(addArticleSuccess(article));
    }
};