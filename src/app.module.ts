import { Module, NestModule, MiddlewareConsumer, RequestMethod  } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { logger } from './middleware/logger.middleware';
import { AuthModule } from './auth/auth.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ItemsModule } from './items/items.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/nest_test',{
      useFindAndModify: false
    }),
    UserModule,
    AuthModule,
    ItemsModule
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes('user') // apply middleware in controller
    // consumer.apply(LoggerMiddleware).forRoutes({path: 'user', method: RequestMethod.GET}) // apply middleware in particular request method. (RequestMethod.ALL)

  }
}
