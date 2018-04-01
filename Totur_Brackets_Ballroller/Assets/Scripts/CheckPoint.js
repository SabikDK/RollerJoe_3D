#pragma strict
var enemyAnim : Animator;
static var ReachedPoint : Vector3 = Vector3 (-50,9,0);
function OnTriggerStay (col : Collider) 
{
	if (col.tag == "Player")
	{
		if (transform.position.x > ReachedPoint.x)
		{
		ReachedPoint = transform.position;
		}
	
	}
}

function Update () {

}