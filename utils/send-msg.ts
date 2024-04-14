// send-msg.ts

import { FormData } from "../app/components/quiz/Quiz-container";

export function sendEmail(data: any) {
  const apiEndpoint = '/api/email/sendmsg';
  const { name, email, divSelected, classSelected, score } = data;
  const updatedData = {
    name,
    email,
    divSelected: divSelected || '',
    classSelected: classSelected || 0,
    score: score || 0,
  };
  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(updatedData),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}