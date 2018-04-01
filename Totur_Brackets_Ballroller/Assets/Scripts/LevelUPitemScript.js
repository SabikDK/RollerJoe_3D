#pragma strict

var show_at_mission = 0;
static var activeMission:int;




function Start () {
Debug.Log("activeMission: " + activeMission);
Debug.Log("show_at_mission: " + show_at_mission);


if (activeMission != show_at_mission) 
	{
	Destroy(gameObject);
	} 


}

function Update () {


}


function OnTriggerEnter (info : Collider)
{
	if (info.tag == "Player")
	{

	activeMission = activeMission + 1;
	Destroy(gameObject);//"Game object" er den som dette script sidder på
	
	}
}




//Destroy(effect.gameObject, 3);

	//GameMaster.currentScore += coinValue;
	
	//var effect = Instantiate(coinEffect, transform.position, transform.rotation);