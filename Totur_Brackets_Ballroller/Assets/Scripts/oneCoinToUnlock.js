#pragma strict

import UnityEngine.UI;

private var neededCoinsToUnlock = 1;
private var coinsToShow = 1;
//private var coinsToUnlockText : Text;
private var stuffToUnlock = "A Level Pack";
var levelToComplete = "1";


function Start () {
if (PlayerPrefs.GetInt(levelToComplete + "_levelScore" + GameMaster.version) < neededCoinsToUnlock)
	{
	Destroy(gameObject);
		/* Hvis IKKE der er penge nok
		if (PlayerPrefs.GetInt("totalCoinValue") < coinsToShow)
		{
		//Destroy(coinsToUnlockText);
		Destroy(gameObject);
		}
		//Men nok til at vise teksten
		else
		{
		//coinsToUnlockText.text = "You need " + neededCoinsToUnlock + " coins on "+levelToComplete+" to unlock " + stuffToUnlock;
		Destroy(gameObject);
		}*/
	}

	// Hvis der er penge nok:
   else
   	{
	//	Debug.Log ("NICE... Hallo Its Unlocked" + PlayerPrefs.GetInt("totalCoinValue"));
	//Destroy(coinsToUnlockText);
	}
}

//Application.loadedLevel

//if (PlayerPrefs.GetInt("totalCoinValue") < neededCoinsToUnlock)