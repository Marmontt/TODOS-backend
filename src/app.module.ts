import { Module } from '@nestjs/common';
import { TodoModule } from './modules/todo';
@Module({
  imports: [TodoModule],
})
export class AppModule {}
