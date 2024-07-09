export interface repo {
  message: String | String[];
  response: String | object;
}

export const responses: repo[] = [
  {
    message: ["ping" , "dong"],
    response: "pong",
  },
  {
    message: ["who are you", "who are you !", "who are you ?"],
    response: "I'm a beta bot for The Multiverse",
  },
];
// const messageToCheck = "What is your name";
// export const slashCommand = false;
// // البحث عن رد متطابق ضمن المصفوفة
// const matchedResponse = responses.find((item) => {
//   // التحقق إذا كانت الرسالة مصفوفة
//   if (Array.isArray(item.message)) {
//     // البحث عن تطابق في الرسائل داخل المصفوفة
//     return item.message.some(
//       (msg) => messageToCheck.toLowerCase() === msg.toLowerCase()
//     );
//   } else {
//     // التحقق إذا كانت الرسالة سلسلة نصية
//     return messageToCheck.toLowerCase() === item.message.toLowerCase();
//   }
// });

// if (matchedResponse) {
//   // إرسال الرد المحدد إذا وجد تطابق
//   console.log(matchedResponse.response);
// } else {
//   // إرسال رسالة بديلة إذا لم يتم العثور على تطابق
//   console.log("I don't understand!");
// }
