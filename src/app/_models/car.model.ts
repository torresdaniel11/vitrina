export interface Car {
  carId: string,
  thumbnail: string,
  model: string,
  year: number,
  brand: string,
  price: number,
  tecnical:{
    color: string,
    new: boolean,
    version: string,
    direction: string,
    engine: number,
    transmission: string,
    traction: string,
  },
  security:{
    absbrake: boolean,
    airbag:boolean,
    alarm: boolean
  }
  images: string[]
}
