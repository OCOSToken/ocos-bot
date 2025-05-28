const OpenAI = require("openai-api");
const openai = new OpenAI(process.env.OPENAI_API_KEY);

async function fetchComments(platform) {
  return [
    { id: "c1", text: "OCOS nə üçündür?" },
    { id: "c2", text: "NFT-ləriniz nə zaman çıxacaq?" }
  ];
}

async function generateReply(comment) {
  const gptResponse = await openai.complete({
    engine: "gpt-4",
    prompt: `İstifadəçi yazdı: ${comment.text}\nOna insan kimi, brendi qoruyaraq necə cavab verərsən?`,
    maxTokens: 60,
    temperature: 0.7
  });
  return gptResponse.data.choices[0].text.trim();
}

async function postReply(platform, commentId, replyText) {
  console.log(`Replying to ${commentId} on ${platform}: ${replyText}`);
}

async function likeComment(platform, commentId) {
  console.log(`Liked comment ${commentId} on ${platform}`);
}

module.exports = { fetchComments, generateReply, postReply, likeComment };
