import { authReducer, authInitialState } from './auth.reducer';

describe('Auth Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = authReducer(authInitialState, action);

      expect(result).toBe(authInitialState);
    });
  });
});
