#pragma strict

var music : AudioSource;
var waitTime = 5;
var LevelToLoad = "_MainMenu";

function QuitGame () {
	Application.Quit ();
	Debug.Log ("Game is Exiting...");
}

function StartGame (level : String) {
	Application.LoadLevel(level);
}

function SetGameVolume (vol : float){
	music.volume = vol;

}
function Start (){
Debug.Log("Waiting... "+ waitTime +"sec");
yield WaitForSeconds (waitTime);
Application.LoadLevel(LevelToLoad);
	
	
}