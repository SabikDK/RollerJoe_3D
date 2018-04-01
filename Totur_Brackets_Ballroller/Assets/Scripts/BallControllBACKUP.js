﻿#pragma strict
var rotationSpeed = 100;
var jumpHeight = 8; // Negativ vil give modsatte retning
var Hit01 : AudioClip;
var Hit02 : AudioClip;
var Hit03 : AudioClip;
private var isFalling = false; //static er en global tybe


var distToGround : float; 

function Start ()
	{
	// Getting the distence from the center to the ground
	distToGround = GetComponent.<Collider>().bounds.extents.y;		
	}
	
function Update () {
	//Handle Ball Rotation
	var rotation : float = Input.GetAxis ("Horizontal") * rotationSpeed;
	rotation *= Time.deltaTime;
	GetComponent.<Rigidbody>().AddRelativeTorque (Vector3.back * rotation);
	//GetButtonDown"Jump" anden måde 8:37 i sektion3 //Getkeyup er når man slipper tasten
	//if (Input.GetKeyDown(KeyCode.W) && IsGrounded() )
	if (Input.GetButtonDown("Jump") && IsGrounded() )
	{
		GetComponent.<Rigidbody>().velocity.y = jumpHeight;
	}
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