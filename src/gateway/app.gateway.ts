import { JwtService } from '@nestjs/jwt';
import { Cron, CronExpression } from '@nestjs/schedule';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import axios from 'axios';
import * as dayjs from 'dayjs';
import { Server, Socket } from 'socket.io';

const ids = [
  618114715010581, 452769581947089, 533851090781667, 296769157540088,
  382908015245608, 118056438849756, 309364699595518, 283314998828030,
  289369428379939, 1390167227872503,
];

const tokens = {
  0: `EAABwzLixnjYBO2Di31VKiRE5nDN6pfkOkj1t6ZBRtuxXmioodkveCy9YyhWkjQWKBBa5VYNwFu8PDbwGtdmKZB3qqpumSkQeLKm3OsCJWO3NJSDyWG4mCZAjfJ0ZAMKjMvk354UEiyxmQNZAlMyBOoK687Y7qZB9xKxqAn6w9ZBA7gq3fNNCGqklwGoLTK9yZBXNhawVznYZD`,
  1: `EAAAAUaZA8jlABOzSghVpegjolwM7XI4NQxnu847HjkuCksZCoMGHG8QrZColwYZAU5nopNyQZCD1sAJ4ZAyuCkHMvDllYTwAg807PEKFlP7P1a7wIOQowdFEYaiJZAMokJk4xnuOfmTlkx6XeHWwNBvYNHKGuiQIVrB8KLVrIez3I4dAGlANZCMZAhmyNMZCHO53SiZAgZDZD`,
};

@WebSocketGateway({
  cors: true,
})
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private i = 0;
  constructor(private jwtService: JwtService) {}

  @WebSocketServer() server: Server;

  afterInit(server: Server) {
    console.log('Socket.IO server initialized');
  }

  async handleConnection(client: Socket) {
    console.log('connectionnnnnnnnnnnn');
  }

  handleDisconnect(client: Socket) {
    console.log('Ngat ket noi!.', client.id);
  }

  @Cron('*/6 * * * * *')
  async getPost() {
    try {
      const apis = ids.map((id) => {
        const api = `https://graph.facebook.com/v18.0/${id}/feed?access_token=${tokens[0]}&fields=created_time,message,id,from&limit=5`;
        return axios.get(api);
      });

      const data = await Promise.all(apis);
      const posts = data.map((items) => {
        const post = this.findLatestPost(items?.data?.data);
        return {
          ...post,
          groupId: post?.id.split('_')[0],
          postId: post?.id.split('_')[1],
          created_time: dayjs(post?.created_time).format('YYYY-MM-DD HH:mm:ss'),
        };
      });

      void this.server.emit('nhandon', posts);
    } catch (error) {
      console.error(error);
    }
  }

  // Hàm để tìm bài viết có thời gian lớn nhất
  findLatestPost(posts) {
    var latestPost = null;
    var latestTime = 0;

    for (var i = 0; i < posts.length; i++) {
      var post = posts[i];
      var postTime = new Date(post.created_time).getTime();

      if (postTime > latestTime) {
        latestTime = postTime;
        latestPost = post;
      }
    }

    return latestPost;
  }
}
