export type User = {
    name:string;
    address: Address;
    age:number;
    birthday:number;
    email:string;
    
}

export type Address= {
    city:string;
    detail:string;
    zipCode:string;
}