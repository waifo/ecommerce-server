const Product = `
    type Product{
        id:ID!
        name:String!
        price:Float!
        imageUrl:String!
    }

    extend type Query{
        getAllProducts:[Product]
    }

`;

export default Product;
