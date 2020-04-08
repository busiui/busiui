/**
 * tabe-tab设置表
 */
export class BusuiTabConfigModel{
    id:number;
    func_id:number;
    /**
     * tab编码
     */
    tab_code:string;
    /**
     * tab名称
     */
    tab_name:string;

    /**
     * tab序号
     */
    tab_ord:number;

    /**
     * 条件显示：默认true
     */
    if_display:string;
}