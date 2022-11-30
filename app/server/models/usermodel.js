const mongooose = require( "mongooose");

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email:{
        type:String,
        required:true,
    }
    }
);

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
