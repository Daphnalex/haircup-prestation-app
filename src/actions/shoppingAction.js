export const ADD_ARTICLE = "ADD_ARTICLE";
export const DELETE_ARTICLE = "DELETE_ARTICLE";
export const DELETE_REFERENCE_ARTICLE = "DELETE_REFERENCE_ARTICLE";

const addArticleSuccess = (article) => {
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


const deleteArticleSuccess = (article) => {
    return {
        type: DELETE_ARTICLE,
        payload: article
    }
}

export const deleteArticle = (article) => {
    return dispatch => {
        dispatch(deleteArticleSuccess(article));
    }
}

const deleteReferenceArticleSuccess = (reference) => {
    return {
        type: DELETE_REFERENCE_ARTICLE,
        payload: reference
    }
}

export const deleteReferenceArticle = (article) => {
    return dispatch => {
        dispatch(deleteReferenceArticleSuccess(article));
    }
}