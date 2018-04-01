#pragma strict

//var normalMusic : AudioSource;
//var castleMusic : AudioSource;
//public var mute: boolean;

function Update() {

//yield WaitForSeconds (1);


	if (GameMaster.musicChanged2 == false){
		if (GameMaster.track == 0){
		Debug.Log("Error:1NEVR1174");
		GetComponent.<AudioSource>().mute = true;
		} 

		else if (GameMaster.track == 1){
		Debug.Log("Track 1 - Toturial on");
	 	GetComponent.<AudioSource>().mute = false;
		//GetComponent.<AudioSource>().enabled = false;
		//GetComponent.<AudioSource>().enabled = false;
		}

		else if (GameMaster.track == 2){
		Debug.Log("Track 2 - Castle");
	 	GetComponent.<AudioSource>().mute = true;
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
	GameMaster.musicChanged2 = true;
	}
}

//function Update () {


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








//} 