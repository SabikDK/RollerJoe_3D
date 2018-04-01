#pragma strict

var FlyPower = 10;
var TeleportZ = 5;
var enemyAnim : Animator;
private var cheatString = "";
static var ReachedPoint : Vector3 = Vector3 (-21,9,0);
function OnTriggerEnter (col : Collider)
 
{
	if (col.tag == "Player")
	{


		ReachedPoint = transform.position;

	
	}
}




function Update () 
{
	//Debug Keys
	if (Input.GetButtonDown("Restart"))
	{
		Debug.Log("Restarter...");
		Application.LoadLevel(Application.loadedLevel);
	}



	//HJ






//Hold down RJ
	if (Input.GetKeyDown(KeyCode.R) && Input.GetKeyDown(KeyCode.J))
	{
	var rb = GetComponent.<Rigidbody>();
	rb.mass = 100f;
	//rb.AddForce(Vector3.up * 10f);
	//rb.Position(Vector3(3,3,3));

	Debug.Log("debugging...RJ");
	//PlayerPrefs.DeleteAll();
	}



////Cheat String
if (Input.GetKeyDown(KeyCode.Q))
	{
	if (cheatString == "ANTON")
		{
		Debug.Log("Nice Nok, Anton");
		Application.LoadLevel("_Anton");
		}
	if (cheatString == "NEW")
		{
		Debug.Log("Sletter Alt");
		PlayerPrefs.DeleteAll();
		Application.LoadLevel("_MainMenu");
		}

	if (cheatString == "LARS")
		{
		Debug.Log("Nice Nok, LARS");
		Application.LoadLevel("_Lars");
		}

	if (cheatString == "BADGES")
		{
		Debug.Log("BADGER BADGER");
		Application.LoadLevel("_BadgeMenu");
		}
	if (cheatString == "TOPL")
		{
		Debug.Log("2Player Test");
		Application.LoadLevel("_Together");
		}

	if (cheatString == "REDGLASES")
		{
		Debug.Log("2Player Test");
		Application.LoadLevel("_2plEND");
		}

	if (cheatString == "JOE")
		{
		Debug.Log("Nice Nok, Joe");
		Application.LoadLevel("_Joe");
		}
				
	if (cheatString == "WOOD")
		{
		Debug.Log("The Juerny...");
		Application.LoadLevel("_Wood001");
		}
	if (cheatString == "SLUTPRUTFINALE")
		{
		Debug.Log("TheEnd...");
		Application.LoadLevel("_TheEnd");
		}
	if (cheatString == "BORG")
		{
		Debug.Log("Good Knight");
		Application.LoadLevel("_Castle001");
		}	
	if (cheatString == "MISSIONS")
		{
		Debug.Log("MISS");
		Application.LoadLevel("_Missions");
		}

	if (cheatString == "NXT")
		{
		Debug.Log("Next...");
		Application.LoadLevel(Application.loadedLevel + 1);
		}
	if (cheatString == "THEEND")
		{
		Debug.Log("Slut...");
		Application.LoadLevel("_TheEnd001");
		}

		cheatString = "";
		Debug.Log("Cheat String = " + cheatString);

	}

if (Input.GetKeyDown(KeyCode.A))
	{
		cheatString = cheatString + "A";
		Debug.Log("Cheat String = " + cheatString);	
	}

if (Input.GetKeyDown(KeyCode.B))
	{
		cheatString = cheatString + "B";
		Debug.Log("Cheat String = " + cheatString);	
	}

if (Input.GetKeyDown(KeyCode.D))
	{
		cheatString = cheatString + "D";
		Debug.Log("Cheat String = " + cheatString);
	
	}
if (Input.GetKeyDown(KeyCode.E))
	{
		cheatString = cheatString + "E";
		Debug.Log("Cheat String = " + cheatString);
	}
if (Input.GetKeyDown(KeyCode.F))
	{
		cheatString = cheatString + "F";
		Debug.Log("Cheat String = " + cheatString);
	
	}
if (Input.GetKeyDown(KeyCode.G))
	{
		cheatString = cheatString + "G";
		Debug.Log("Cheat String = " + cheatString);
	
	}
if (Input.GetKeyDown(KeyCode.H))
	{
		cheatString = cheatString + "H";
		Debug.Log("Cheat String = " + cheatString);
	
	}
	if (Input.GetKeyDown(KeyCode.I))
	{
		cheatString = cheatString + "I";
		Debug.Log("Cheat String = " + cheatString);
	
	}
	if (Input.GetKeyDown(KeyCode.J))
	{
		cheatString = cheatString + "J";
		Debug.Log("Cheat String = " + cheatString);
	
	}
if (Input.GetKeyDown(KeyCode.K))
	{
		cheatString = cheatString + "K";
		Debug.Log("Cheat String = " + cheatString);
	
	}

	if (Input.GetKeyDown(KeyCode.L))
	{
		cheatString = cheatString + "L";
		Debug.Log("Cheat String = " + cheatString);
	}

if (Input.GetKeyDown(KeyCode.M))
	{
		cheatString = cheatString + "M";
		Debug.Log("Cheat String = " + cheatString);
	
	}
if (Input.GetKeyDown(KeyCode.N))
	{
		cheatString = cheatString + "N";
		Debug.Log("Cheat String = " + cheatString);
	
	}

if (Input.GetKeyDown(KeyCode.O))
	{
		cheatString = cheatString + "O";
		Debug.Log("Cheat String = " + cheatString);
	
	}

if (Input.GetKeyDown(KeyCode.P))
	{
		cheatString = cheatString + "P";
		Debug.Log("Cheat String = " + cheatString);
	
	}

if (Input.GetKeyDown(KeyCode.R))
	{
		cheatString = cheatString + "R";
		Debug.Log("Cheat String = " + cheatString);
	}

if (Input.GetKeyDown(KeyCode.S))
	{
		cheatString = cheatString + "S";
		Debug.Log("Cheat String = " + cheatString);

	}
if (Input.GetKeyDown(KeyCode.T))
	{
		cheatString = cheatString + "T";
		Debug.Log("Cheat String = " + cheatString);
	
	}if (Input.GetKeyDown(KeyCode.U))
	{
		cheatString = cheatString + "U";
		Debug.Log("Cheat String = " + cheatString);
	
	}

if (Input.GetKeyDown(KeyCode.W))
	{
		cheatString = cheatString + "W";
		Debug.Log("Cheat String = " + cheatString);
	
	}


if (Input.GetKeyDown(KeyCode.X))
	{
		cheatString = cheatString + "X";
		Debug.Log("Cheat String = " + cheatString);
	
	}
}

