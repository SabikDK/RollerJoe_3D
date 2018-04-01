#pragma strict

import UnityEngine.UI;

var neededCoinsToUnlock = 5;
var coinsToShow = 1;
var coinsToUnlockText : Text;
var stuffToUnlock = "A Level Pack";


function Start () {
if (PlayerPrefs.GetInt("totalCoinValue" + GameMaster.version) < neededCoinsToUnlock)
	{

// Hvis IKKE der er penge nok
	if (PlayerPrefs.GetInt("totalCoinValue" + GameMaster.version) < coinsToShow)
		{
		Destroy(coinsToUnlockText);
		Destroy(gameObject);
		}
	//Men nok til at vise teksten
		else
		{
		coinsToUnlockText.text = "You need " + neededCoinsToUnlock + " XP to unlock " + stuffToUnlock;
		Destroy(gameObject);
		}
	}

// Hvis der er penge nok:
   else
   	{
//	Debug.Log ("NICE... Hallo Its Unlocked" + PlayerPrefs.GetInt("totalCoinValue"));
	Destroy(coinsToUnlockText);
	}
}