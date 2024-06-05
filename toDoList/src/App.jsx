import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import { useRef, useReducer, useCallback, createContext, useMemo } from 'react';

const mockData = [
  {
    id: 0,
    isDone: false,
    content: 'React',
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: 'Study',
    date: new Date().getTime(),
  },
];

const stateReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) => {
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item;
      });
    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
};

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(stateReducer, []);
  const idRef = useRef(2);

  const onCreate = useCallback((content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: 'UPDATE',
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    });
  }, []);

  const memorizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memorizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
