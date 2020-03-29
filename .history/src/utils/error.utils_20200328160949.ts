import { SHOW_LOG } from '../config/const.conf';

export class EcomErrorHandler {

    handleError(error: any) {
  
      console.log( `%c ${error}`,'color:#ff1111;font-size:20px');
      // this.messageService.error(error);
      // this.msg.error(`正在努力处理中`);
      // do something with the exception
    }
  
    handleWarning(error: any) {
  
      console.log( `%c ${error}`,'color:#FFA500;font-size:18px');
      // this.messageService.error(error);
      // this.msg.error(`正在努力处理中`);
      // do something with the exception
    }
    /**
     * 日志输出
     */
    handleLog(object: any) {
      //  判断配置文件做是否日志输出的标识
      // if(true){
      if (showLog) {
       console.log("logger....");
       console.log(object);
      }
    }
  }