// import { type NextRequest, NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';
// import Mail from 'nodemailer/lib/mailer';

// export async function POST(request: NextRequest) {
//   const { email, name, syllabus, phonenumber, division, addmission, guardian, guardianmail, classNumber } = await request.json();

//   const transport = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.MY_EMAIL,
//       pass: process.env.MY_PASSWORD,
//     },
//   });

//   const mailOptions: Mail.Options = {
//     from: process.env.MY_EMAIL,
//     to: process.env.MY_EMAIL,
//     subject: `Message from ${name} (${email}) ${phonenumber}`,
//     text: `
//       Name: ${name}
//       Class: ${classNumber}
//       Div:${division}
//       Phone Number: ${phonenumber}
//       Syllabus:${syllabus}
//       Addmission no: ${addmission}
//       Guardian Name:${guardian}
//       Guardian Mail: ${guardianmail}
//       Syllabus:${syllabus}
//     ` ,
//   };

//   const sendMailPromise = () =>
//     new Promise<string>((resolve, reject) => {
//       transport.sendMail(mailOptions, function (err) {
//         if (!err) {
//           resolve('Email sent');
//         } else {
//           reject(err.message);
//         }
//       });
//     });

//   try {
//     await sendMailPromise();
//     return NextResponse.json({ message: 'Email sent' });
//   } catch (err) {
//     return NextResponse.json({ error: err }, { status: 500 });
//   }
// }



import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { email, name, syllabus, phonenumber, division, addmission, guardian, guardianmail, classNumber } = await request.json();

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
    subject: `New member joined`,
     text: `
      Name: ${name}
      Class: ${classNumber}
      Div:${division}
      Email:${email}
      Phone Number: ${phonenumber}
      Syllabus:${syllabus}
      Addmission no: ${addmission}
      Guardian Name:${guardian}
      Guardian Mail: ${guardianmail}
      Syllabus:${syllabus}
    ` ,
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