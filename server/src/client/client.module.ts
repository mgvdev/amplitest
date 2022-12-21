import { Module } from "@nestjs/common";
import { ClientModuleBase } from "./base/client.module.base";
import { ClientService } from "./client.service";
import { ClientController } from "./client.controller";

@Module({
  imports: [ClientModuleBase],
  controllers: [ClientController],
  providers: [ClientService],
  exports: [ClientService],
})
export class ClientModule {}
