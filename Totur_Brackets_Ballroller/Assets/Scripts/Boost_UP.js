#pragma strict

var BoostHight = 10;
//var player : Rigidbody;

function OnTriggerEnter () 
{
	Debug.Log("Collider");
	
}


//function OnTriggerEnter (col : Collider) 
//{
//	if (col.tag == "Player")
//	{
//		ReachedPoint = transform.position;
//	}
//}
function OnTriggerStay (col : Collider) {

col.GetComponent.<Rigidbody>().velocity.y = BoostHight;	
//Debug.Log("Hmm.. OnCollitionSt");	
	//Handle Ball Rotation
	//var rotation : float = Input.GetAxis ("Horizontal") * rotationSpeed;
	//rotation *= Time.deltaTime;
	//GetComponent.<Rigidbody>().AddRelativeTorque (Vector3.back * rotation);
	//GetButtonDown"Jump" anden måde 8:37 i sektion3 //Getkeyup er når man slipper tasten
	//if (Input.GetKeyDown(KeyCode.W) && IsGrounded() )
	
		// GetComponent.<Rigidbody>().velocity.y = BoostHight;
	
}

//function OnTriggerEnter (colInfo : Collider) {
//		if (colInfo.tag == "Player"){
//		var destructeble : Destructeble = colInfo.GetComponent ("Destructeble") as Destructeble;
//		destructeble.Destruct();
//		
//		}
//	gameMaster.RestartLevel();
//	}
//}