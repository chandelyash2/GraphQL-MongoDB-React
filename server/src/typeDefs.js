import {gql} from 'apollo-server-express'

export const typeDefs =gql`
type Query{
    hello:String!
    Employees:[Employes]!
}
type Employes {
    company_id: ID!
    firstname: String!
    lastname: String!
    email:String!
    password:String!
  }
type Mutation{
    createEmployees(firstname:String! ,lastname:String!,email:String!,password:String!,company_id:ID!):Employes
    updateEmployees(firstname:String! ,lastname:String!,password:String!,company_id:ID!):Employes
}

`