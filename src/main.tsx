import { createRoot } from 'react-dom/client'
import './index.css'
import { StyledEngineProvider } from "@mui/material/styles";
import App from './App.tsx'
import { CssBaseline } from '@mui/material';
createRoot(document.getElementById('root')!).render(
      <StyledEngineProvider injectFirst>
      <CssBaseline />
        <App />
      </StyledEngineProvider>
)
