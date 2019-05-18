const nodeMailer = require('nodemailer');

const sendmail =(to,subject,text,html,cb)=>{
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'khongcho189@gmail.com',
            pass: 'canhavuive'
        }
    });

    let mailOptions = {
        from: 'khongcho189@gmail.com', // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text:text, // plain text body
        html: html // html body
    };



    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
           return cb(error,null);
        }
       return cb(null,info)
            
    });



}


module.exports=sendmail;