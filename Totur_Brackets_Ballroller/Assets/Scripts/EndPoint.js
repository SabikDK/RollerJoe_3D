#pragma strict

var gameMaster : GameMaster;
var levelArray = new Array ();
//var levelName = "Level";


function OnTriggerEnter (colInfo : Collider) 
{
	if (colInfo.tag == "Player")
	{
	// Add one element
//	levelArray.Unshift (levelName);
//	Debug.Log("Element Added To List:" + levelName);

   ///Destroy(colInfo.gameObject);
    //colInfo.isKinematic = false;
    gameMaster.GoalReached();
    yield WaitForSeconds(0.1);
	gameMaster.LoadNextLevel();
	}
}



function Start () {
/* Arrary Deaktiveret

Debug.Log("Press N+M to Show LevelArray");

	levelArray.length = 5;





	// Add one element
	//levelArray.Push (levelName);



	// print the first element ("Hello")
	print(levelArray[0]);




	// Resize the array
	//levelArray.length = 20;

	// Assign "World" to the second element
	levelArray[3] = "World";

	
	// iterate through the array
	//for (var value : String in levelArray) {
	//	print(value);
	//}
}

function Update ()
	{


		if (Input.GetKeyDown(KeyCode.N) && Input.GetKeyDown(KeyCode.M))
		{
		Debug.Log("---------- LIST START (levelArray) ----------");

			// iterate through the array
			for (var value : String in levelArray) {
			print(value);

			}
		Debug.Log("---------- List SLut ----------");
		}
	*/
	}
