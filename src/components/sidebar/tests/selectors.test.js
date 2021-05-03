import { sidebarSelectors } from '../selectors';


const mockInitialState = {
  sidebar: {
    isOpenSidebar: false,
    currentMenuItem: 'dashboard',
  },
};

describe('sidebar selectors', () => {
  it('should return boolean getIsOpenSidebar selector', () => {
    expect(sidebarSelectors.getIsOpenSidebar(mockInitialState)).toEqual(false);
  });

  it('should return string getCurrentMenuItem selector', () => {
    expect(sidebarSelectors.getCurrentMenuItem(mockInitialState)).toEqual('dashboard');
  });
});
