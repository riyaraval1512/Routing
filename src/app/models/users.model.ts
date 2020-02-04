export interface Iuserdata{
        Name:string,
        Password:string,
        Email:string    
}

export interface IProductDetails{
    id:number,
    title:string,
    price:number,
    stock:number,
    quantity?:number
}