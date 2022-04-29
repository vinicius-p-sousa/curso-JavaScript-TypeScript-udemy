import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const port = process.env.PORT;
app.listen(port, () => {
  console.log();
  console.log('Pai tá ON!!! na porta', port);
});
