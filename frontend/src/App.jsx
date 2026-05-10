import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nProvider } from "@/i18n/context.jsx";
import LandingPage from "@/pages/LandingPage.jsx";

function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </I18nProvider>
  );
}

export default App;
