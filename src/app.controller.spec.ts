import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { RocketMembersRepository } from './repositories/rocket-members-repository';
import { PrismaRocketMembersRepository } from './repositories/prisma/prisma-rocket-members-repository';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { PrismaService } from './database/prisma.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        PrismaService,
        {
          provide: RocketMembersRepository,
          useClass: PrismaRocketMembersRepository,
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Team Body!"', () => {
      const body: CreateTeamMemberBody = {
        name: 'teste',
        function: 'teste',
      };
      expect(appController.getHello(body));
    });
  });
});
