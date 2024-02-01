import { appReducer } from '@/services/app.slice'
import { baseApi } from '@/services/base-api'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
  reducer: {
    app: appReducer,
    // [decksSlice.name]: decksSlice.reducer,

    [baseApi.reducerPath]: baseApi.reducer,
    // auth: authReducer,
    // packs: packsReducer,
    // counter: counterReducer,
    // [cardsApi.reducerPath]: cardsApi.reducer
  },
})
setupListeners(store.dispatch)
export type AppDispatchType = typeof store.dispatch
export type RootStateType = ReturnType<typeof store.getState>
