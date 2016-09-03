import { version } from '../../package.json'
import { Router } from 'express';
import balance from './balance';
import transaction from './transaction';
import wallet from './wallet';

export default ({ config }) => {
  let api = Router();

  api.use('/balance', balance({ config })); 
  api.use('/transaction', transaction({ config })); 
  api.use('/wallet', wallet({ config }));

  api.get('/', (req, res) => {
    res.json({ message: 'Welcome to the ethereum classic API v' + version });
  });

  api.post('/', (req, res) => {
    res.json({ version });
  });

  return api;
}