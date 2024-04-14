// email.ts

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

interface FormData {
  name: string;
  email: string;
  classSelected: number;
  divSelected: number;
  score: number;
}

export async function POST(request: NextRequest) {
  const { email, name, divSelected, classSelected, score } = await request.json() as FormData;

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `${name} ended quiz `,
    text: `
      Name: ${name}
      Email: ${email}
      Division: ${divSelected}
      Class: ${classSelected}
      Score: ${score}
    `,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
