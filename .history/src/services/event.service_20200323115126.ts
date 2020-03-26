import { Observable, Subject } from 'rxjs';

/**
 * Event Service 事件服务
 * 
 */
export class EventService {
    win: any = window;
    static nextParams = new Subject<any>();
    static message$ = EventService.nextParams.asObservable();




    /**
     * 有两个请求的情况下,前一个请求的返回值作为参数需要带到下一个请求
     * @param res 
     * @param group 
     */
    static setNextParams(params: any, group: string) {
        console.log(params);
        let groupArr = group.split(",");
        groupArr.forEach((flag: string) => {
            const mq:any = {}
            mq[flag] = params;
            console.log(mq);
            EventService.nextParams.next(mq);
        });
        // this.toolsService.setGlobal('nextParams:' + group, JSON.stringify(res));
        return EventService.message$;
    }

    /**
     * 获取事件监听器
     */
    getEvent(): Observable<any> {
        return EventService.message$;
    }
}
