#pragma strict

import UnityEngine.UI;

var scoreText : Text;
var coinValueText : Text;
var coinValueTextRed : Text;
//var coinValue = 0;

function Update () 
{
	scoreText.text = "LEVEL SCORE: " + GameMaster.currentScore + " Hiscore: " + PlayerPrefs.GetInt(Application.loadedLevel+"_levelScore" + GameMaster.version);

	if (GameMaster.currentScore > PlayerPrefs.GetInt(Application.loadedLevel+"_levelScore" + GameMaster.version))
		{
		PlayerPrefs.SetInt(Application.loadedLevel+"_levelScore" + GameMaster.version,GameMaster.currentScore);//Application.loadedLevel+"_levelScore", GameMaster.currentScore);
		}
//		coinValue = PlayerPrefs.GetInt(Application.loadedLevel+"_levelScore");
//	coinValueText.text;
}

function Start (){

Debug.Log("RJ1.0.0Build2 - (GameMaster Version:" + GameMaster.version + ")");
}

	//Variablen i player prefs hedder: _BETA001_levelScore    (Hvis banen hedder _BETA001)