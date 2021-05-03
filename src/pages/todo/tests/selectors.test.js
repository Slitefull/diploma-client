import { todoSelectors } from '../selectors';


const mockInitialState = {
  todo: {
    listName: 'Test listName',
    todoName: 'Test todoName',
    lists: [{
      listName: 'Test listName',
      todos: [
        {
          name: 'Test todo first',
          isActive: true,
        },
        {
          name: 'Test todo second',
          isActive: false,
        },
      ],
    }],
    isLoading: false,
  },
};

describe('todo page selectors', () => {
  it('should return string getListName selector', () => {
    expect(todoSelectors.getListName(mockInitialState)).toEqual('Test listName');
  });

  it('should return string getTodoName selector', () => {
    expect(todoSelectors.getTodoName(mockInitialState)).toEqual('Test todoName');
  });

  it('should return array getAllTodoLists selector', () => {
    expect(todoSelectors.getAllTodoLists(mockInitialState)).toEqual([{
      listName: 'Test listName',
      todos: [
        {
          name: 'Test todo first',
          isActive: true,
        },
        {
          name: 'Test todo second',
          isActive: false,
        },
      ],
    }]);
  });

  it('should return string getIsLoading selector', () => {
    expect(todoSelectors.getIsLoading(mockInitialState)).toEqual(false);
  });
});
