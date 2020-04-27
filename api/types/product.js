import { Vendor } from "./";
const Product = `
    type Product{
        _id:ID!
        title:String!
        category:String
        subCategory:String
        price:Float!
        oldPrice:Float
        imageUrl:String!
        description:String
        _vendorID:Vendor
        rating:Float
        isOutOfStock:Boolean!
    }

    extend type Query{
        getAllProducts:[Product]
        getProductsByCategory:[Product]
    }

`;

export default Product;
