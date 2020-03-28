import { GLOB_PATH } from '../config/const.conf';
import { StringUtils } from './string.utils';

export class ToolsUtils {

    //获取URl项目根路径
    getURlRootPath() {
        // return this.location.pathname.split('/')[1];
    }
    /**
     * 返回LocalStorage的值
     * 
     * @param key value
     */
    static getLocalStorageAndDel(key: string): string {
        const value = this.getLocalStorage(key);
        this.delLocalStorage(key);
        return value;
    }

    /**
     * 返回LocalStorage的值
     * 
     * @param key value
     */
    static getLocalStorage(key: string): string {
        let value = localStorage.getItem(key);
        if (value) {
            return value;
        }
    }

    static setLocalStorage(key: string, value: string): void {
        if (key && value) {
            return localStorage.setItem(key, value);
        }
    }

    static delLocalStorage(key: string): void {
        if (key) {
            return localStorage.removeItem(key);
        }
    }

    /**
   * 类似 `_.get`，根据 `path` 获取安全值
   * jsperf: https://jsperf.com/es-deep-getttps://jsperf.com/es-deep-get
   *
   * @param obj 数据源，无效时直接返回 `defaultValue` 值
   * @param path 若 `null`、`[]`、未定义及未找到时返回 `defaultValue` 值
   * @param defaultValue 默认值
   */
    static deepGet(obj: any | null, path: string | string[] | null | undefined, defaultValue?: any): any {
        if (!obj || path == null || path.length === 0) return defaultValue;
        if (!Array.isArray(path)) {
            path = ~path.indexOf('.') ? path.split('.') : [path];
        }
        if (path.length === 1) {
            const checkObj = obj[path[0]];
            return typeof checkObj === 'undefined' ? defaultValue : checkObj;
        }
        const res = path.reduce((o, k) => (o || {})[k], obj);
        return typeof res === 'undefined' ? defaultValue : res;
    }
    //删除全局变量
    delGlobal(key: any): void {
        const self: any = window;
        self[GLOB_PATH]['params'][key] = null;
    }

    //删除全局变量
    delAllGlobal(): void {
        const self: any = window;
        self[GLOB_PATH]['params'] = {};
    }

    //设置全局变量
    setGlobal(key: any, value: any): void {
        const self: any = window;
        self[GLOB_PATH]['params'][key] = value;
    }

    //设置全局变量
    getGlobal(key: string): any {
        const self: any = window;
        return self[GLOB_PATH]['params'][key];
    }

    //设置全局变量
    getAllGlobal(): any {
        const self: any = window;
        return self[GLOB_PATH]['params'];
    }

    //根据条件判断是否为真
    //rule：规则
    //data： 数据
    //数据遇到对象时会递归深入搜索，遇到数组则跳过
    iif = (rule: string, data: any) => {
        // console.log( rule, data);
        const arr = rule.match(/\$\{.*?\}/g);
        const queryParams = {};
        const global = this.getAllGlobal();
        if (arr) {
            arr.forEach((item: any) => {
                const key = item.replace('${', '').replace('}', '');
                let findValue: string = '';

                if (key === 'dynFlag') {
                    findValue = this.getGlobal('dynFlag');
                } else {
                    //先到data中找，找不到就到URL的参数里找
                    findValue = this.findkey(data, key);
                    if (StringUtils.IsUndefined(findValue)) {
                        findValue = this.findkey(queryParams, key);
                    }
                    if (StringUtils.IsUndefined(findValue)) {
                        findValue = this.findkey(global, key);
                    }
                }
                findValue = StringUtils.IsNotNUE(findValue) ? findValue : '';
                rule = rule.replace(item, `'${findValue}'`).replace(/\n/g, ''); //替换并去掉换行
                // console.log(key, findValue);
            });
            // console.log( rule);

            // return eval(ifDisplay['rule']); 
        }
        try {
            return eval(rule);
        }
        catch{
            this.errorHandler.handleError('条件判断语句语法错误：');
            this.errorHandler.handleError(rule);
        }
    }


    //获取uuid
    getUuid(): Observable<any> {
        const url = '/fta-sys-webapp/rest/v1/fta/system/sysSeqManagement/getUUID';
        const params = {};
        return this._http.post(url, params);
    }

    //替换参数
    //将参数中预设的值替换成dto中相应的值
    //demo： {key:""} 留空则去dto中找对应的key的值
    //{key:"$keyname"} 替换成 keyname 对应的值
    replaceParams(params: any, data: any) {

        const res: any = {};
        const global = this.getAllGlobal();
        for (const i in params) {
            //Array不用替换
            if (StringUtils.IsArray(params[i])) {
                res[i] = params[i];
            } else if (typeof params[i] === 'object') {
                res[i] = this.replaceParams(params[i], data);
            }
            else {
                if (params[i] === '') {
                    res[i] = this.findkey(data, i);
                    // this.submitDTO[i] = this.submitDTO[i] ? this.submitDTO[i] : this.findkey(this.request, i);
                } else if (params[i] && params[i][0] === '$') {
                    //如果是${uuid} 不替换，后续程序会有获取uuid的操作
                    if (params[i] === '${uuid}') {
                        res[i] = params[i];
                        continue;
                    }
                    const key = params[i].replace('$', '').replace('}', '').replace('{', '');
                    res[i] = this.findkey(data, key);
                    if (StringUtils.IsUndefined(res[i])) {
                        res[i] = this.findkey(global, key);
                    }

                } else {
                    res[i] = params[i];
                }
            }
            res[i] = res[i] ? res[i] : '';
        }
        return res;
    }

    //文本中的变量替换
    stringReplace(rule: string, data?: any) {
        data = data ? data : {};
        let tmp = rule;
        const arr = tmp.match(/\$\{.*?\}/g);
        if (arr) {
            // const queryParams = this.activeRoute.snapshot.queryParams;
            const global = this.getAllGlobal();
            arr.forEach((item: any) => {
                const key = item.replace('${', '').replace('}', '');
                let findValue: string = '';

                if (key === 'dynFlag') {
                    findValue = this.getGlobal('dynFlag');
                } else {
                    //先到data中找，找不到就到URL的参数里找
                    findValue = this.findkey(data, key);
                    // if (StringUtils.IsUndefined(findValue)) {
                    //     findValue = this.findkey(queryParams, key);
                    // }
                    if (StringUtils.IsUndefined(findValue)) {
                        findValue = this.findkey(global, key);
                    }
                }
                findValue = StringUtils.IsNotNUE(findValue) ? findValue : '';
                tmp = tmp.replace(item, findValue).replace('undefined', '0');
                // console.log(key, findValue);
            });

        }
        return tmp;
    }
    //取值逻辑
    //将参数中预设的值替换成dto中相应的值
    //demo： ${qty}*100 
    valueLogic(rule: string, data: any) {
        let tmp = rule;
        const arr = tmp.match(/\$\{.*?\}/g);
        if (arr) {
            // const queryParams = this.activeRoute.snapshot.queryParams;
            const global = this.getAllGlobal();
            arr.forEach((item: any) => {
                const key = item.replace('${', '').replace('}', '');
                let findValue: string = '';

                if (key === 'dynFlag') {
                    findValue = this.getGlobal('dynFlag');
                } else {
                    //先到data中找，找不到就到URL的参数里找
                    findValue = this.findkey(data, key);
                    // if (StringUtils.IsUndefined(findValue)) {
                    //     findValue = this.findkey(queryParams, key);
                    // }
                    if (StringUtils.IsUndefined(findValue)) {
                        findValue = this.findkey(global, key);
                    }
                }
                findValue = StringUtils.IsNotNUE(findValue) ? findValue : '';
                tmp = tmp.replace(item, `'${findValue}'`).replace('undefined', '0');
                // console.log(key, findValue);
            });

        }
        // console.log( rule);
        try {
            console.log(tmp);
            const ret = eval(tmp);
            return StringUtils.IsNotNUE(ret) ? ret : null;
        }
        catch (e) {
            console.log(e);
            this.errorHandler.handleError(`${rule} 组件动态取值逻辑错误`);
        }
        // return eval(ifDisplay['rule']); 
    }

    //递归查询对象内的key对应的值
    //数据遇到对象时会递归深入搜索，遇到数组则跳过
    //可以获取整个pannel的值 通过pannel的id号
    findkey(obj: any, key: string): any {
        for (const i in obj) {
            const item = obj[i];
            if (i === key) {
                // console.log( key,item )
                return deepCopy(item);
            }
            else if (item instanceof Array) {
                continue;
            }
            else if (typeof item === 'object') {
                const findV = this.findkey(item, key);
                if (!StringUtils.IsUndefined(findV)) {
                    return findV;
                }
            }
        }
    }


    //是否来源微信
    isWeiXin() {
        var ua: any = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        } else {
            return false;
        }
    }


    /**
       * 格式化得到 某个控件的 dictValue值    
       * @param requestParams 页面传递参数包含 entSysid, userId 等参数
       * @param dictKeyList   Exccel配置动态字典的key值集合(可能是request中取,也可能是queryDTO中取)
       * @param queryDTO      当前页面查询参数对象
       */
    fomatElementDictValue(requestParams: any, dictKeyList: any, queryDTO: any) {
        //  需要返回的dictValue值
        let dictValue = "";
        //  1.数据字典的Key值
        dictKeyList.forEach((dictKey: any) => {
            //  判断request参数中是否存在 dictKey中的值
            if (requestParams[dictKey]) {
                dictValue += requestParams[dictKey] + "★";
            }
            if (queryDTO[dictKey]) {
                dictValue += queryDTO[dictKey] + "★";
            }
        });
        //  去除最后一位★
        dictValue = dictValue.substring(0, dictValue.length - 1);
        return dictValue;
    }
}
