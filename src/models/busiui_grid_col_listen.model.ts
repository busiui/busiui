/**
 * table-grid col 监听表 
 */

export class BusiuiGridColListenModel {

    id: number;
    func_id: number;
    /**
     * 表格编码
     */
    grid_code: string;
    /**
     * 列名
     */
    col_name:string

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