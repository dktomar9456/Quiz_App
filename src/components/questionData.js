const problems = [
  [
    {
      id: 0,
      question: "Where is Taj Mahal Located?",
      choices: ["Mumbai", "Agra", "New Delhi", "None of these"],
      correct: 2,
      desc: "Common Fact",
    },
    {
      id: 1,
      question: "Who won the IPL title 4 times?",
      choices: [
        "Mumbai Indians",
        "Chennai Super Kings",
        "Sunrisers Hyderabad",
        "Kolkata Knight Riders",
      ],
      correct: 1,
      desc: "Mumbai Indians won IPL in 2013,2015,2017 and 2019.",
    },
    {
      id: 2,
      question: "Where is statue of Ahinsa located?",
      choices: ["Mysooree", "Patna", "Nashik", "Thiruvananthapuram"],
      correct: 3,
      desc: "The Statue of Ahimsa (121 feet tall), depicts the first Jain Tirthankara, Rishabhanatha, is located at Mangi-Tungi, near Nashik in the Indian state of Maharashtra.",
    },
    {
      id: 3,
      question: "Which of the following is called 'City of Lakes' ?",
      choices: ["New Delhi", "Mount Abu", "Nainital", "Udaipur"],
      correct: 4,
      desc: "Set around a series of artificial lakes, Udaipur is also known for its lavish royal residences",
    },
    {
      id: 4,
      question: "Which is the first smart city in world?",
      choices: ["New Jersey", "Seoul", "Vatican City", "California"],
      correct: 2,
      desc: "Seoul has been immersed in smart technology for years, having been named the world's first smart city back in 2014.",
    },
  ],
  [
    {
      id: 0,
      question:
        "Which of the following functions treats its arguement string as if it had actually been coded at that point in the program?",
      choices: ["bind()", "apply()", "eval()", "with()"],
      correct: 3,
      desc: "eval() is a function used to cheat lexical scope. For eg. eval('var a=2')",
      image: "None",
    },
    {
      id: 1,
      question:
        "What would be the output of following code?<br><samp>console.log(Number([]))</samp>",
      choices: ["NaN", "0", "'0'", "'NaN'"],
      correct: 2,
      desc: "Common Fact",
      image: "None",
    },
    {
      id: 2,
      question: "Which of the following is not an <em>ES6</em> feature ?",
      choices: [
        "let statement",
        "Promises",
        "arrow functions",
        "Strict Equality(===)",
      ],
      correct: 4,
      desc: "The Strict Equality feature was also in the older versions of Javascript. However, other features had been introduced in ES6 (2015) .",
      image: "None",
    },
    {
      id: 3,
      question:
        "What is the output of below given code snippet? <br><samp>var obj={a:42,b:'hello'};<br>var b='a'; <br>console.log(obj[b]+obj.b);</samp><br>",
      choices: ["42hello", "hello42", "84", "hellohello"],
      correct: 1,
      desc: "When[] is used to access property, the property name should be in double quotes or single quotes. Also, when '+' is used with a string, it is used as 'concatenation operator'",
      image: "None",
    },
    {
      id: 4,
      question: "Which of the following brands invented 'JavaScript'?",
      choices: ["Mozilla", "Netscape", "Opera", "Google"],
      correct: 2,
      desc: "Netscape is a brand name associated with the development of the Netscape web browser. It created the JavaScript programming language, the most widely used language for client-side scripting of web pages, to be used in its Netscape browser, at first.",
      image: "./images/browser.jpg",
    },
  ],
];
export default problems;
