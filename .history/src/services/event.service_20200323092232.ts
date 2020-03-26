import { Observable, Subject } from 'rxjs';

/**
 * Event Service 事件服务
 * 
 */
export class EventService {
    private nextParams = new Subject<any>();
    message$ = this.nextParams.asObservable();

    constructor() {

    }
    window: any = window;

    init() {

    }
   
    //有两个请求的情况下,前一个请求的返回值作为参数需要带到下一个请求
    setNextParams(res: any, group: string) {
        console.log(res);
        const params: any = {};
        let groupArr = group.split(",");
        groupArr.forEach(elem => {
            params[elem] = res;
            this.nextParams.next(params);
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
