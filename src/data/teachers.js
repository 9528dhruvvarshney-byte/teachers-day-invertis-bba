// ============================================================
// TEACHERS DATA
// ============================================================
// REPLACE THESE WITH REAL TEACHER DATA.
//
// This is the ONLY file you need to touch to add, remove, or
// edit teachers. The "Teacher's Desk" object in the classroom
// reads this list and lets a visitor pick a name from a dropdown
// to see their personalised message, award, memory and student
// quote. You can safely add 10-30 teachers here.
//
// Fields:
//   id           - unique short id, no spaces (used internally)
//   name         - full name shown to visitors
//   designation  - e.g. "Assistant Professor", "HOD"
//   subject      - subject(s) they teach
//   message      - the personal Teachers' Day message for them
//   award        - a fun, tasteful "award" title for this teacher
//   memory       - a one or two line memory/anecdote
//   studentQuote - a short quote attributed to "a student"
//   photo        - path to a photo in /public/assets/teachers/
//                  (leave as null to use the elegant placeholder)
// ============================================================

const teachers = [
 {
  id: "teacher-1",
  name: "Dr. Rajeev Singh Bhandari",
  designation: "Head of Department, BBA",
  subject: "Economics",
  message:
    "Sir, you have a remarkable way of understanding us before we even say much. You can somehow tell who is genuinely here to study, who will get the work done, and who has arrived mainly for a little fun. You taught us that understanding people is just as important as understanding economics. And of course, your dedication to NPTEL has made us realise that some obsessions are actually productive! Thank you for always seeing through us and guiding us in your own unique way. Happy Teachers’ Day, Sir!",
  award: "Human Behaviour Demand & Supply Analyst",
  memory:
    "Sir barely needs a conversation to figure out whether a student is serious about studies, will finish the work, or is simply here for the fun.",
  studentQuote:
    "Sir somehow knows what we're up to before we even realise it ourselves.",
  photo: null,
},
  {
  id: "teacher-2",
  name: "Dr. Tarun Gupta",
  designation: "Associate Professor",
  subject: "Marketing",
  message:
    "Sir, some teachers teach a subject, while some leave you with lessons that stay long after the class is over. You have an endless treasure of knowledge and motivation, and your love for the wisdom of the Gita somehow finds its way into the way you guide us. You have always encouraged us to choose the right path, make better decisions, and become better human beings along the way. Thank you for reminding us that success is not just about where we reach, but also about the path we choose to get there. Happy Teachers’ Day, Sir!",
  award: "Knowledge & Motivation Unlimited",
  memory:
    "A conversation with Sir somehow starts with academics and ends with a life lesson we didn't know we needed.",
  studentQuote:
    "Sir can turn almost any situation into a lesson for life.",
  photo: null,
},
 {
  id: "teacher-3",
  name: "Dr. Swastika Tripathi",
  designation: "Associate Professor",
  subject: "Finance",
  message:
    "Ma’am, at first glance, you might seem like the strictest person in the room. But those who have actually known you know just how sweet and supportive you are. With your command over Finance and your exceptionally sharp command over English, you have a way of catching every little word we choose — sometimes before we even realise what we just said! And then comes that legendary taunt, delivered so effortlessly and with such perfect timing that we can only laugh and accept defeat. Thank you for teaching us with discipline, correcting us with honesty, and making even the strictest moments memorable. Happy Teachers’ Day, Ma’am!",
  award: "Best Taunt Delivered With a Smile",
  memory:
    "You say something casually, Ma’am catches the exact wording, and within seconds we realise we've accidentally given her the perfect opportunity for a taunt.",
  studentQuote:
    "Ma’am doesn't need to roast you. She just needs to repeat your own words.",
  photo: null,
},
 {
  id: "teacher-4",
  name: "Dr. Neeru Khushwaha",
  designation: "Associate Professor",
  subject: "Economics",
  message:
    "Ma’am, your calm presence has a way of making even the most complicated concepts feel a little easier. With your expertise in Economics and your remarkable command of English, every class feels thoughtful, clear and well-structured. And then there are your notes — so precise and well put together that they often become our favourite shortcut to understanding the subject! Thank you for teaching with such patience, clarity and grace, and for showing us that knowledge doesn’t always have to be loud to leave a lasting impression. Happy Teachers’ Day, Ma’am!",
  award: "Calmness & Clarity Champion",
  memory:
    "Somehow, even when the topic gets complicated, Ma’am explains it so calmly that the entire class feels like everything is going to be okay.",
  studentQuote:
    "Ma’am’s notes have probably saved more students before exams than we would like to admit.",
  photo: null,
},
  {
  id: "teacher-5",
  name: "Dr. Deepesh Tiwari",
  designation: "Associate Professor",
  subject: "Finance & Accounting",
  message:
    "Sir, your classes have a way of making Finance and Accounting feel much less intimidating and a lot more alive. Your jolly nature brings a completely different vibe to the classroom, but we’ve also learned one important lesson — never underestimate Sir’s ability to notice even the smallest thing! You can turn a simple moment into a laugh, a lesson, or occasionally, a well-deserved ‘sunaai’ that we probably had coming. Thank you for making every class engaging, memorable and full of energy. Happy Teachers’ Day, Sir!",
  award: "Finance, Fun & Full Attendance Energy Award",
  memory:
    "The class could be having the best time, but somehow Sir would still notice that one tiny thing nobody else thought he saw.",
  studentQuote:
    "Sir makes the class fun, but we still think twice before doing anything suspicious.",
  photo: null,
},
{
  id: "teacher-5",
  name: "CA Abhinav Gaur",
  designation: "Assistant Professor",
  subject: "Finance & Income Tax",
  message:
    "Sir, you have a way of turning Finance and Income Tax from textbook concepts into lessons we can actually use in the real world. Your practical approach, especially when it comes to the share market, has given us a perspective that no textbook could. But the best part is when a simple lecture suddenly turns into one of your life stories — and before we realise it, the lecture is over and we’ve taken away another life lesson. Thank you for making learning practical, relatable and genuinely interesting. Happy Teachers’ Day, Sir!",
  award: "Lecture-to-Life-Lesson Specialist",
  memory:
    "A lecture with Sir can start with Income Tax, move to the stock market, somehow become a life story, and before we know it — the lecture is over.",
  studentQuote:
    "Sir, we came for Finance but stayed for the life lessons.",
  photo: null,
},
{
  id: "teacher-7",
  name: "Dr. Aditi Yadav",
  designation: "Assistant Professor",
  subject: "Marketing & Management",
  message:
    "Ma’am, every new teacher brings a new perspective, and we’re glad to have yours with us. Through Marketing and Management, we hope to learn not just concepts from the classroom, but also the confidence to understand people, ideas and the world of business a little better. As you begin this journey with us, we look forward to the lessons, conversations and memories we’ll create together. Here’s to a wonderful journey ahead. Happy Teachers’ Day, Ma’am!",
  award: "Fresh Perspective Award",
  memory:
    "A new chapter begins — with new classes, new conversations and hopefully many memories waiting to be made.",
  studentQuote:
    "New faculty, new perspective, new lessons to look forward to.",
  photo: null,
},
{
  id: "teacher-8",
  name: "Ms. Shivani Tripathi",
  designation: "Assistant Professor",
  subject: "Corporate & Industrial Law",
  message:
    "Ma’am, some teachers teach you through their classes, while some teach you simply by being around and letting you be a part of things. I’ve been lucky enough to learn from you in both ways. Whether it was event management, handling responsibilities, or figuring out how to turn an idea into something creative, I’ve learnt so much from you along the way. Your creativity, your way of handling things, and the trust you give while working together have made our bond genuinely special. Thank you for being someone I can always learn from, work with, and share a good laugh with. Happy Teachers’ Day, Ma’am!",
  award: "Creativity & Chaos Management Expert",
  memory:
    "Whether it was an event or just another piece of work, somehow working with Ma’am always turned into a lesson in creativity, responsibility and getting things done.",
  studentQuote:
    "With Ma’am, you don't just get the work done — you learn how to do it better.",
  photo: null,
},
{
  id: "teacher-9",
  name: "Ms. Unnati Agarwal",
  designation: "Assistant Professor",
  subject: "Marketing",
  message:
    "Ma’am, working with you on events has one very special advantage — somehow, a lot of the work gets done by you before the student coordinators even realise they had work to do! Your efficiency and willingness to take things forward have taught us that good teamwork is not just about dividing work, but also about knowing when to step in and make things easier for everyone. And in the classroom, we’ve learnt another important lesson — being late is definitely not a habit Ma’am appreciates, and when Ma’am starts speaking, suddenly everyone’s listening skills improve! Thank you for being so supportive, efficient and wonderfully particular about getting things done right. Happy Teachers’ Day, Ma’am!",
  award: "Student Coordinator's Workload Reduction Specialist",
  memory:
    "Event planning with Ma’am: student coordinators make the plan, Ma’am somehow ends up getting half of it done herself.",
  studentQuote:
    "Ma’am ki class mein do cheezein guaranteed hain — attention aur punctuality.",
  photo: null,
},
{
  id: "teacher-10",
  name: "Mr. Amiyo Das",
  designation: "Assistant Professor",
  subject: "Finance",
  message:
    "Sir, you’ve shown us that being a Finance professor doesn’t mean you have to stay away from the Gen-Z world! Whether it’s Instagram, Snapchat or LinkedIn, you somehow manage to stay more updated than most of us. Your LinkedIn comments deserve a separate fan club, and your friendly nature makes it surprisingly easy for students to share things with you without hesitation. But perhaps the most appreciated part of working with you on events is the legendary tradition at the end — a treat for the student coordinators! Thank you for being approachable, relatable and always making students feel comfortable being themselves. Happy Teachers’ Day, Sir!",
  award: "Most Gen-Z Faculty Award",
  memory:
    "Event khatam hone ke baad student coordinators ki nazar kaam se zyada ek cheez dhoondhti hai — Sir ki treat.",
  studentQuote:
    "Sir Finance padhate hain, social media pe active rehte hain, aur student coordinators ko treat bhi dete hain. What more do we need?",
  photo: null,
},
{
  id: "teacher-11",
  name: "Dr. Alok Mishra",
  designation: "Assistant Professor",
  subject: "Finance",
  message:
    "Sir, with you, the classroom has always felt a little less like a classroom and a lot more like a place where we can genuinely be ourselves. Your friendly nature makes it easy to talk to you about almost anything, and what makes you special is how well you understand students — when to give us the freedom to figure things out on our own and when to step in and keep us on track. That balance is something not every teacher can manage. Thank you for being someone we can learn from, talk to, and simply be comfortable around. Happy Teachers’ Day, Sir!",
  award: "Perfect Balance: Chill When Needed, Strict When Required",
  memory:
    "Sir somehow knows exactly when to let us enjoy ourselves and exactly when to remind us that we are, in fact, still students.",
  studentQuote:
    "Sir ke saath baat karne ke liye topic nahi chahiye — bas baat karni ho toh kar lo.",
  photo: null,
},
{
  id: "teacher-12",
  name: "Ms. Shreya Trivedi",
  designation: "Assistant Professor",
  subject: "Marketing",
  message:
    "Ma’am, your classes have a little bit of everything that makes learning easier — creative presentations, beautifully structured notes, and a teaching style that somehow makes even difficult concepts easier to remember. Your sweet and approachable nature makes the classroom even more comfortable. And then there’s your signature ‘theek hai’ after almost every line — which we’ve realised is not just a phrase, but your way of making sure everyone is still with you and actually understood what you just explained. Thank you for making learning creative, simple and memorable. Happy Teachers’ Day, Ma’am!",
  award: "Theek Hai? — Understanding Confirmation Specialist",
  memory:
    "Ma’am explains something, pauses and says ‘theek hai’ — and suddenly the entire class silently checks whether they actually understood it.",
  studentQuote:
    "Ma’am ka ‘theek hai’ ek question bhi hai, confirmation bhi, aur class ka signature sound bhi.",
  photo: null,
},
{
  id: "teacher-13",
  name: "Mr. Pulkit Srivastava",
  designation: "Assistant Professor & Discipline Coordinator",
  subject: "Marketing",
  message:
    "Sir, there are probably very few people in the university whose name alone can make a student sit up straight and rethink their life choices! As the Discipline Coordinator, your reputation definitely reaches the classroom before you do. But those who have actually interacted with you know there is another side — someone genuinely sweet, understanding and willing to forgive when a mistake deserves a second chance. You know when discipline needs to be firm and when a conversation, a little understanding and a second chance can make a bigger difference. And for CRs and DCs, your support has always been something we can count on. Thank you for showing us that discipline and kindness can go hand in hand. Happy Teachers’ Day, Sir!",
  award: "Naam Sunte Hi Discipline Mode ON Award",
  memory:
    "Sir ka naam sunte hi students serious ho jaate hain, lekin jab actual conversation hoti hai, toh pata chalta hai ki sir action lene se pehle samajhna bhi jaante hain.",
  studentQuote:
    "Pulkit Sir se darna optional hai… respect karna compulsory.",
  photo: null,
},
{
  id: "teacher-14",
  name: "Ms. Shefali Jauri",
  designation: "Assistant Professor",
  subject: "BBA",
  message:
    "Ma’am, anyone who has been lucky enough to attend your classes in first year knows that you don’t just teach a concept — you make sure we actually understand it. Your way of explaining things step by step has made even complicated topics feel much easier. And of course, there is one thing that has always been non-negotiable in your class — handwritten notes! Somehow, every student’s notebook had to look like proper evidence that learning had actually happened. Looking back, we realise those notes weren’t just about completing a notebook; they became something we could genuinely go back to whenever we needed to understand a concept again. Thank you for teaching with patience, clarity and consistency. Happy Teachers’ Day, Ma’am!",
  award: "Handwritten Notes Enforcement & Concept Clarity Award",
  memory:
    "Ma’am ka favourite question shayad ‘Concept samajh aaya?’ ho, lekin uske baad ek aur cheez almost guaranteed thi — ‘Notes complete hain?’",
  studentQuote:
    "First year mein Ma’am se padha hai toh handwritten notes ki importance koi humse behtar nahi jaanta.",
  photo: null,
},
{
  id: "teacher-15",
  name: "Dr. Divya Khanna",
  designation: "Assistant Professor",
  subject: "Human Resource Management",
  message:
    "Ma’am, some teachers don’t need to be loud to make an impression. Your calm nature and sweet way of interacting with students have always created a sense of comfort in the classroom. There is something special about the way you make learning feel peaceful and approachable. Thank you for bringing your warmth, patience and positivity into the classroom and for making students feel comfortable simply by being yourself. Happy Teachers’ Day, Ma’am!",
  award: "Calm & Kind Heart Award",
  memory:
    "Ma’am ki calm presence hi kaafi hoti hai classroom ko thoda more peaceful banaane ke liye.",
  studentQuote:
    "Ma’am proves that you don’t have to be loud to be remembered.",
  photo: null,
},
{
  id: "teacher-16",
  name: "Dr. Abhishek Jain",
  designation: "Assistant Professor",
  subject: "Finance & Income Tax",
  message:
    "Sir, when it comes to Finance, Income Tax and especially the world of stocks and share markets, there’s a reason students know exactly who to approach. Your knowledge goes far beyond the classroom, and somehow, you always have another perspective, another insight or another piece of advice to share. But what truly makes you everyone’s favourite is how approachable you are — whether it’s about academics, research, career or simply something we need advice on, we know we can talk to you. And if research ever gets serious, there is one name students already know — Dr. Abhishek Jain, our very own ‘PhD Scholar Abhishek Sir’! Thank you for always listening, guiding and giving us advice we can genuinely trust. Happy Teachers’ Day, Sir!",
  award: "One-Stop Research, Finance & Life Advice Centre",
  memory:
    "Research ka topic ho, share market ka doubt ho ya life ka confusion — somehow the first thought is always, ‘Abhishek Sir se poochte hain.’",
  studentQuote:
    "Sir se baat karne ke liye topic nahi chahiye — answer aur advice dono mil jaate hain.",
  photo: null,
},
{
  id: "teacher-17",
  name: "Dr. Angrish Agarwal",
  designation: "Assistant Professor",
  subject: "Finance & Accounting",
  message:
    "Sir, your classes have taught us that Finance and Accounting don’t always need pages of theory — sometimes, the numbers speak for themselves. Your practical, numerical-focused way of teaching has made concepts much easier to understand and apply. And when the stock market is open, we know there is another important calculation happening somewhere — whether the portfolio is finally growing or not! Till 3:30 PM, the market may have everyone’s attention, but your classes definitely have ours. Thank you for making numbers practical, concepts clear and Finance a little more interesting. Happy Teachers’ Day, Sir!",
  award: "Portfolio Growth Monitoring Specialist",
  memory:
    "Sir ke liye 3:30 PM tak ek important question hota hai — aaj portfolio green hua ya nahi?",
  studentQuote:
    "Sir theory kam, numericals zyada — aur market khula ho toh portfolio ki tension alag.",
  photo: null,
},
{
  id: "teacher-18",
  name: "Ms. Neha Dev",
  designation: "Assistant Professor",
  subject: "International Business",
  message:
    "Ma’am, it may not have been too long since you joined us, but you’ve already made your own impression. Your attention to detail, perfection in whatever you take up, and ability to come up with ideas that are a little different from the usual make working with you genuinely interesting. At the same time, your friendly nature makes it easy for students to connect with you. But there is one classroom rule we’ve quickly understood — creativity is welcome, conversations are welcome, but unnecessary disturbance? Definitely not! Thank you for bringing fresh ideas, high standards and a warm presence to our department. Happy Teachers’ Day, Ma’am!",
  award: "Perfection Meets Creativity Award",
  memory:
    "Ma’am ke saath kaam mein ek cheez almost guaranteed hai — idea simple ho sakta hai, lekin final result perfect hona chahiye.",
  studentQuote:
    "Ma’am friendly hain, bas classroom mein disturbance ki creativity mat dikhana.",
  photo: null,
},
{
  id: "teacher-19",
  name: "Ms. Divya Tiwari",
  designation: "Assistant Professor",
  subject: "Marketing",
  message:
    "Ma’am, from outside the classroom, you might have a reputation for being the strict one — the teacher who notices when someone steps out, doesn’t hesitate to call us out, and expects us to follow the rules. But the moment you actually sit down and talk to you, there’s a completely different side to discover. You listen to every point patiently, understand what students are trying to say, and are much sweeter than your classroom reputation lets us believe! Thank you for reminding us that being strict when needed and being understanding when it matters can both come from the same person. Happy Teachers’ Day, Ma’am!",
  award: "Strict Outside, Sweet Inside Award",
  memory:
    "Classroom mein Ma’am ko dekhkar lagta hai discussion khatam ho gaya… class ke bahar baat karo toh pata chalta hai Ma’am actually har point patiently sunti hain.",
  studentQuote:
    "Ma’am ko dekhkar pehle discipline yaad aata hai, baat karne ke baad sweetness.",
  photo: null,
},
{
  id: "teacher-20",
  name: "Ms. Anamika Sen",
  designation: "Assistant Professor",
  subject: "Law & Management",
  message:
    "Ma’am, every new teacher brings a new perspective, and we’re excited to discover yours. With your expertise in Law and Management, we look forward to learning how rules, decisions and people come together in the real world of business. As you begin this journey with us, we hope your classes become a place for new ideas, interesting discussions and lessons that stay with us beyond the classroom. Here’s to a wonderful journey ahead and many memories waiting to be made. Happy Teachers’ Day, Ma’am!",
  award: "New Perspective, New Beginnings Award",
  memory:
    "Abhi toh journey shuru hui hai — classes, conversations aur memories ki list abhi banani baaki hai.",
  studentQuote:
    "New faculty, new perspective — let’s see what we learn along the way.",
  photo: null,
},
{
  id: "teacher-21",
  name: "Ms. Sakshi Pandey",
  designation: "Assistant Professor",
  subject: "Finance & Marketing",
  message:
    "Ma’am, your cheerful and jolly nature has a way of making the classroom feel lighter and more welcoming. Whether it’s Finance or Marketing, you always put in that extra effort to make sure the class isn’t just about listening, but actually participating and being part of the conversation. Your constant effort to keep things interactive makes learning feel much more enjoyable. Thank you for bringing so much positivity, energy and warmth into the classroom and for reminding us that a good class is one where students don’t just learn, but genuinely enjoy being there. Happy Teachers’ Day, Ma’am!",
  award: "Happiness & Interaction Catalyst Award",
  memory:
    "Ma’am ki class mein silence zyada der tik nahi sakta — somehow Ma’am conversation start karwa hi deti hain.",
  studentQuote:
    "Ma’am ka mood achha ho toh class ka mood automatically achha ho jaata hai.",
  photo: null,
},
{
  id: "teacher-22",
  name: "Dr. Hitendra Shukla",
  designation: "Associate Professor",
  subject: "Accounting & Finance",
  message:
    "Sir, your way of teaching has always made Accounting and Finance feel much more relaxed than they probably should! You have this incredible ability to remember questions from books as if you’ve seen every question ever written — and whenever you solve one in class, it suddenly becomes everyone’s ‘most important question’ for the exam! Your jolly and casual nature keeps the classroom light, but we’ve also learnt that Sir’s jokes come with a warning — you can be laughing one moment and find yourself completely roasted the next. Thank you for making numbers less intimidating, classes more enjoyable and every lecture a little more memorable. Happy Teachers’ Day, Sir!",
  award: "If Sir Solved It, It’s Coming in the Exam Award",
  memory:
    "Sir casually solves a question in class… and suddenly the entire class is taking a screenshot, because ‘Sir ne karaya hai, exam mein aa sakta hai!’",
  studentQuote:
    "Sir haste hue question solve karte hain aur haste hue hi student ki watt bhi laga dete hain.",
  photo: null,
},
];

export default teachers;
