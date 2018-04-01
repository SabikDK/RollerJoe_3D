#pragma strict

//var normalMusic : AudioSource;
//var castleMusic : AudioSource;
//public var mute: boolean;

function Start() {
}

function Update () {

	if (GameMaster.musicChanged == false){
		Debug.Log("GameMaster.musicChanged = " + GameMaster.musicChanged);
		//yield WaitForSeconds (1);
		if (GameMaster.track == 0){
		GetComponent.<AudioSource>().mute = true;
		Debug.Log("ST No Musika. Error:1NEVR888888");
		} 

		else if (GameMaster.track == 1){
		Debug.Log("ST Track 1");
	 	GetComponent.<AudioSource>().mute = true;
	 	Debug.Log("GameMaster.musicChanged = " + GameMaster.musicChanged);
		}

		else if (GameMaster.track == 2){
		Debug.Log("ST Track 2 - Castle");
	 	GetComponent.<AudioSource>().mute = false;
	 	Debug.Log("GameMaster.musicChanged = " + GameMaster.musicChanged);
		} 

		else {
		Debug.Log("ST Track 3 - No music");
		GetComponent.<AudioSource>().mute = true;
		Debug.Log("GameMaster.musicChanged = " + GameMaster.musicChanged);
		GameMaster.track = 0;
		}
		GameMaster.musicChanged = true;
		Debug.Log("GameMaster.musicChanged = " + GameMaster.musicChanged);
	}



//Test Start
// Mutes-Unmutes the sound from this object each time the user presses space.

		 /*if(Input.GetKeyDown(KeyCode.Space)) {
		 	if(GetComponent.<AudioSource>().mute)
				GetComponent.<AudioSource>().mute = false;
			else
				GetComponent.<AudioSource>().mute = true;
		}
	
	*/

	//Test Slut

	
	//if (Input.GetKeyDown(KeyCode.N)) {
	//	selectTrack.NextTrack();
			//Debug.Log("debugging...HJ: "+Application.loadedLevel);

			//GameMaster.track = GameMaster.track + 1;


			//GetComponent.<Rigidbody>().velocity.y = FlyPower;
			//ReachedPoint = transform.position;
			//transform.position.x = transform.position.x + FlyPower;
			//transform.position.z = transform.position.z + TeleportZ;







	if (Input.GetKeyDown(KeyCode.Space)) {

		//GameMaster.track = GameMaster.track + 1;


		if (GameMaster.track == 0){
		GetComponent.<AudioSource>().mute = true;
		Debug.Log("No Musika. Error:1NEVR888888");
		} 

		else if (GameMaster.track == 1){
		Debug.Log("Track 1 Off");
	 	GetComponent.<AudioSource>().mute = true;
		//GetComponent.<AudioSource>().enabled = false;
		//GetComponent.<AudioSource>().enabled = false;
		}

		else if (GameMaster.track == 2){
		Debug.Log("Track 2 - Castle");
	 	GetComponent.<AudioSource>().mute = false;
		//normalMusic.Mute();
		//castleMusic.Play();
		//normalMusic.Play();
		//GetComponent.<AudioSource>().enabled = true;
		} 

		else {
		Debug.Log("Track 3 - No music");
		GetComponent.<AudioSource>().mute = true;

		GameMaster.track = 0;
		}
	}
} 