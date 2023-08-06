import { io } from 'socket.io-client';

export default class SocketIO {
  public socket;
  #URL = 'http://localhost:3333';

  constructor() {
    this.socket = io(this.#URL);
  }

  public connect() {
    return this.socket.connect();
  }
}
