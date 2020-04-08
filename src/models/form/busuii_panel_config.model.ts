/**
 * form panel设置表
 */
export class BusuiiPanelConfigModel{
    id: number;
    func_id: number;
    /**
     * panel编码
     */
    panel_code:string;
    /**
     * panel名称
     */
    panel_name:string;
    /**
     * panel序号
     */
    panel_ord:number;
    /**
     * 条件显示：默认true
     */
    if_display: string;


    /**
     * 是否支持收缩
     */
    have_close:number;
    /**
     * 是否默认收缩
     */
    have_default_close:number;
     /**
     * 初始化ID
     */
    init_id:number;
    /**
     * 按钮样式class
     */
    css_class:string;
}