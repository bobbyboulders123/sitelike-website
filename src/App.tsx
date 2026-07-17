import { Route, Routes } from 'react-router-dom';
import { StartBuildingDialogProvider } from './context/StartBuildingDialogContext';
import { PageLayout } from './components/layout/PageLayout';
import { ScrollManager } from './routing/ScrollManager';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <StartBuildingDialogProvider>
      <ScrollManager />
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </StartBuildingDialogProvider>
  );
}
