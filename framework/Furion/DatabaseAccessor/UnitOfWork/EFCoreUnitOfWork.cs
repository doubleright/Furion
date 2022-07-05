﻿// Copyright (c) 2020-2022 百小僧, Baiqian Co.,Ltd.
// Furion is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//             https://gitee.com/dotnetchina/Furion/blob/master/LICENSE
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.

using Microsoft.AspNetCore.Mvc.Filters;

namespace Furion.DatabaseAccessor;

/// <summary>
/// EFCore 工作单元实现
/// </summary>
[SuppressSniffer]
public sealed class EFCoreUnitOfWork : IUnitOfWork
{
    /// <summary>
    /// 数据库上下文池
    /// </summary>
    private readonly IDbContextPool _dbContextPool;

    /// <summary>
    /// 构造函数
    /// </summary>
    /// <param name="dbContextPool"></param>
    public EFCoreUnitOfWork(IDbContextPool dbContextPool)
    {
        _dbContextPool = dbContextPool;
    }

    /// <summary>
    /// 工作单元未标记处理
    /// </summary>
    /// <param name="resultContext"></param>
    /// <param name="isManual"></param>
    /// <exception cref="NotImplementedException"></exception>
    public void OnUnmark(ActionExecutedContext resultContext, bool isManual)
    {
        // 判断是否异常，并且没有贴 [ManualSaveChanges] 特性
        if (resultContext.Exception == null && !isManual) _dbContextPool.SavePoolNow();
    }

    /// <summary>
    /// 开启工作单元处理
    /// </summary>
    /// <param name="context"></param>
    /// <param name="unitOfwork"></param>
    /// <param name="isManual"></param>
    /// <exception cref="NotImplementedException"></exception>
    public void BeginTransaction(ActionExecutingContext context, UnitOfWorkAttribute unitOfwork, bool isManual)
    {
        // 开启事务
        _dbContextPool.BeginTransaction(unitOfwork.EnsureTransaction);
    }

    /// <summary>
    /// 提交工作单元处理
    /// </summary>
    /// <param name="resultContext"></param>
    /// <param name="unitOfwork"></param>
    /// <param name="isManual"></param>
    /// <exception cref="NotImplementedException"></exception>
    public void CommitTransaction(ActionExecutedContext resultContext, UnitOfWorkAttribute unitOfwork, bool isManual)
    {
        // 提交事务
        _dbContextPool.CommitTransaction(isManual);
    }

    /// <summary>
    /// 回滚工作单元处理
    /// </summary>
    /// <param name="resultContext"></param>
    /// <param name="unitOfwork"></param>
    /// <param name="isManual"></param>
    /// <exception cref="NotImplementedException"></exception>

    public void RollbackTransaction(ActionExecutedContext resultContext, UnitOfWorkAttribute unitOfwork, bool isManual)
    {
        // 提交事务
        _dbContextPool.RollbackTransaction();
    }

    /// <summary>
    /// 执行完毕（无论成功失败）
    /// </summary>
    /// <param name="context"></param>
    /// <param name="resultContext"></param>
    /// <exception cref="NotImplementedException"></exception>
    public void OnCompleted(ActionExecutingContext context, ActionExecutedContext resultContext)
    {
        // 手动关闭
        _dbContextPool.CloseAll();
    }
}