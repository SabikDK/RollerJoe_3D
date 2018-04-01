#pragma strict

var gameMaster : GameMaster;


function OnTriggerEnter (colInfo : Collider) {
	if (GameMaster.isRestarting == false) {
		if (colInfo.tag == "Player"){
		var destructeble : Destructeble = colInfo.GetComponent ("Destructeble") as Destructeble;
		destructeble.Destruct();
		gameMaster.RestartLevel();
		}
	
	}
}