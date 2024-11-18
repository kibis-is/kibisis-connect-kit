// enums
import { ConnectionTypeEnum } from '@enums';

interface IWebConnectionConfig {
  __delimiter: ConnectionTypeEnum.Web;
  sessionID: string;
}

export default IWebConnectionConfig;
