/**
 * form 按钮 设置表 
 */
export class  BusiuiFormBtnConfigModel{
    id: number;
    func_id: number;

    /**
     * panel编码
     */
    panel_code :string;
    /**
     * 按钮位置
     * SYSAUTO024
     */
    op_addr:number;

    /**
     * 操作按钮ID
     */
    op_id:string;

    /**
     * 操作按钮名称
     */
    op_name:string;
    /**
     * 操作按钮顺序
     */
    op_order:number;
    /**
     * 是否显示：默认是
     * SYS0000001
     */
    have_display:number = 1;
    /**
     * 条件显示
     */
    if_display:string;
    /**
     * 设置标记位
     */
    dyn_flag:string;
    /**
     * 按钮小图标样式
     */
    nz_type:string;
    /**
     * 是否以图标样式显示
     */
    have_icon:number;
    /**
     * 按钮样式class
     */
    css_class:string;
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