#pragma strict

import UnityEngine.UI;

var scoreText : Text;
var hiScoreText : Text;


function Start () 
{
	if (GameMaster.finalScore > PlayerPrefs.GetInt("hiScore"))
	{
	PlayerPrefs.SetInt("hiScore",GameMaster.finalScore);
	}

  scoreText.text = "TOTAL SCORE: " + GameMaster.finalScore;
hiScoreText.text =   "HIGHSCORE: " + PlayerPrefs.GetInt("hiScore");
//scoreText.text = "TOTAL SCORE: " + GameMaster.finalScore + "Hiscore: "+ hiScore;
}

//function Update () {
//	if (hiScore < GameMaster.finalScore) {
//	hiScore = GameMaster.finalScore;
//	}
//}