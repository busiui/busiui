/**
 * form panel 组件 监听表 
 */
export class BusiuiCompListenModel{
    id: number;
    func_id: number;
    /**
     * 控件ID
     */
    comp_id:string;
    /**
     * 注册监听
     * SYSAUTO021
     */
    post_monitor:number;
    /**
     * 条件执行：默认true
     */
    exe_role:string;

    /**
     * 执行事件
     */
    exe_event:string;
}