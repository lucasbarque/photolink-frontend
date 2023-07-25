import pgp from 'pg-promise';

export default class PgPromiseConnection {
  pgp: any;

  constructor() {
    this.pgp = pgp()('postgres://postgres:12345678@localhost:5435/photolink');
  }

  query(steatment: string): Promise<any> {
    return this.pgp.query(steatment);
  }
  close(): Promise<void> {
    return this.pgp.$pool.end();
  }
}
