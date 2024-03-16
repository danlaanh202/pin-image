// import express from 'express';
// const app = express();
// const port = 3000;
//
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });
//
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

import cron from 'node-cron';
import SeleniumServices from './src/services/SeleniumServices';

const seleniumServices = new SeleniumServices();

(async () => {
  const imageSources = await seleniumServices.initialize();
  console.log({imageSources});
})();

cron.schedule(
  '* * * * *',
  () => {
    console.log('cron every minutes');
  },
  {
    scheduled: true
  }
);