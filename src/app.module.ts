import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AdminModule } from './admin/admin.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { LikeModule } from './like/like.module';
import { SubscribeModule } from './subscribe/subscribe.module';
import { SubscripeService } from './subscripe/subscripe.service';

@Module({
  imports: [AuthModule, UsersModule, AdminModule, PostModule, CommentModule, LikeModule, SubscribeModule],
  controllers: [AppController],
  providers: [AppService, SubscripeService],
})
export class AppModule {}
