import { Provider } from 'react-redux';
import { Suspense, lazy } from 'react';
import { store } from './store/store';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load components for better performance
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
// const Services = lazy(() => import('./components/Services'));
const Projects = lazy(() => import('./components/Projects'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Team = lazy(() => import('./components/Team'));
const News = lazy(() => import('./components/News'));
const Blog = lazy(() => import('./components/Blog'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-white">
        <Suspense fallback={<LoadingSpinner />}>
          <Header />
          <main>
            <Hero />
            <About />
            <News />
            {/* <Services /> */}
            <Projects />
            <Testimonials />
            <Team />
            <Blog />
          </main>
          <Footer />
        </Suspense>
      </div>
    </Provider>
  );
}

export default App;
