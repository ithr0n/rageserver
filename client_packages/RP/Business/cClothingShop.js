"use strict"

const misc = require('/RP/cMisc');
const player = mp.players.local;
let camD;


function showCef(lang, inject) {
	misc.prepareToCef();
	misc.openCef("package://RP/Browsers/Business/ClothingShop/ch.html", lang);
	misc.injectCef(inject);
}


mp.events.add(
{
	"cClothingShopShowMenu" : (lang, inject, camData) => {
		showCef(lang, inject);
		camD = camData;
		misc.createCam(camD.x, camD.y, camD.z, camD.rx, camD.ry, camD.rz, camD.viewangle);
		
	},

	"cClothingShopSetCamera" : (type) => {
		switch (type) {
			case "Hats":
				misc.createCam(camD.x, camD.y, camD.z + 0.7, camD.rx, camD.ry, camD.rz, camD.viewangle - 20);
				break;

			case "Glasses":
				misc.createCam(camD.x, camD.y, camD.z + 0.7, camD.rx, camD.ry, camD.rz, camD.viewangle - 25);
				break;

			case "Tops":
				misc.createCam(camD.x, camD.y, camD.z + 0.4, camD.rx, camD.ry, camD.rz, camD.viewangle - 10);
				break;

			case "Legs":
				misc.createCam(camD.x, camD.y, camD.z - 0.4, camD.rx, camD.ry, camD.rz, camD.viewangle - 10);
				break;

			case "Feet":
				misc.createCam(camD.x, camD.y, camD.z - 0.7, camD.rx, camD.ry, camD.rz, camD.viewangle - 20);
				break;

			default:
				misc.createCam(camD.x, camD.y, camD.z, camD.rx, camD.ry, camD.rz, camD.viewangle);
				break;
		}

	},

	"cClothingShopBuyCloth" : (d) => {
		mp.events.callRemote("sClothingShopBuyCloth", d);
		
	},

	"cClothingShopReloadClothes" : () => {
		mp.events.callRemote("sClothingShopReloadClothes");
		
	},
	

	
});