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

    if(!userData){
      res.json({
        status: "error email address not found",
        data: null
      });
    }

    if( bcrypt.compareSync(user.password, userData.password)) {
      const token = await jwt.sign({ id: userData._id}, req.app.get('secretKey'), { expiresIn: '1h'});
      
      req.session.userId = userData._id;
      req.session.token = token;

      res.json({
        status: "success",
        data:{ user: userData, token:token }
      });
    }else{
      res.json({
        status: "error password not match",
        data: null
      });
    }

  } catch(err){
    return res.send(err);
  }
}

exports.logout = () => async(req, res) => {
  try{
    if(req.session) {
      req.session.destroy(() => {
        return res.json({
          status: "success logout",
        });
      });
    }

  } catch(err){
    return res.send(err);
  }
}


