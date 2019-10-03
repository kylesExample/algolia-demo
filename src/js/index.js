import style from '../style/index.scss';
import MovieSearchApp from './app.js';

const options = {
  applicationId: 'JZ9I9LMXRB',
  apiKey: 'cc0d5602e262d90cee483fdbc88588bc'
};

const app = new MovieSearchApp(options);

app.init();
