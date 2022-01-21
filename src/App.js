import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import { Error } from "./components/Error";
import { ApiProvider } from "./context/ApiContext";
import { AuthProvider } from "./context/AuthContext";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

const Main = () => (
  <ErrorBoundary FallbackComponent={Error}>
    <AuthProvider>
      <ApiProvider>
        <App />
      </ApiProvider>
    </AuthProvider>
  </ErrorBoundary>
);

export default Main;
