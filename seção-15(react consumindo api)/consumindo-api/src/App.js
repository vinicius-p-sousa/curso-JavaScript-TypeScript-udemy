import Login from './pages/login/login';
import GlobalStyle from './styles/globalStyles';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello, World!</h1>
      <Login />
      <GlobalStyle />
    </div>
  );
}

export default App;
