import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Testimonials />
          <Team />
          <Blog />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;