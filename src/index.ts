import express, { Request, Response } from 'express'; //adding types for req and res
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send(`
    <div>
      <h1>Hello</h1>
    </div>
  `);
});

app.listen(3000, () => {
  //adding server listener with server port
  console.log('listening on port 3000');
});
