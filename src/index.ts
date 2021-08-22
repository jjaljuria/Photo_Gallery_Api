import app from './app';
import './database';

console.log('databases_URL', process.env.DATABASE_URL);
console.log('databases_URL', process.env.MONGO_URI);
console.log('databases_URL', process.env.MONGO_LOCALHOST);
app.listen(app.get('port'), () => {
	console.log('Server on port ', app.get('port'));
})