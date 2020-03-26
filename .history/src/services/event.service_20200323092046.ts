import { Observable, Subject } from 'rxjs';

/**
 * Event Service 事件服务
 * 
 */
export class EventService {
    constructor( ) {

    }
    window: any = window;

    init() {
        
    }
    //注册全局按钮变量
    reg(pannels: any, dto: any) {
        
    }

    //刷新
    reflash(pannelCode: string) {
      
    }

    //注册全局逻辑取值
    regGlobalValueLogic(pannelCode: string, element: any) {
      
    }


    //全局逻辑取值
    valueLogic(ngModel: string, value: string) {
        for (const pannelKey in this.window[globalPath][VALUE_LOGIC_KEY]) {
            const pannel = this.window[globalPath][VALUE_LOGIC_KEY][pannelKey];
            for (const key in pannel) {
                const valueLogic = pannel[key];
                if (valueLogic.indexOf(ngModel) !== -1) {
                    let data: any = {};
                    data[ngModel] = value;
                    this.window[globalPath][DTO_KEY][pannelKey][key] = this.toolsService.valueLogic(valueLogic, data);
                }
            }
        }

    }
}
