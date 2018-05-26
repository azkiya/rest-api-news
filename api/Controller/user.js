import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const User = mongoose.model('User');

exports.create = () => async(req, res) => {
  try{
    const createUser = await new User(req.body);
    createUser.save(() => {
      res.json(createUser);
    });

  }catch(err){
    return res.send(err);
  }
}

exports.authenticate = () => async(req, res) => {
  try{
    const user = await new User(req.body); 
    const userData = await User.findOne({ email: req.body.email });

    if( bcrypt.compareSync(user.password, userData.password)) {
      const token = await jwt.sign({ id: userData._id}, req.app.get('secretKey'), { expiresIn: '1h'});
      
      res.json({
        status: "success",
        data:{ user: userData, token:token }
      });
    }else{
      res.json({
        status: "error",
        data: null
      });
    }

  } catch(err){
    return res.send(err);
  }

}
