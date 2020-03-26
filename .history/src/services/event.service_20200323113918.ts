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
            const mq:any = {}
            mq[flag] = 212121;
            console.log(mq);
            this.nextParams.next(mq);
        });
        // this.toolsService.setGlobal('nextParams:' + group, JSON.stringify(res));
        return this.message$;
    }

    /**
     * 获取事件监听器
     */
    getEvent(): Observable<any> {
        return this.message$;
    }
}
