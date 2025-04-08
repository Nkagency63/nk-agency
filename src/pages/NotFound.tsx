
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold mb-6 neon-text-blue">404</h1>
        <p className="text-2xl text-white mb-8">Oops! Page non trouvée</p>
        <p className="text-gray-400 max-w-lg mx-auto mb-10">
          La page que vous recherchez n'existe pas ou a été déplacée.
          Veuillez retourner à l'accueil ou consulter nos autres sections.
        </p>
        <Link
          to="/"
          className="bg-white text-black px-8 py-4 rounded text-lg font-bold transition-all hover:bg-opacity-80"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
