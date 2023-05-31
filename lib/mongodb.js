import mongoose from "mongoose";
//check if already connection
const connection={};
//create new connection
async function connect(){
  //if already connection
  if(connection.isConnected){
    return;
  }
  //to access database use env connection
  const db = await mongoose.connect(process.env.MONGODB_URI)
  //gives 0 or 1 to check if connected
  connection.isConnected= db.connections[0].readyState;
}

export default connect;