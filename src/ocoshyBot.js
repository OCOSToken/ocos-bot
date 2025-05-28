const { fetchComments, generateReply, postReply, likeComment } = require("./utils/socialFunctions");
const config = require("../config/ocoshy.json");

async function handlePlatform(platform) {
  const comments = await fetchComments(platform);
  for (let comment of comments) {
    const reply = await generateReply(comment);
    await postReply(platform, comment.id, reply);
    await likeComment(platform, comment.id);
  }
}

async function runOcoshy() {
  for (let platform of config.platforms) {
    await handlePlatform(platform);
  }
}

module.exports = { runOcoshy };
