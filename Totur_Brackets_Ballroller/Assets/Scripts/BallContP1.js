#pragma strict
	var rotationSpeed = 100;
	var jumpHeight = 8; // Negativ vil give modsatte retning
	var Hit01 : AudioClip;
	var Hit02 : AudioClip;
	var Hit03 : AudioClip;
	var playerType = 0; //0 = Singelplayer 1 = MultiplayerPlayer1  2=MultiplayerPlayer2

//Grounden Speed
	var acceleration = 0.5;
	var maxSpeed = 25;
	var minSpeed = -25; //Left Speed

//Air Speed
	var airAcceleration = 0.3;
	var maxAirSpeed = 25;
	var minAirSpeed = -25; //left speed

//var airSpeed = 5;

private var isFalling = false; //static er en global type
var distToGround : float; 


function Start ()
	{
	// Getting the distence from the center to the ground
	distToGround = GetComponent.<Collider>().bounds.extents.y;		
	}
	
function Update () {

//2D Jump
   if ((playerType == 0) && Input.GetButtonDown("2DJump_P1") && IsGrounded() )
	{
		GetComponent.<Rigidbody>().velocity.y = jumpHeight;
	}

//Acceleration Controle
	//Ground
	if (Input.GetButton("Horizontal_P1") && (GetComponent.<Rigidbody>().velocity.x < maxSpeed) && (GetComponent.<Rigidbody>().velocity.x > minSpeed) && IsGrounded()) 
		{
//		Debug.Log("Accelerating on ground...");
		GetComponent.<Rigidbody>().velocity.x = GetComponent.<Rigidbody>().velocity.x + (acceleration * Input.GetAxis ("Horizontal_P1"));
		}
	//Air
	else if (Input.GetButton("Horizontal_P1") && (GetComponent.<Rigidbody>().velocity.x < maxAirSpeed) && (GetComponent.<Rigidbody>().velocity.x > minAirSpeed))
		{
//		Debug.Log("Accelerating in Air...");
		GetComponent.<Rigidbody>().velocity.x = GetComponent.<Rigidbody>().velocity.x + (airAcceleration * Input.GetAxis ("Horizontal_P1"));
		}


    /*if (Input.GetButton("Horizontal") && IsGrounded()) //&& isBoosting = false )
	{
		Debug.Log("Er jordet og knappen er nede");
		GetComponent.<Rigidbody>().velocity.x = speed * Input.GetAxis ("Horizontal");
	}
	else if (Input.GetButton("Horizontal"))// && (isBoosting))
	{
		//Debug.Log("Er i luften og knappen er nede");
		GetComponent.<Rigidbody>().velocity.x = GetComponent.<Rigidbody>().velocity.x + (acceleration * Input.GetAxis ("Horizontal"));
	}
	*/
}

function IsGrounded () :boolean { // Check if we are on the ground return true if we are
	return Physics.Raycast(transform.position, -Vector3.up, distToGround + 0.1);

}	
	
function OnCollisionEnter () 
	{
		var theHit = Random.Range(0,3);
		if (theHit == 0)
		{
		GetComponent.<AudioSource>().clip = Hit01;
		}
		else if (theHit == 1)
		{
		GetComponent.<AudioSource>().clip = Hit02; // 25:16 Episode 11
		}
		else if (theHit == 2)
		{
		GetComponent.<AudioSource>().clip = Hit03;
		}
		
		GetComponent.<AudioSource>().pitch = Random.Range(0.9,1.1);
		GetComponent.<AudioSource>().Play();
			
	}



	//Handle Ball Rotation

	//if (IsGrounded () ) 
	//	{
	//	var rotation : float = Input.GetAxis ("Horizontal") * rotationSpeed;
	//	rotation *= Time.deltaTime;
	//	GetComponent.<Rigidbody>().AddRelativeTorque (Vector3.back * rotation);
	//	}

	//GetButtonDown"Jump" anden måde 8:37 i sektion3 //Getkeyup er når man slipper tasten
	//if (Input.GetKeyDown(KeyCode.W) && IsGrounded() )