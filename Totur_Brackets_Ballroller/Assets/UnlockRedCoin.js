#pragma strict

var gameMaster : GameMaster;
//var redCoinUnlocked : True;

/*
function Update () 
{
	scoreText.text = "LEVEL SCORE: " + GameMaster.currentScore + " Hiscore: " + PlayerPrefs.GetInt(Application.loadedLevel+"_levelScore" + GameMaster.version);

	if (GameMaster.currentScore > PlayerPrefs.GetInt(Application.loadedLevel+"_levelScore" + GameMaster.version))
		{
		PlayerPrefs.SetInt("RedCoinUnlocked");//Application.loadedLevel+"_levelScore", GameMaster.currentScore);
		}
//		coinValue = PlayerPrefs.GetInt(Application.loadedLevel+"_levelScore");
//	coinValueText.text;
}
*/

function Start (){
    gameMaster.unlockRedCoins();


}
	//Variablen i player prefs hedder: _BETA001_levelScore    (Hvis banen hedder _BETA001)