#pragma strict

import UnityEngine.UI;

////////////////////
	static var suporter = false;
////////////////////
	static var version = "Beta 1.0.3";
////////////////////

	static var track = 1;
	static var totalCoinAmount = 0;
	static var CoOpOffset = -60;
	static var castleOffset = -40;
	static var woodOffset = -20;
	static var currentScore : int = 0;
	static var finalScore : int = 0;
	static var isRestarting = false;
	static var musicChanged = false;
	static var musicChanged2 = false;

	var LevelToLoad = "_next";
	var player : Transform;
            static var hiscore : int = 0;       var test = 0; 
	var musicPrefab : Transform;
	var musicPrefabCastle : Transform;

	var GameOverSound : AudioClip;


//Timer Variabler:
	static var showTimer = true;
	var timerToShow : Text;
	var bestTimeText : Text;	
	static var time : float = 0;
	private var timerStartet = false;
	private var levelCompleted = false;
	var bestTime = 999999999;
	var leveltype = "Toturial";
	// var itemToStopTimer : Transform;

function Start (){

    //selectMusic.ChangeTrack();

if (PlayerPrefs.GetInt(Application.loadedLevel + "_LevelTime" + version) == 0)
	{
	PlayerPrefs.SetInt(Application.loadedLevel + "_LevelTime" + version,9999999);
	}
bestTimeText.text = "Best: " + PlayerPrefs.GetInt(Application.loadedLevel + "_LevelTime" + version);

	currentScore = 0;




//var leveltype = "NOT_Castle";

		if (!GameObject.FindGameObjectWithTag("MM")) 
		{
			var mManager = Instantiate (musicPrefab, transform.position, Quaternion.identity);
			mManager.name = musicPrefab.name;
			DontDestroyOnLoad (mManager);
		}
/*
if (track == 0)
	{
		if (!GameObject.FindGameObjectWithTag("MM")) 
		{
			var mManagerCastle = Instantiate (musicPrefabCastle, transform.position, Quaternion.identity);
			mManagerCastle.name = musicPrefabCastle.name;
			DontDestroyOnLoad (mManagerCastle);
		} 
	} else 
	{


	}
	*/
}

function unlockRedCoins (){
	PlayerPrefs.SetInt ("redCoinsUnlocked_"+version, 1);
	Debug.Log("redCoinsUnlocked er sat til: "+ PlayerPrefs.GetInt ("redCoinsUnlocked_"+version));
}


function RestartLevel () {
	isRestarting = true;
	GetComponent.<AudioSource>().pitch = 1;
	GetComponent.<AudioSource>().clip = GameOverSound;
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds (GetComponent.<AudioSource>().clip.length);   //Application.LoadLevel("Level01"); //Debug.Log ("Teleport Player");
	
	//player.position = CheckPoint.ReachedPoint;     //Checkpoints er slettet
	Application.LoadLevel (Application.loadedLevel);	//og erstattet med en restart level

	var destructeble : Destructeble = player.GetComponent ("Destructeble") as Destructeble;
		destructeble.DeDestruct();
		
	isRestarting = false;
}

function LoadNextLevel()
{
	finalScore += currentScore;
	if (LevelToLoad == "_next")
	{
	Application.LoadLevel (Application.loadedLevel + 1);
	}
	else
	{
	Application.LoadLevel (LevelToLoad);
	}
};






//Timer Stuff Start:
function OnTriggerExit()
	{
//	Debug.Log("Start Timer");
	if (levelCompleted == false)
		{
		if (timerStartet == false)
			{
			time = 0;
			}
		timerStartet = true;
		}
	}

/*
function GoalReached()
	{
	Debug.Log("    MåletERnået: " + time);
	Debug.Log("Old Best Time  : " + bestTime);
	levelCompleted = true;
	if (time < bestTime)
		{
		bestTime = time;
		Debug.Log("New Best Time  : " + bestTime);
		bestTimeText.text = "Best: " + bestTime;
		}

	}
*/


function GoalReached()
	{
	Debug.Log("    MåletERnået: " + time);
	Debug.Log("Old Best Time  : " + bestTime);
	levelCompleted = true;

	if (time < PlayerPrefs.GetInt(Application.loadedLevel + "_LevelTime"+ version))
		{
		PlayerPrefs.SetInt(Application.loadedLevel+"_LevelTime"+ version,time);
		//bestTime = time;
		Debug.Log("New Best Prefs Time  : " + PlayerPrefs.GetInt(Application.loadedLevel + "_LevelTime"+ version));
		bestTimeText.text = "Best: " + PlayerPrefs.GetInt(Application.loadedLevel + "_LevelTime"+ version);
		}

	}
	//Fix så beste tid bliver gemt i player prefs !!!!!!!!!!!

	//PlayerPrefs.GetInt(Application.loadedLevel + "_LevelTime");
	//PlayerPrefs.SetInt(Application.loadedLevel+"_LevelTime",time);

function Update () {   
if (timerStartet == true && levelCompleted == false)
	{
	time = time + 1;
	var showTime:float = time/100;
	timerToShow.text = "Timer: " + showTime;
	}
	else
	{
		if (showTimer == false)
		{
		Destroy(timerToShow);
		}
	}

//Timer Stuff End

if (hiscore < currentScore) 
	{
	hiscore = currentScore;
	}

if (Input.GetButtonDown("Esc"))
	{
		Debug.Log("mainMenu...");
		Application.LoadLevel("_MainMenu");
	}

}