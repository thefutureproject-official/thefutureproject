import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req, res){
    const payload = await req.json();
    console.log(payload.email);
    const email = payload.email;

    try {

        const transporter = nodemailer.createTransport({
            port: 465,
            host: 'smtp.gmail.com',
            auth: {
                user: process.env.GMAIL,
                pass: process.env.PASSWORD,
            },
            secure: true
        })

        const mailData = {
            from: process.env.GMAIL,
            to: email,
            subject: "The Future Project ",
            html: "<h1>THE FUTURE PROJECT :- We will provide some best api's in minimal cost . </h1>"
        };

        await new Promise((resolve,reject)=>{
            transporter.sendMail(mailData,(error,info)=>{
                if(error){
                    console.log("error in mail : ",error);
                    reject(error);
                }else{
                    resolve(info);
                }
            })
        });

        return NextResponse.json({ok:true,message:"mail is delivered"},{status:200});
    } catch (e) {
        return NextResponse.json({ok:false,message:"mail is not delivered"},{status:400});
    }
}