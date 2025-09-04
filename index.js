import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import routes from './routes/route.js'; // rotas externas
import GenerosRoutes from './routes/GenerosRoutes.js'
import JogosRoutes from './routes/JogosRoutes.js'
import TorneiosRoutes from './routes/TorneiosRoutes.js'


const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


// Caminho correto das views e public
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Servir arquivos estáticos
app.use(express.static(join(__dirname, '/public')));
app.set('views', join(__dirname, '/views'));

// Rotas
app.use(JogosRoutes)
app.use(GenerosRoutes)
app.use(TorneiosRoutes)
app.use(routes)
app.listen(3003)
// Exporta o handler compatível com Vercel
export default app;