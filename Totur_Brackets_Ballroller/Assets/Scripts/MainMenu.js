#pragma strict

var music : AudioSource;
var musicPrefab : Transform;

function QuitGame () {
	Application.Quit ();
	Debug.Log ("Game is Exiting...");
}
 
function StartGame (level : String) {
	Application.LoadLevel(level); //Application.LoadLevel(level);
}
/*
function SetGameVolume (vol : float){

	music.volume = vol;

Debug.Log("Music Vol: " + music.volume);
}

function Start (){

	if (!GameObject.FindGameObjectWithTag("MM")) {
		var mManager = Instantiate (musicPrefab, transform.position, Quaternion.identity);
		mManager.name = musicPrefab.name;
		DontDestroyOnLoad (mManager);
	}
    */
}