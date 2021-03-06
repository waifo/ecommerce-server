const Collection = `
    type Collection{
        _id:ID!
        title:String!
        subCategory:[String]
        imageUrl:String
    }

    extend type Query{
        collections:[Collection]
        collectionByTitle(title:String):Collection
    }

`;

export default Collection;
