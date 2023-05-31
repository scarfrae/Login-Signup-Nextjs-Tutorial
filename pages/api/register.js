import connect from "../../lib/mongodb";
import User from '../../model/schema'
//connect to database
connect()
//check if user created or not
export default async function handler(req,res){
    try {
        //create new user with email and password
        const user = await User.create(req.body);
        res.redirect('/')
        //if no user
        if(!user){
            return res.json({"code":'User not created'})
        }
    } catch (error) {
        res.status(400).json({status:'Not able to create a new user.'})
    }
}