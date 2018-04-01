#pragma strict

var BoostSpeed = 1;
var maxBoost = 50;



function OnTriggerStay (col : Collider) {
//isBoosting = true;

	if (col.GetComponent.<Rigidbody>().velocity.x < maxBoost)
		{
		col.GetComponent.<Rigidbody>().velocity.x = col.GetComponent.<Rigidbody>().velocity.x + BoostSpeed;	
		}
		else
		{
		col.GetComponent.<Rigidbody>().velocity.x = maxBoost;
		}
}







//static var isBoosting = false;
//var player : Rigidbody;

/*function OnTriggerEnter () 
{
	isBoosting = true;
	Debug.Log("BOOSTING");
}



function OnTriggerExit ()
{
Debug.Log("NOT BOOSTING");
//isBoosting = false;
}
*/



//Debug.Log("Hmm.. OnCollitionSt");	
	//Handle Ball Rotation
	//var rotation : float = Input.GetAxis ("Horizontal") * rotationSpeed;
	//rotation *= Time.deltaTime;
	//GetComponent.<Rigidbody>().AddRelativeTorque (Vector3.back * rotation);
	//GetButtonDown"Jump" anden måde 8:37 i sektion3 //Getkeyup er når man slipper tasten
	//if (Input.GetKeyDown(KeyCode.W) && IsGrounded() )
	
		// GetComponent.<Rigidbody>().velocity.y = BoostHight;
	


//function OnTriggerEnter (colInfo : Collider) {
//		if (colInfo.tag == "Player"){
//		var destructeble : Destructeble = colInfo.GetComponent ("Destructeble") as Destructeble;
//		destructeble.Destruct();
//		
//		}
//	gameMaster.RestartLevel();
//	}
//}