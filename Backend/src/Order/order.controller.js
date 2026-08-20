const ordermodel = require ("./order.model")


const index = (req,res)=>{
    

    try {

        const listdata = ordermodel.find()

        res.json(listdata)
        
    } catch (error) {

      console.log(error);

      return res.json({
         message:error
      })
      
      
   }
      

}



const store= async(req,res)=>{
    try {

        const  {

            customer_name,
            product_name,
            amount,
            status,
           

        }=req.body


        const save = await ordermodel.create({

            customer_name,
            product_name,
            amount,
            status,
            product_image:req.file.filename

        })
        
    } catch (error) {

        console.log(error)

        return res.json({
            message:error
        })
        
    }
}


const show = (req,res)=>{

    try {

        const {id} = req.params 

        const list = ordermodel.findById(id)

        res.json(list)

        
    } catch (error) {

        console.log(error);

        res.json({
            message:error
        })
        
        
    }

}



const updated = async(req,res)=>{
    try {

        const {id} = req.params

        const {

            customer_name,
            product_name,
            amount,
            status,

        }=req.body


        const updatedata = await ordermodel.findByIdAndUpdate(id,{

            customer_name,
            product_name,
            amount,
            status,

        },{new:true})

        if(req.file){
            updatedata.product_image= req.file.filename
            await updatedata.save()
        }


        
    } catch (error) {

        console.log(error)
        res.json({
            message:error
        })
        
    }
}


const deleted = (req,res)=>{
    try {

        const {id} = req.params

        const deletedata = ordermodel.deleteOne({_id:id})

        return req.json(deletedata)
        
    } catch (error) {

        console.log(error)

        res.json({
            message:error
        })
        
    }
} 


module.exports = {index,store,show,updated,deleted}