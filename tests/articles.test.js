import { loadArticlesSuccess, LOAD_ARTICLES } from "../redux/actions/aticles"
import articlesMiddleware from "../redux/middleware/articles"

describe('todos middleware', () => {
	describe('load articles flow', () => {
		const [loadArticlesFlow] = articlesMiddleware;

		const dummyArticles = {
			"data": [
				{
					"type": "dummyArticles",
					"id": "1",
					"attributes": {
						"title": "Hello dummy",
						"body": "The shortest dummyArticles."
					},
					"relationships": {
						"author": {
							"data": {
								"id": "42",
								"type": "people"
							}
						}
					}
				},
			], "included": [
				{
					"type": "people",
					"id": "42",
					"attributes": {
						"name": "dummy"
					}
				}
			]
		}
		const api = {
			articles: {
				getArticles: jest.fn().mockImplementationOnce(() => new Promise((resolve) => resolve([dummyArticles])))
			}
		}
		const dispatch = jest.fn();
		const next = jest.fn();
		const action = {
			type: LOAD_ARTICLES
		}

		it('passes action to next middleware', async () => {
			await loadArticlesFlow({ api })({ dispatch })(next)(action);
			expect(next).toHaveBeenCalledWith(action);
		});

		it('calls api.articles.getArticles at least once', async () => {
			await loadArticlesFlow({ api })({ dispatch })(next)(action);
			expect(api.articles.getArticles).toHaveBeenCalled();
		});

		it('calls api.articles.getArticles at least once', async () => {
			await loadArticlesFlow({ api })({ dispatch })(next)(action);
			expect(dispatch).toHaveBeenCalledWith(loadArticlesSuccess([dummyArticles]));
		})
	})
})