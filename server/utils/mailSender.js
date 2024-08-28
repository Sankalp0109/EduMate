const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    try{
            let transporter = nodemailer.createTransport({
                host:"sandbox.smtp.mailtrap.io",
                auth:{
                    user: "4a8590473f7730",
                    pass: "01600f259ad3b7",
                }
            })


            let info = await transporter.sendMail({
                from: 'EduMate',
                to:`${email}`,
                subject: `${title}`,
                html: `${body}`,
            })
            console.log(info);
            return info;
    }
    catch(error) {
        console.log(error.message);
    }
}


module.exports = mailSender;