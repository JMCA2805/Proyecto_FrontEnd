import Footer from '../components/Footer';
import Modos from '../components/Modos';
import Nav_Bar from '../components/Nav_Bar'
import Recetas from '../components/Recetas';
import Recetas2 from '../components/Recetas2';
import Slider from '../components/Slider';



// Exports
export default function DeliciasGourmet() {

  return (
    <> 
      <header>
          <Nav_Bar/>
      </header>

      <main>
          <Slider />
          <Modos />
          <Recetas />
          <Recetas2 />
      </main>

      <footer>
          <Footer />
      </footer>
    </>
  );
}


