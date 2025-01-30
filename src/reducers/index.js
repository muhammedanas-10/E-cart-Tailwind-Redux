import { combineReducers } from 'redux';
import wishlistReducer from './wishlistReducer';
// ...other reducers...

const rootReducer = combineReducers({
  wishlistReducer,
  // ...other reducers...
});

export default rootReducer;
