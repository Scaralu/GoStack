import express from 'express';
import routes from './routes';

const app = express();

app.get('/', (req, res) => {
  return res.json({message: 'Hello GoStack'})
});

app.listen(3333, ( )=> {
	console.log("🍖  Robust server started on port 3333")
});
