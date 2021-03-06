"use strict"

const misc = require('/RP/cMisc');
const player = mp.players.local;
let money;


function showCef(lang, execute) {
	misc.prepareToCef(1);
	misc.openCef("package://RP/Browsers/ATM/atm.html", lang);
	misc.injectCef(execute);
}


mp.events.add(
{
	"cMoneyUpdate" : (value) => {
		money = value;
	},
	
	"render" : () => {
		if (money >= 0 && mp.gui.cursor.visible === false) {

			mp.game.graphics.drawText(`$${misc.prettify(money)}              `, [0.940, 0.025], { 
				font: 7, 
				color: [115, 186, 131, 255], 
				scale: [0.7, 0.7], 
			});
		}
	},

	"cShowATMCef" : (lang, execute) => {
		showCef(lang, execute);
	},

	"cGetCash" : summ => {
		mp.events.callRemote('sGetCash', summ);
	},
	
	"cPutCash" : summ => {
		mp.events.callRemote('sPutCash', summ);
	},

	"cGetTaxMoney" : summ => {
		mp.events.callRemote('sGetTaxMoney', summ);
	},
	
	"cPutTaxMoney" : summ => {
		mp.events.callRemote('sPutTaxMoney', summ);
	},
	
	"cPutTaxMoney" : summ => {
		mp.events.callRemote('sPutTaxMoney', summ);
	},

	"cMoneySendNotification" : message => {
		const maxStringLength = 99;
		mp.game.ui.setNotificationTextEntry("CELL_EMAIL_BCON");
		for (let i = 0, msgLen = message.length; i < msgLen; i += maxStringLength) mp.game.ui.addTextComponentSubstringPlayerName(message.substr(i, Math.min(maxStringLength, message.length - i)));
		mp.game.ui.setNotificationMessage("CHAR_BANK_FLEECA", "CHAR_BANK_FLEECA", false, 2, 'FLEECA BANK', `New message`);
		mp.game.ui.drawNotification(false, true);
    },
	
});

