import * as articlesActions from "../actions/aticles"
import * as uiActions from "../actions/ui"

const loadArticlesFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
	next(action);
	if (action.type === articlesActions.LOAD_ARTICLES) {
		try {
			dispatch(uiActions.setLoading(true));
			const articles = await api.articles.getArticles();
			dispatch(articlesActions.loadArticlesSuccess(articles))
			dispatch(uiActions.setLoading(false));
		} catch (err) {
			dispatch(articlesActions.loadArticlesFailure(err))
		}
	}
}

export default [loadArticlesFlow];