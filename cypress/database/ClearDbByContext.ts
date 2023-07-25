import PgPromiseConnection from './PgPromiseConnection';

export default async function clearDbByContext(context: string) {
  const connection = new PgPromiseConnection();

  const contexts = {
    all: 'DELETE from users;',
    users: 'DELETE from users;',
  };

  await connection.query(contexts[context]);
  await connection.close();
}
