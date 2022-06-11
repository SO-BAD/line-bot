import 'dotenv/config';
import linebot from 'linebot';


const bot = linebot({
    channelId: process.env.CHANNEL_ID,
    channelSecret: process.env.CHANNEL_SECRET,
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

bot.on('message',(event)=>{
    event.reply(event.message.text);
});

bot.listen('/',process.env.PORT || 3000, ()=>{
    console.log('das');
})