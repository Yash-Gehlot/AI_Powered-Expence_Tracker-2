// const { GoogleGenerativeAI } = require("@google/generative-ai");
// require("dotenv").config();

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// async function main() {
//   try {
//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//     const result = await model.generateContent(
//       "Explain how AI works in a few words"
//     );
//     const response = await result.response;
//     console.log(response.text());
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// }

// main();
// const ai = new GoogleGenAI({
//   apiKey: process.env.GEMINI_API_KEY,
// });
// console.log(apiKey);

// const makeCategory = async (prompt) => {
//   try {
//     const res = await ai.models.generateContent({
//       model: "gemini-2.5-flash",
//       contents: `Analyze the following user input and determine which single word best represents its category.

// Choose one from this list if it fits:
// [Fuel, Movie, Food, sports, Other].

// If none of these categories match naturally, create ONE new category word (a single word, properly capitalized, no punctuation) that best fits the context.

// User input: "${prompt}"`,
//     });

//     const category = res.text.toLocaleLowerCase().replace(/\*/g, "");
//     console.log("**************************");
//     console.log("Category:", category);
//     console.log("**************************");

//     return category;
//   } catch (err) {
//     console.error("Error generating category:", err.message);
//     return "Unknown";
//   }
// };

// module.exports = makeCategory;
