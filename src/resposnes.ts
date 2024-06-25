export interface Response {
  message: string | string[];
  response: string;
}

export const responses: Response[] = [
  {
    message: "ping",
    response: "pong",
  },
  {
    message: ["who are you","من أنت","انت مين"],
    response: "I'm a beta bot for The Multiverse",
  },
  {
    message: "صلي علي محمد",
    response: "صلي وسلم وبارك عليك يا رسول اللة",
  },
  {
    message: ["ما اسمك", "What is your name","اسمك اية"],
    response: "أنا بوت، وأنت؟",
  },
  {
    message: ["اسمي", "انا","انا اسمي","iam","i'm"],
    response: "سعيد بلقائك",
  },
  {
    message: ["how are you","عامل اية","اخبارك","اخبارك اية"],
    response: "الحمد الله وانت اخبارك اية",
  },


];

// استخدام المصفوفة `responses` بطريقة تمكنك من التعامل مع الرسائل المتعددة
const messageToCheck = "What is your name";

// البحث عن رد متطابق ضمن المصفوفة
const matchedResponse = responses.find((item) => {
  // التحقق إذا كانت الرسالة مصفوفة
  if (Array.isArray(item.message)) {
    // البحث عن تطابق في الرسائل داخل المصفوفة
    return item.message.some((msg) => messageToCheck.toLowerCase() === msg.toLowerCase());
  } else {
    // التحقق إذا كانت الرسالة سلسلة نصية
    return messageToCheck.toLowerCase() === item.message.toLowerCase();
  }
});

if (matchedResponse) {
  // إرسال الرد المحدد إذا وجد تطابق
  console.log(matchedResponse.response);
} else {
  // إرسال رسالة بديلة إذا لم يتم العثور على تطابق
  console.log("I don't understand!");
}
