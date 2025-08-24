const PastebinAPI = require('pastebin-js');
const pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL');
const { makeid } = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router();
const pino = require('pino');
const {
    default: Mbuvi_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require('@whiskeysockets/baileys');

function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}

router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;

    async function Mbuvi_MD_PAIR_CODE() {
        const { state, saveCreds } = await useMultiFileAuthState('./temp/' + id);
        try {
            let Pair_Code_By_Mbuvi_Tech = Mbuvi_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({ level: 'fatal' }).child({ level: 'fatal' })),
                },
                printQRInTerminal: false,
                logger: pino({ level: 'fatal' }).child({ level: 'fatal' }),
                browser: Browsers.macOS('Chrome')
            });

            if (!Pair_Code_By_Mbuvi_Tech.authState.creds.registered) {
                await delay(1500);
                num = num.replace(/[^0-9]/g, '');
                const code = await Pair_Code_By_Mbuvi_Tech.requestPairingCode(num);
                if (!res.headersSent) {
                    await res.send({ code });
                }
            }

            Pair_Code_By_Mbuvi_Tech.ev.on('creds.update', saveCreds);
            Pair_Code_By_Mbuvi_Tech.ev.on('connection.update', async (s) => {
                const { connection, lastDisconnect } = s;
                if (connection === 'open') {
                    await delay(5000);
                    let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                    await delay(800);
                    let b64data = Buffer.from(data).toString('base64');
                    let session = await Pair_Code_By_Mbuvi_Tech.sendMessage(Pair_Code_By_Mbuvi_Tech.user.id, { text: 'trashcore~' + b64data });

                    let Mbuvi_MD_TEXT = `
╔════════════════════◇
║『 SESSION CONNECTED』
║ ✨ VENOM-XMD 🔷
║ ✨ Gifted Dave 🔷
╚════════════════════╝

---

╔════════════════════◇
║『 YOU'VE CHOSEN VENOM-XMD 』
║ - Set the session ID in Heroku:
║ - SESSION_ID: 
╚════════════════════╝

╔════════════════════◇
║ 『••• VISIT FOR HELP •••』
║ ❍ YouTube: youtube.com/@davlodavlo19
║ ❍ Owner: 254104260236
║ ❍ Repo: https://github.com/giftdee/VENOM-XMD 
║ ❍ WhatsApp Group: https://chat.whatsapp.com/LfTFxkUQ1H7Eg2D0vR3n6g
║ ❍ WhatsApp Channel: https://whatsapp.com/channel/0029VbApvFQ2Jl84lhONkc3k
║ ❍ Instagram: https://www.instagram.com/gifted_dave_
║ ☬ ☬ ☬ ☬
╚═════════════════════╝

𒂀 Enjoy VENOM-XMD

---

Don't Forget To Give Star ⭐ To My Repo
______________________________`;

                                        await Pair_Code_By_Mbuvi_Tech.sendMessage(Pair_Code_By_Mbuvi_Tech.user.id, { text: VENOM-XMD_TEXT }, { quoted: session });

                    await delay(100);
                    await Pair_Code_By_Mbuvi_Tech.ws.close();
                    return await removeFile('./temp/' + id);
                } else if (connection === 'close' && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    Mbuvi_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log('Service restarted');
            await removeFile('./temp/' + id);
            if (!res.headersSent) {
                await res.send({ code: 'Service Currently Unavailable' });
            }
        }
    }

    return await Mbuvi_MD_PAIR_CODE();
});

module.exports = router;
