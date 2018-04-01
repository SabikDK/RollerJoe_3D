#pragma strict

	var gameMaster : GameMaster;
	var isSafe = false;

function Start () 
{
		yield WaitForSeconds (5);
//		Debug.Log("Explotion gone...");
		Destroy (gameObject);
}


function OnTriggerEnter (info : Collider)
{
//	Debug.Log("The bomb is killing somthing...");

	if (info.tag == "Player")
	{
		if (isSafe == false)
		{
		 Application.LoadLevel(Application.loadedLevel);
				//	if (GameMaster.isRestarting == false) 
			//{
			//	var destructeble : Destructeble = info.GetComponent ("Destructeble") as Destructeble;
			//	destructeble.Destruct();
			//}
		//gameMaster.RestartLevel();
		//Debug.Log("...and it's the player");
		}
	}	
   else if (info.tag == "Destructeble")
	{
	Debug.Log("...and it's DESTRUCTEBLE");
	Destroy (info.gameObject);
	}
   else
	{
//	Debug.Log("...and it's NOT the player or a Destructeble");
	}
}