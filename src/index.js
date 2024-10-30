import { createRoot } from 'react-dom/client';
import App from './components/app/App';
import './style/style.scss';
import MarvelService from './services/MarvelService';

const marvelService = new MarvelService();
marvelService.getAllCharacter().then((res) => res.data.results.forEach((item) => console.log(item.id)));

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);


