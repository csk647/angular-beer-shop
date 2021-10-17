export interface Beer {
  id: number;
  name: string;
  image: string;
  tags: {
    key: string;
    name: string;
  }[];
  price: number;
  stock: number;
}

// export Beers:Array<object> = [{
//      id: number,
//     name: string,
//     image: string,
//     tags: {
//         key: string,
//         name: string
//     }[],
//     price: number,
//     stock: number
// }]

export interface Tag {
  key: string;
  name: string;
}
