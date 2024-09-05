/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Monster as PrismaMonster } from "@prisma/client";
import { MonsterDto } from "../MonsterDto";

export class MonsterServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.MonsterCountArgs, "select">): Promise<number> {
    return this.prisma.monster.count(args);
  }

  async monsters(args: Prisma.MonsterFindManyArgs): Promise<PrismaMonster[]> {
    return this.prisma.monster.findMany(args);
  }
  async monster(
    args: Prisma.MonsterFindUniqueArgs
  ): Promise<PrismaMonster | null> {
    return this.prisma.monster.findUnique(args);
  }
  async createMonster(args: Prisma.MonsterCreateArgs): Promise<PrismaMonster> {
    return this.prisma.monster.create(args);
  }
  async updateMonster(args: Prisma.MonsterUpdateArgs): Promise<PrismaMonster> {
    return this.prisma.monster.update(args);
  }
  async deleteMonster(args: Prisma.MonsterDeleteArgs): Promise<PrismaMonster> {
    return this.prisma.monster.delete(args);
  }
  async FightMonster(args: MonsterDto): Promise<MonsterDto> {
    throw new Error("Not implemented");
  }
}
