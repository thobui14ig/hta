import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { ChapterEntity } from './chapter/chapter.entity';
import { ChapterModule } from './chapter/chapter.module';
import { ExcerciseEntity } from './excercise/excercise.entity';
import { ExcerciseModule } from './excercise/excercise.module';
import { FileEntity } from './file/file.entity';
import { FileModule } from './file/file.module';
import { TopicEntity } from './topic/topic.entity';
import { TopicModule } from './topic/topic.module';
import { UserChapterModule } from './user-chapter/user-chapter.module';
import { UserEntity } from './user/user.entity';
import { UserModule } from './user/user.module';
import { VariableEntity } from './variable/variable.entity';
import { VariableModule } from './variable/variable.module';
import { UserChapterEntity } from './user-chapter/user-chapter.entity';
import { ExcerciseVariableEntity } from './exercise-variable/exercise_variable.entity';
import { ExerciseVariableModule } from './exercise-variable/exercise_variable.module';
import { UserTopic } from './user-topic/user_topic.entity';
import { UserTopicModule } from './user-topic/user_topic.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PostModule } from './post/post.module';
import { PostEntity } from './post/post.entity';
import { ScheduleModule } from '@nestjs/schedule';
import { GatewayModules } from './gateway/gateway.modules';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'frontend'),
      exclude: ['/api*'], // Exclude API routes
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '103.79.143.150',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'hoctienganh',
      entities: [
        TopicEntity,
        VariableEntity,
        ChapterEntity,
        ExcerciseVariableEntity,
        ExcerciseEntity,
        UserEntity,
        FileEntity,
        UserTopic,
        UserChapterEntity,
        PostEntity,
      ],
      synchronize: true,
      // logging: true,
    }),

    TopicModule,
    VariableModule,
    ExcerciseModule,
    ChapterModule,
    ExerciseVariableModule,
    AuthModule,
    UserModule,
    FileModule,
    UserTopicModule,
    UserChapterModule,
    PostModule,
    GatewayModules,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
