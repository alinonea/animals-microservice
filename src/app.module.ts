import { Module } from '@nestjs/common';
import { AnimalModule } from './animal/animal.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AnimalModule, PrismaModule, ConfigModule.forRoot({isGlobal: true})],
})
export class AppModule {}
