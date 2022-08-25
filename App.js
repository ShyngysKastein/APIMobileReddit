import ShowReddit from "./src/containers/ShowReddit/ShowReddit";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import redditReducer from './src/store/services/RedditSlice';

const store = configureStore({
  reducer:redditReducer
})

export default function App() {
  return (
    <Provider store={store}>
      <ShowReddit/>
    </Provider>
  );
}


