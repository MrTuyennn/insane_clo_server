const product = require('../models/product')


// thêm sản phẩm
exports.create_product =  (req,res) => {
    if(!req.body.picture || !req.body.name || !req.body.size || !req.body.price || !req.body.infor){
        res.status(400).send({message:"Nhập đủ thông tin"})
        return;
    }
    let new_product =  new product({
        picture: req.body.picture,
        name: req.body.name,
        size: req.body.size,
        price: req.body.price,
        infor: req.body.infor,
    })
    new_product.save(new_product).then(data => {
       res.status(200).send({ 
           api_status: 200,
           api_message: 'Thêm thành công',
           api_version: 'v1.0',
           data : data
       })
    }).catch(err => {
        res.status(500).send({
            api_status:500,
            api_message:'Thêm thất bại',
            api_version: 'v1.0',
            err : err
        })
    })
}


// xóa sản phẩm
exports.delete_product = async (req, res) =>{
    var id_delete = req.params.id ? {_id:req.params.id} : {};
    product.findByIdAndDelete(id_delete,(err,data) => {
        if(err){
            res.status(400).send({
                api_status:400,
                api_message:'Xóa thất bại',
                api_version: 'v1.0',
                err : err
            })
        }else if(!data){
            res.status(500).send({ 
                api_status: 500,
                api_message: 'Xóa thất bại',
                api_version: 'v1.0',
                data : err
            })
            console.log(data)
            
        }else{
            res.status(200).send({
                api_status:200,
                api_message: ' Xóa thành công',
                api_version: 'v1.0',
                data : data
            })
        }
    })
}

// update sản phẩm
exports.update_product = (req, res) => {
    var id_updates = req.params.id ? {_id :req.params.id}: {};
    product.findByIdAndUpdate(id_updates,{
        picture : req.body.picture,
        name : req.body.name,
        price : req.body.price,
        size : req.body.size,
        info : req.body.info,
    }).catch(err =>{
       return res.status(400).send({
            api_status:400,
            api_message:'update thất bại',
            api_version: 'v1.0',
            err : err
        })
    }).then(data =>{
       if(!data){
          return res.status(500).send({
            api_status:500,
            api_message:'update thất bại',
            api_version: 'v1.0',
           })
       }else{
        res.status(200).send({ 
            api_status: 200,
            api_message: 'update thành công',
            api_version: 'v1.0',
            data : data
        })
       }
    })
}