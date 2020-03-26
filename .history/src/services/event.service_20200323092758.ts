import { Observable, Subject } from 'rxjs';

/**
 * Event Service 事件服务
 * 
 */
export class EventService {
    win: any = window;
    private nextParams = new Subject<any>();
    message$ = this.nextParams.asObservable();

    constructor() {

    }


    init() {

    }

    /**
     * 有两个请求的情况下,前一个请求的返回值作为参数需要带到下一个请求
     * @param res 
     * @param group 
     */
    setNextParams(params: any, group: string) {
        console.log(params);
        let groupArr = group.split(",");
        groupArr.forEach((flag: string) => {
            const mq = {  }
            mq[flag]= params;
            this.nextParams.next(mq);
        });
        // this.toolsService.setGlobal('nextParams:' + group, JSON.stringify(res));
        return this.message$;
    }

    //有两个请求的情况下,前一个请求的返回值作为参数需要带到下一个请求
    getNextParams(group: string): Observable<any> {
        if (typeof group !== 'string') {
            return;
        }
        return this.message$;

        // const cache = this.toolsService.getGlobal('nextParams:' + group);
        // this.toolsService.delGlobal('nextParams:string' + group);
        // return cache && JSON.parse(cache);
    }


}
