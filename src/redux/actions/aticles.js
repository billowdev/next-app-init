export const LOAD_ARTICLES = '[ARTICLES] LOAD';
export const LOAD_ARTICLES_SUCCESS = '[ARTICLES] SUCCESS';
export const LOAD_ARTICLES_FAILURE = '[ARTICLES] FAILURE';

export const loadArticles = data => ({
	type: LOAD_ARTICLES,
	payload: data,
});

export const loadArticlesSuccess = status => ({
	type: LOAD_ARTICLES_SUCCESS,
	payload: status,
});

export const loadArticlesFailure = error => ({
	type: LOAD_ARTICLES_FAILURE,
	payload: error,
});