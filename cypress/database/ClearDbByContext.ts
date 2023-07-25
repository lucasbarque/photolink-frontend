import PgPromiseConnection from './PgPromiseConnection';

export default async function clearDbByContext(context: string) {
  const connection = new PgPromiseConnection();

  const contexts = {
    all: `DELETE from users WHERE email NOT IN('user-test@photolink.com.br');`,
    users: `DELETE from users WHERE email NOT IN('user-test@photolink.com.br');`,
  };

  await connection.query(contexts[context]);
  await connection.close();
}
