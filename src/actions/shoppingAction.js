export const ADD_ARTICLE = "ADD_ARTICLE";
export const DELETE_ARTICLE = "DELETE_ARTICLE";


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


export const deleteArticleSuccess = (article) => {
    return {
        type: DELETE_ARTICLE,
        payload: article
    }
}

export const deleteArticle = (article) => {
    console.log('action delete article');
    return dispatch => {
        dispatch(deleteArticleSuccess(article));
    }
}