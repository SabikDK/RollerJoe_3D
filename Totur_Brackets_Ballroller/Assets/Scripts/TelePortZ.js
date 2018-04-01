#pragma strict

var distance = 5;

function OnTriggerEnter (col : Collider) 
{	

	if (col.tag != "TheWheel")
	{
	col.transform.position.z = col.transform.position.z + distance;
	}
}

//if (info.tag == "Player")