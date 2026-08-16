import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import Layout from './Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Services from '@/pages/Services';
import Cases from '@/pages/Cases';
import Blog from '@/pages/Blog';
import CaseDetail from '@/pages/CaseDetail';

const LayoutWrapper = ({ children, currentPageName }) => (
  <Layout currentPageName={currentPageName}>{children}</Layout>
);

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <Routes>
          <Route path="/" element={<LayoutWrapper currentPageName="Home"><Home /></LayoutWrapper>} />
          <Route path="/About" element={<LayoutWrapper currentPageName="About"><About /></LayoutWrapper>} />
          <Route path="/Contact" element={<LayoutWrapper currentPageName="Contact"><Contact /></LayoutWrapper>} />
          <Route path="/Services" element={<LayoutWrapper currentPageName="Services"><Services /></LayoutWrapper>} />
          <Route path="/Cases" element={<LayoutWrapper currentPageName="Cases"><Cases /></LayoutWrapper>} />
          <Route path="/Blog" element={<LayoutWrapper currentPageName="Blog"><Blog /></LayoutWrapper>} />
          <Route path="/CaseDetail" element={<LayoutWrapper currentPageName="CaseDetail"><CaseDetail /></LayoutWrapper>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
