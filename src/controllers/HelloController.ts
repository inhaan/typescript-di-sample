import { DbServiceBase } from "../bases/services";
import readable from "../di/decorators/readable";

@readable()
class HelloController {
  constructor(public dbService: DbServiceBase) {}

  execute() {
    this.dbService.query();
  }
}

export default HelloController;
