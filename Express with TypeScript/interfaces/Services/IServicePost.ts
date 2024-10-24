

export interface IServicePost<TRequest, TResponse> {
    postAsync: (request: TRequest) => Promise<TResponse>
}