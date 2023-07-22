import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { RocketMembersRepository } from './repositories/rocket-members-repository';

@Controller()
export class AppController {
  constructor(private rocketMembersRepository: RocketMembersRepository) {}
  @Post('/hello')
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;
    await this.rocketMembersRepository.create(name, memberFunction);
  }
}
