import {gql} from 'apollo-server-express'
import {Employee} from './models/model'
export const resolvers={
    Query:{
        hello:()=>"Helllo",
        Employees: async () => {
            const result = await Employee.find();
            console.log(result);
            return result;
          },
    },
    Mutation:{
        createEmployees: async (parentVal, { firstname,lastname,email,password,company_id }) => {
            const emp = await new Employee({
                firstname,
                lastname,
                email,
                password,
                company_id
            });
            emp.save().then(() => console.log("emp saved"));
            console.log(emp);
            return emp;
        },

        
    }
}