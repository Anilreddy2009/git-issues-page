import './App.scss';
import { Issues } from './components/Issue/Issues';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RenderIssues } from './components/Issue/RenderIssues';

function App() {
  return (
    <BrowserRouter>
     
     <Routes>
        <Route path="/" element={<Issues/>} />
        <Route path="/render/:id" element={< RenderIssues/>}/>
      </Routes>
        
    </BrowserRouter>
  );
}

export default App;
