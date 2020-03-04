const User = `
    type User{
        id:ID!
        name:String
        firstName:String
        lastName:String
        userName:String
        email:String
        password:String
        profilePhoto:String
        coverPhoto:String,
        gender:String
        dob:String
        isOnline:Boolean
    }

    extend type Query{
        user(id:ID,userName:String,firstName:String,lastName:String):User
        currentUser:User
        searchUsers(searchQry:String):[User]
        getAllUsers:[User]
    }

    extend type Mutation{
        addUser(firstName:String,lastName:String,userName:String,email:String,password:String):User
    }


`;

export default User;
