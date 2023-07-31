import PgPromiseConnection from './PgPromiseConnection';

export default async function clearDbByContext(context: string) {
  const connection = new PgPromiseConnection();

  const contexts = {
    all: `DELETE from users WHERE email NOT IN('user-test@photolink.com.br');`,
    users: `DELETE from users WHERE email NOT IN('user-test@photolink.com.br'); UPDATE users SET reset_password_token = NULL, reset_password_expiration = NULL`,
  };

  await connection.query(contexts[context]);
  await connection.close();
}
