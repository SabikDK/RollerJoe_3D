#pragma strict

public static var seed: int;
var randomTextArray:String[];
var textBlock : Text;


function Start () 
	{

	textBlock.text = "Startet...";
	Debug.Log("Startet...");
		//Random.seed = 999;
		var theHit = Random.Range(0,randomTextArray.Length);
		textBlock.text = "Random Note: "+randomTextArray[theHit];


		/*
		if (theHit == 0)
		{
		Debug.Log("Hej1");

		}
		else if (theHit == 1)
		{
		Debug.Log("Hej2");
		}
		else if (theHit == 2)
		{
		Debug.Log("Hej3");
		}
		*/
		

	}


			//GetComponent.<AudioSource>().pitch = Random.Range(0.9,1.1);
		//GetComponent.<AudioSource>().Play();
			



	//Handle Ball Rotation

	//if (IsGrounded () ) 
	//	{
	//	var rotation : float = Input.GetAxis ("Horizontal") * rotationSpeed;
	//	rotation *= Time.deltaTime;
	//	GetComponent.<Rigidbody>().AddRelativeTorque (Vector3.back * rotation);
	//	}

	//GetButtonDown"Jump" anden måde 8:37 i sektion3 //Getkeyup er når man slipper tasten
	//if (Input.GetKeyDown(KeyCode.W) && IsGrounded() )