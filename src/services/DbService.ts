import { DbServiceBase } from "../bases/services";
import injectable from "../di/decorators/injectable";

@injectable(DbServiceBase)
class DbService extends DbServiceBase {
  query() {
    console.log("query...");
  }
}

export default DbService;
