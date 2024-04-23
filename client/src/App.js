import Home from './Pages/Home';
import AllMessages from './Pages/AllMessages';
import MessageDetails from './Pages/MessageDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/messages" element={<AllMessages />} />
            <Route path="/messages/:messageId" element={<MessageDetails />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
