import './App.css';
import Header from './components/header';
import Main from './components/Main';
import Footer from './components/Footer';
import Button from './components/Button';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <Button text={'메일'} color={'red'} />
      <Button text={'카페'} />
      <Button text={'블로그'} />
    </>
  );
}

export default App;
