#pragma strict

var deathParticles : Transform;
var explotion : Transform;
var fuseTime = 10;
var enemyAnim : Animator;
var fuseAnim : Animator;

function OnTriggerEnter (info : Collider)
{
	if (info.tag == "Player")
		{
		fuseAnim.SetTrigger ("Ignite");
		enemyAnim.SetTrigger ("Activate");

		yield WaitForSeconds (fuseTime);
		enemyAnim.SetTrigger ("Fast");
		Instantiate (deathParticles, enemyAnim.transform.position, enemyAnim.transform.rotation);

		yield WaitForSeconds (3);
		Instantiate (explotion, enemyAnim.transform.position, enemyAnim.transform.rotation);
		Destroy (gameObject);
		}

	if (info.tag == "Explotion")
		{
		fuseAnim.SetTrigger ("Ignite");
		enemyAnim.SetTrigger ("Activate");

		yield WaitForSeconds (fuseTime);
		enemyAnim.SetTrigger ("Fast");
		Instantiate (deathParticles, enemyAnim.transform.position, enemyAnim.transform.rotation);

		yield WaitForSeconds (3);
		Instantiate (explotion, enemyAnim.transform.position, enemyAnim.transform.rotation);
		Destroy (gameObject);
		}

	//if (info.tag == "Explotion")
	//	{
	//	Debug.Log("EX_IGNITE_Bomb");
	//
	//	enemyAnim.SetTrigger ("Fast");
	//	fuseAnim.SetTrigger ("Fuse_Fast");
	//	yield WaitForSeconds (1);
	//	Instantiate (explotion, enemyAnim.transform.position, enemyAnim.transform.rotation);
	//	Destroy (gameObject);
	//	}
}
		//