

export interface IFindAsync<TFilter, TEntity> {
    findAsync: (filter: TFilter) => TEntity;
}

export interface IFirstOrDefault<TFilter, TEntity> {
    findOrDefaultAsync: (filter: TFilter) => TEntity;
}