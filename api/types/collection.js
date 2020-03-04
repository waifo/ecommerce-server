const Collection = `
    type Collection{
        id:ID!
        title:String!
        items:[Product]
    }

    extend type Query{
        collections:[Collection]
        collectionByTitle(title:String):Collection
    }

`;

export default Collection;
