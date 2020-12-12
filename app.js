const filter = (m) =>
msg.author.id === m.author.id && m.channel.id === msg.channel.id;
const collector = msg.channel.createMessageCollector(filter, {
max: 1,
time: 120000,
errors: ["time"],
});