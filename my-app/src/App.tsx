import AppRouter from "./routes/AppRoutes";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  );
};

export default App;
