import { Router, Request, Response } from 'express';
import { resolveSoa } from 'dns';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}
const router = Router();

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
        <div>
          <lable>Email</lable>
          <input name="email" type="email" />
        </div>
        <div>
          <lable>Password</lable>
          <input name="password" type="password" />
        </div>
        <button>Submit</button>
    </form>
  `);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (
    email &&
    password &&
    email === 'mfedorenko16@gmail.com' &&
    password === '123456'
  ) {
    req.session = { loggedIn: true };
    res.redirect('/');
  } else {
    res.send('Invalid email or password');
  }
});

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <div> You are Logged In</div>
        <a href="/logout">Logout</a>
      </div>
    `);
  } else {
    res.send(`
      <div>
        <div> You are not authorized</div>
        <a href="/login">Login</a>
      </div>
    `);
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

export { router }; //{} because we export var which already was created
