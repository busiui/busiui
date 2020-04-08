/**
 * 
 * 功能配置
 * 
 */

 export class busiuiFuncInfoModel {
    id:number;
    func_id:number;
    /**
     * 功能名称
     */
    func_name:string;

    /**
     * 功能类型
     */
    func_msg:string

    /**
     * 功能类型
     * SYSAUTO018
     */
    func_type:number;
    /**
     * 创建人
     */
    input_user:string;
    /**
     * 
     * 创建时间
     */
    input_time:Date;
    /**
     * 修改人
     */
    update_user:string;
    /**
     * 修改时间
     */
    update_time:Date;
 }