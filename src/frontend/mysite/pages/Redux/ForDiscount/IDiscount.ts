

export interface IDiscount
{
    key:number
    name: string,
    body:IBodyDiscount
}

interface IBodyDiscount
{
    description: IDescription
    image:string
}
interface IDescription
{
    price: number,
    discountPercent:number
    marketingDescription: string
}