/**
 * table-tab 查询区域设置表 
 */
export class BusiuiSelectConfigModel{
    id:number;
    biz_id:number;
    /**
     * 查询区域编码
     */
    select_code:string;
    /**
     * 是否收缩：默认是
     * SYS0000001
     */
    have_metals:number = 1;

    /**
     * 默认展示几行：默认1
     */
    default_row:number =1;
    /**
     * 共几行
     */
    row_num:number;
    /**
     * 共几列
     */
    col_num:number;
}