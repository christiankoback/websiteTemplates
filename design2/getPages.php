<?php
header('Content-type: application/json');
require 'headerFooter.php';

$navTabs= array("home","services","quote","about");

if ( htmlspecialchars( $_GET["page"]) === "Projects"){
	//get  list of project images
	$projectImageArr = array(
		'project1Image' => (array("imageName" => "","alt" => "Escape Room V1")),
		'project2Image' => (array("imageName" => "","alt" => "")),
		'project3Image' => (array("imageName" => "","alt" => ""))
	);

	// get list of completed projects & urls
	$completedProjectArr = array(
		'project1' => (array("name" => "GenesisNPC","url" => "https://kobackproducts.ca/genesisnpc/")),
		'project2' => (array("name" => "EscapeRoom-Regina","url" => "")),
		'project3' => (array("name" => "Youtube - Editor Overlay","url" => "https://www.kobackproducts.ca/editoroverlay/login.php"))
	);
	
	//get list of in development projects
	$incompleteProjectArr = array(
		'project1Name' => 'Unity Game',
		'project2Name' => 'EscapeRoomV2'
	);
	
	
	$finalProjectArr = array_merge($projectImageArr, $completedProjectArr, $incompleteProjectArr);
	echo json_encode($finalProjectArr );
}else if (  htmlspecialchars( $_GET["page"]) === "Home"){
	$finalProjectArr = array( 'status' => '200');
	echo json_encode($finalProjectArr );
}else{
	$finalProjectArr = array( 'status' => '200');
	echo json_encode($finalProjectArr );
	
	
}







?>