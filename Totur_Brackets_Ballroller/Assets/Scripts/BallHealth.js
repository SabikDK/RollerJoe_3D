#pragma strict
//Note to self: on TriggerEnter // Transform.position.y
var maxFallDistance = -10;

var gameMaster : GameMaster;
 
function Update () 
{
	if (transform.position.y <= maxFallDistance)
	{
		if (GameMaster.isRestarting == false)
		{
			if (GameMaster != null){
			gameMaster.RestartLevel();	
			}
		}
	}
}



