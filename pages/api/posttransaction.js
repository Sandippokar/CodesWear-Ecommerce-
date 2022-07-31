// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Order from "../../models/Order"
import connectDb from "../../middleware/mongoose"

const handler = async(req, res) => {
    //UPDATE status into Orders table after Checking transaction status
    if(req.body.STATUS == 'TXN_SUCCESS'){
      await Order.findOneAndUpdate({orderId : req.body.ORDERID}, {status : 'Paid', paymentInfo : JSON.stringify(req.body)})
    }else if(req.body.STATUS == 'PENDING'){
      await Order.findOneAndUpdate({orderId : req.body.ORDERID}, {status : 'Pending', paymentInfo : JSON.stringify(req.body)})
    }

    //Initiate Shipping
    //Redirect user to the order confirmation page

    res.redirect('/order', 200)
    // res.status(200).json({ body: req.body })
  }


export default connectDb(handler);
