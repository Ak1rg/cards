export interface IAppState {
    products:IProduct[]
    filter:string
    searchLine:string
}

export interface IProduct {
    name:string
    text:string
    like:boolean
}