import { dashboardActions, dashboardReducer } from '../store';


const mockInitialState = {
  users: [],
};

describe('', () => {
  it('should setUsers action change store', () => {
    const action = {
      type: dashboardActions.setUsers.type,
      payload: [{
        _id: '602ec0030a42b8419055d672',
        name: 'Max',
        role: 'superAdmin',
      }],
    };

    const expectedState = {
      users: [{
        _id: '602ec0030a42b8419055d672',
        name: 'Max',
        role: 'superAdmin',
      }],
    };

    const reducer = dashboardReducer(mockInitialState, action);
    expect(reducer).toEqual(expectedState);
  });
});
