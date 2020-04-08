/**
 * busiui 事件设置
 */
export class BusiuiEventConfigModel{
    id:number;
    func_id:number;
    event_id:number;
    /**
     * 事件名称
     */
    event_name:string;
    /**
     * 事件类型
     * SYSAUTO023
     */
    event_type:number;
    /**
     * 加载方式
     * SYSAUTO005
     */
    col_loadtype:number;

    /**
     * 地址
     */
    op_url:string;
    /**
     * 请求方式 默认get
     * SYSAUTO008
     */
    get_post:number = 1;

    /**
     * 请求参数
     */
    params:string;

    /**
     * 自定义函数
     */
    dyn_event:string;

    /**
     * 条件执行：默认true
     */
    exe_role:string;

    /**
     * 执行事件
     */
    exe_event:string;
}