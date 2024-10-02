import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './providers/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { CreateUserProvider } from './providers/create-user-provider';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [UsersController],
  exports: [UsersService],
  providers: [UsersService, CreateUserProvider],
  imports: [TypeOrmModule.forFeature([User]), forwardRef(() => AuthModule)],
})
export class UsersModule {}
