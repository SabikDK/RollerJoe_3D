#pragma strict

import UnityEngine.UI;

var scoreText : Text;
var offSet = 0;
var packName = "Tutorial";
var musicPrefab : Transform;
var musicPrefabCastle : Transform;

function Start () 
{
	if (packName == "Castle")
		{


		GameMaster.track = 2;
		offSet = GameMaster.castleOffset;
		Debug.Log("Pack Name is Castle og track er nu: " + GameMaster.track);
		}

	if (packName == "The Journey")
		{
		GameMaster.track = 1;
		offSet = GameMaster.woodOffset;
		}

	if (packName == "CoOp")
		{
		GameMaster.track = 1;
		offSet = GameMaster.CoOpOffset;
		}

		var adjustedNr = Application.loadedLevel + offSet;
		scoreText.text = "" + packName + " #" + adjustedNr;




	var leveltype = "Castle";

	/*
	if (packName == ("Castle"))
		{
			Debug.Log("YepDet Er en CastleBane");
			if (!GameObject.FindGameObjectWithTag("MMCastle")) 
				{
					Debug.Log("castleMusikStartes");
					var mManagerCastle = Instantiate (musicPrefabCastle, transform.position, Quaternion.identity);
					mManagerCastle.name = musicPrefabCastle.name;
					DontDestroyOnLoad (mManagerCastle);

					if (GameObject.FindGameObjectWithTag("MM")) 
						{
							//var mManager = Instantiate (musicPrefab, transform.position, Quaternion.identity);
							//mManager.name = musicPrefab.name;
							Destroy((FindGameObjectWithTag("MM");
						}


				} 
		} 	else 
		{
		Debug.Log("Nope Not aCastle level");
			if (!GameObject.FindGameObjectWithTag("MM")) 
				{
					var mManager = Instantiate (musicPrefab, transform.position, Quaternion.identity);
					mManager.name = musicPrefab.name;
					DontDestroyOnLoad (mManager);
				}
		}
		*/
}