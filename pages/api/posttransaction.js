// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    //UPDATE status into Orders table after Checking transaction status
    //Initiate Shipping
    //Redirect user to the order confirmation page
    res.status(200).json({ body: req.body })
  }
  