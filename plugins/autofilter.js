const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const GM = "."

const GN = "."

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

asena.addCommand({pattern: 'joshuva', fromMe: true, deleteCommand: true, desc: GM,}, (async (message, match) => {

    var r_text = new Array ();

    r_text[1] = "πΈ πΊπππ  π·π πΈπ πΌπ’ πΎπ πππ";

    var i = Math.floor(2*Math.random())

    await message.client.sendMessage(

        message.jid,(r_text[i]), MessageType.text);

    }));

asena.addCommand({pattern: 'joshuvaser', fromMe: true, deleteCommand: true, desc: GN,}, (async (message, match) => {

        var r_text = new Array ();

        r_text[1] = "πΈ πΊπππ  π·π πΈπ πΌπ’ π°ππππππππ";

        var i = Math.floor(2*Math.random())

        await message.client.sendMessage(

            message.jid,(r_text[i]), MessageType.text);

        }));    

    }

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'joshuva', fromMe: false, deleteCommand: true, desc: GM,}, (async (message, match) => {

            var r_text = new Array ();

            r_text[1] = "πΈ πΊπππ  π·π πΈπ πΌπ’ π²πππππππ₯°";

            var i = Math.floor(2*Math.random())

            await message.client.sendMessage(

                message.jid,(r_text[i]), MessageType.text);

            }));

        asena.addCommand({pattern: 'joshuvaser', fromMe: false, deleteCommand: true, desc: GN,}, (async (message, match) => {

                var r_text = new Array ();

                r_text[1] = "πΈ πΊπππ  π·π πΈπ πΌπ’ π°ππππππππ";
          
                var i = Math.floor(2*Math.random())

                await message.client.sendMessage(

                    message.jid,(r_text[i]), MessageType.text);

                }));    

                asena.addCommand({pattern: 'joshuvaserbot', fromMe: true, deleteCommand: true,dontAddCommandList: true }, (async (message, match) => {

                    var r_text = new Array ();

                    r_text[1] = "πππ ππππ πΌπ π·ππ  π²ππ πΈ π·πππ πππ";

                    var i = Math.floor(2*Math.random())

                    await message.client.sendMessage(

                        message.jid,(r_text[i]), MessageType.text);

                    }));


}
