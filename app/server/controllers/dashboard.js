import UserModel from "../models/usermodel";
import DashboardSchema from "../models/mongooose";

export const Dashboard = async(req,res) => {
    try{
        const Dashboard = await DashboardSchema
        req.send(Dashboard);
    }catch(error){
        console.log(error.message);
        return res.status(500);
    }
};
export const registerUser = async (req, res) => {
    const newUser = new UserModel(req.body);
    const {username} = req.body
    try {
      const oldUser = await UserModel.findOne({ username });
  
      if (oldUser)
        return res.status(400).json({ message: "User already exists" });
      const user = await newUser.save();
     } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export const loginUser = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await UserModel.findOne({ username: username });
  
      if (user) {
        const validity = await bcrypt.compare(password, user.password);
  
        if (!validity) {
          res.status(400).json("wrong password");
        } else {
          res.status(200).json({ user, token });
        }
      } else {
        res.status(404).json("User not found");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };
  export const deleteUser = async (req, res) => {
    const id = req.params.id;
  
    const { currentUserId, currentUserAdmin } = req.body;
  
    if (currentUserId == id || currentUserAdmin) {
      try {
        await UserModel.findByIdAndDelete(id);
        res.status(200).json("User Deleted Successfully!");
      } catch (error) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("Access Denied!");
    }
  };