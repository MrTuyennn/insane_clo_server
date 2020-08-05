const User = require('../models/user');

// đăng kí user
exports.SingUp = (req, res) => {
  if (
    !req.body.name ||
    !req.body.phone ||
    !req.body.gmail ||
    !req.body.password
  ) {
    res.status(400).send({message: 'Nhập thông tin'});
    return;
  }

  var gmail = req.body.gmail ? {gmail: req.body.gmail} : {};

  const new_user = new User({
    avatar: req.body.avatar,
    name: req.body.name,
    password: req.body.password,
    phone: req.body.phone,
    gmail: req.body.gmail,
  });

  User.find(gmail).then((data) => {
    console.log(data + 'jdfsjdfj');
    if (data.length !== 0) {
      return res.status(400).send({
        api_status: 400,
        api_message: 'Email đã tồn tại',
        api_version: 'v1.0',
      });
    } else {
      new_user
        .save(new_user)
        .then((data) => {
          if (data) {
            res.status(200).send({
              api_status: 200,
              api_message: 'Tạo tài khoản thành công',
              api_version: 'v1.0',
              data: data,
            });
          }
        })
        .catch((err) => {
          res.status(500).send({
            api_status: 500,
            api_message: 'Thất bại err',
            api_version: 'v1.0',
          });
          console.log(err);
        });
    }
  });
};

// đăng nhập user
exports.SingIn = (req, res) => {
  if (!req.body.gmail || !req.body.password) {
    res.status(400).send({message: 'Nhập đầy đủ thông tin'});
    return;
  }

  User.findOne({
    gmail: req.body.gmail,
    password: req.body.password,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({
        api_status: 500,
        api_message: 'user err',
        api_version: 'v1.0',
      });
      console.log('Thất bại');
    }
    if (!user) {
      res.status(400).send({
        api_status: 400,
        api_message: 'user err',
        api_version: 'v1.0',
      });
      console.log('thất bại');
      return user;
    }
    res.status(200).send({
      api_code: 200,
      api_status: true,
      api_message: 'Đăng Nhập thành công',
      api_version: 'v1.0',
      data: user,
    });
    console.log(user);
  });
};

// cập nhập thông tin user
exports.update_user = (req, res) => {
  var id_user = req.params.id ? {_id: req.params.id} : {};

  User.findByIdAndUpdate(id_user, {
    avatar: req.body.avatar,
    name: req.body.name,
    phone: req.body.phone,
    gmail: req.body.gmail,
  })
    .catch((err) => {
      res.status(400).send({
        api_code: 400,
        api_status: true,
        api_message: 'Cập nhập thông tin thất bại',
        api_version: 'v1.0',
        err: err,
      });
      return;
    })
    .then((data) => {
      if (!data) {
        res.status(500).send({
          api_code: 500,
          api_status: true,
          api_message: 'Not Found',
          api_version: 'v1.0',
        });
        return data;
      } else {
        res.status(200).send({
          api_status: 200,
          api_status: true,
          api_message: 'cập nhập thành công',
          api_version: 'v1.0',
          data: data,
        });
      }
    });
};

// cập nhập password cho user
exports.change_password = (req, res) => {
  var id_change_password = req.params.id ? {_id: req.params.id} : {};

  User.findOneAndUpdate(id_change_password, {
    password: req.body.password,
  })
    .then((data) => {
      if (!data) {
        res.status(500).send({
          api_code: 500,
          api_status:fales,
          api_message: 'Not Found',
          api_version: 'v1.0',
        });
        return;
      } else {
        res.status(200).send({
          api_code: 200,
          api_status: true,
          api_message: 'Cập nhập thành công',
          api_version: 'v1.0',
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(400).send({
        api_code: 400,
        api_status: true,
        api_message: 'Not Found',
        api_version: 'v1.0',
        err: err,
      });
      return 
    });
};


// lấy  user theo ID  
exports.get_user_id = async (req,res) => {
  var user_id = req.params.id ? {_id: req.params.id} : {};
  try {
    User.find({_id: req.params.id}).then(data => {
      if(!data) { 
          res.status(400).send({
            api_code: 400,
            api_status:false,
            api_message: 'data user not found',
            api_version: 'v1.0',
        })
        return data
      }else{
        res.status(200).send({
          api_code: 200,
          api_status: true,
          api_message: 'data user',
          api_version: 'v1.0',
          data: data
        })
      }
    }).catch(error => {
      res.status(500).send({
        api_code: 500,
        api_status: false,
        api_message: error,
        api_version: 'v1.0',
      })
    });
  } catch (error) {
    
  }
}

//get all users
exports.getData_user = (req,res) => {
  try {
      User.find({})
      .then(data => {
        if(!data){
          res.status(500).send({
            api_code:500,
            api_status:false,
            api_message:'user not found',
            api_version:'v.01'
          })
          return data
        }else{
          res.status(200).send({
            api_code:200,
            api_status:true,
            api_message:'user successfully',
            api_version:'v1.0',
            data:data
          })
        }})
      .catch(err =>{
        res.status(400).send({
          api_code: 400,
          api_status:false,
          api_message:'user not found',
          api_version:'v1.0',
        })
        return data
      })
  } catch (error) {
      console.log(error)
  }
}

    
    

