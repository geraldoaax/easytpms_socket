import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'ws';

@WebSocketGateway(5555)
export class MessageGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  onEvent(client: any, data: any): Observable<WsResponse<number>> {
    console.log(data)
    return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
  }
}
