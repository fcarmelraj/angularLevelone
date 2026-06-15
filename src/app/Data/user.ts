export interface User{
    id: number,
    name: string,
    email: string,
    address:{
        street: string,
        suit: string,
        city: string,
        zipcode: string,
        geo:{
            lat: string,
            lng: string
        }
    }
    phone: string,
    website: string,
    company:{
        name: string,
        catchPhrase: string,
        bs: string
    }
}