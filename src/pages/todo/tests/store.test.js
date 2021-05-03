import { todoActions, todoReducer } from '../store';


const mockInitialState = {
  listName: '',
  todoName: '',
  lists: [],
  isLoading: false,
};

describe('Todo reducer', () => {
  it('should setListName action change store', () => {
    const action = {
      type: todoActions.setListName.type,
      payload: 'Test listName',
    };

    const expectedState = { ...mockInitialState, listName: 'Test listName' };

    const reducer = todoReducer(mockInitialState, action);
    expect(reducer).toEqual(expectedState);
  });

  it('should setTodoName action change store', () => {
    const action = {
      type: todoActions.setTodoName.type,
      payload: 'Test setTodoName',
    };

    const expectedState = { ...mockInitialState, todoName: 'Test setTodoName' };

    const reducer = todoReducer(mockInitialState, action);
    expect(reducer).toEqual(expectedState);
  });

  it('should setLists action change store', () => {
    const action = {
      type: todoActions.setLists.type,
      payload: [{
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
    };

    const expectedState = { ...mockInitialState,
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
      }] };

    const reducer = todoReducer(mockInitialState, action);
    expect(reducer).toEqual(expectedState);
  });

  it('should setIsLoading action change store', () => {
    const action = {
      type: todoActions.setIsLoading.type,
      payload: true,
    };

    const expectedState = { ...mockInitialState, isLoading: true };

    const reducer = todoReducer(mockInitialState, action);
    expect(reducer).toEqual(expectedState);
  });
});
