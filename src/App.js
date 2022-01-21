import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Error } from "./components/Error";
import { ApiProvider } from "./context/ApiContext";
import { AuthProvider } from "./context/AuthContext";
import { Home } from "./pages/Home";
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
