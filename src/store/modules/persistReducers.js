import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'frontFoco',
      storage,
      // na whitelist coloco os reducers que eu quero que persista algma informação
      whitelist: ['auth', 'user'],
    },
    reducers
  );
  return persistedReducer;
};
