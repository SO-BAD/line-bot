import 'dotenv/config';
import linebot from 'linebot';

const bot = linebot({
    channelId: process.env.CHANNEL_ID,
    channelSecret: process.env.CHANNEL_SECRET,
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
});

bot.on('message',function(event){
    event.reply('event.message.text');
    event.reply(event.message.text);
    // event.reply(event.message.text)
    // .then(function($data){

    // })
    // .catch(function(error){
        
    // })
});
console.log(process.env)
bot.listen('/',process.env.PORT || 3000, ()=>{

})