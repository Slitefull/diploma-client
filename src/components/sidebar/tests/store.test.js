import { sidebarActions, sidebarReducer } from '../store';


const mockInitialState = {
  isOpenSidebar: false,
  currentMenuItem: 'dashboard',
};

describe('Sidebar reducer', () => {
  it('should setIsOpenSidebar action change store', () => {
    const action = {
      type: sidebarActions.setIsOpenSidebar.type,
      payload: true,
    };

    const expectedState = { ...mockInitialState, isOpenSidebar: true };

    const reducer = sidebarReducer(mockInitialState, action);
    expect(reducer).toEqual(expectedState);
  });

  it('should setCurrentMenuItem action change store', () => {
    const action = {
      type: sidebarActions.setCurrentMenuItem.type,
      payload: 'profile',
    };

    const expectedState = { ...mockInitialState, currentMenuItem: 'profile' };

    const reducer = sidebarReducer(mockInitialState, action);
    expect(reducer).toEqual(expectedState);
  });
});
