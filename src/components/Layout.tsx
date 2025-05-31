
import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Cart from "@/components/shop/Cart";

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navigation = [
    { name: 'Accueil', path: '/' },
    { name: 'Boutique', path: '/shop' },
    { name: 'Personnalisation', path: '/customization' },
    { name: 'Suivi de commande', path: '/order-tracking' },
    { name: 'À propos', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-80 backdrop-blur-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/d7ce3e30-c5f8-4734-b717-c9ee4a495afc.png" 
                alt="NK AGENCY Logo" 
                className="h-16 mr-2"
              />
              <div className="text-white text-3xl font-bold font-montserrat tracking-wider neon-text">
                <span className="text-white text-xl">AGENCY</span>
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navigation.map(item => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`text-sm uppercase tracking-wide font-medium transition-all hover:text-white ${
                  location.pathname === item.path 
                    ? 'text-white border-b-2 border-white' 
                    : 'text-gray-400 hover:border-b-2 hover:border-gray-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button 
            className="md:hidden text-white" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-95 backdrop-blur-sm">
            <nav className="flex flex-col px-4 py-6 space-y-6">
              {navigation.map(item => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className={`text-sm uppercase tracking-wide font-medium transition-all ${
                    location.pathname === item.path 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <Cart />

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/lovable-uploads/d7ce3e30-c5f8-4734-b717-c9ee4a495afc.png" 
                  alt="NK AGENCY Logo" 
                  className="h-12 mr-2"
                />
                <h3 className="text-2xl font-bold text-white">
                  <span className="text-white">AGENCY</span>
                </h3>
              </div>
              <p className="text-gray-400 mb-4">
                Agence de communication spécialisée dans la vente d'enseignes publicitaires.
              </p>
              <p className="text-gray-400">
                Des enseignes qui captivent, des messages qui résonnent.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Boutique</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/shop" className="text-gray-400 hover:text-white transition-colors">
                    Tous les produits
                  </Link>
                </li>
                <li>
                  <Link to="/customization" className="text-gray-400 hover:text-white transition-colors">
                    Personnalisation
                  </Link>
                </li>
                <li>
                  <Link to="/order-tracking" className="text-gray-400 hover:text-white transition-colors">
                    Suivi de commande
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Liens</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/quote" className="text-gray-400 hover:text-white transition-colors">
                    Demander un devis
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>2bis avenue Édouard Herriot, 63800 COURNON-D'AUVERGNE</li>
                <li>nkagency63@gmail.com</li>
                <li>+33 (0)6 35 42 13 59</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-10 pt-6 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-center md:text-left">
                © {new Date().getFullYear()} NK AGENCY. Tous droits réservés.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link to="/legal/cgv" className="text-gray-400 hover:text-white transition-colors text-sm">
                  CGV
                </Link>
                <Link to="/legal/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Politique de confidentialité
                </Link>
                <Link to="/legal/mentions" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Mentions légales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
