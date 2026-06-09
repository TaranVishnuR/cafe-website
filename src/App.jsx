import Loader from "./components/Loader/Loader";
import Home from "./Pages/Home";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {!loading && <Home />}
    </>
  );
}

export default App;