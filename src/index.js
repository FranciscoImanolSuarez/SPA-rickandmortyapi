import router from './routes/index'

console.log('Iniciando...');
window.addEventListener('load', router);
window.addEventListener('hashchange', router);
console.log('Router cargado...');
