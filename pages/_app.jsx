import "../styles/globals.css";
import { Provider } from "react-redux";
import { configureStore } from "../redux/store";
import services from "../services";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={configureStore(services)}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default App;
