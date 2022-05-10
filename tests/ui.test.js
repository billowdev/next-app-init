import { PAGE_LOADED } from "../redux/actions/ui";
import uiMiddleware from "../redux/middleware/ui"

describe('UI MIDDLEWARE', () => {
	describe('PAGE LOADED FLOW', () => {
		const [pageLodedFlow] = uiMiddleware;
		const log = jest.fn();
		const dispatch = jest.fn();
		const next = jest.fn();
		const action = {
			type: PAGE_LOADED
		}

		it('passes action to next middleware', () => {
			pageLodedFlow({ log })({ dispatch })(next)(action)
			expect(next).toHaveBeenCalledWith(action);
		})

		it('Calls log with correct argument', () => {
			pageLodedFlow({ log })({ dispatch })(next)(action)
			expect(log).toHaveBeenCalledWith('page loaded');
		})
	})
});
