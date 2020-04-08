/**
 *  功能初始化定义
 */
export class BusiuiFuncInitDefineModel{
    id:number;
    func_id:number;

    /**
     * 初始化ID
     */
    init_id:number;

    /**
     * 初始化名称
     */
    init_name:string;

    /**
     * 初始化SQL
     * 不要加载到前端
     */
    init_sql:string;

    /**
     * 微服务
     * SYSAUTO010 
     */
    micro_service:number;
    
    /**
     * API地址
     */
    api:string;
}