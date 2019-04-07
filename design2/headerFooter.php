<?php

function createHeader($documentTitle, $headerID)
{	
	$navTabs= array("home","services","quote","about");
	
	$navMenuFinal = "";
	for($navMenuIndex = 0; $navMenuIndex < count($navTabs); $navMenuIndex++){
		$navMenuFinal .= '<li id="'. $navTabs[$navMenuIndex] .'tab"><a  id="'. $navTabs[$navMenuIndex] .'">'. ucfirst($navTabs[$navMenuIndex]) . '</a></li>';
	}
	
	$navMenu = '<nav id="headerMenu"><ul id="topTabs">'. $navMenuFinal .'</ul></nav>' ;
	$headerInfo = '<header id="' . $headerID . '">
	<div id="mainHeader"><a id="logo" href="https://www.kobackproducts.ca/treeCutting/"></a></div><div id="navMenu"' . $navMenu . '</div></header>
	<div id="headerImage"></div>';	
		
	return $headerInfo;
}

function createFooter($footerID)
{
	$footerInfo = '<footer id="' . $footerID . '">
		<h4 id="contactInfoFooter">Contact Information</h4>
		<div id="expandedFooter">
			<h5>Koback Landscaping</h5>
			<p id="email">
				<a href="mailto:kobacklandscaping@outlook.com?Subject=Website%20Query" target="_top">kobacklandscaping@outlook.com</a>
			</p>
			<p id="phoneNumber">1(306)272-7566</p>
		</div>
		<button id="expandButton"> </button>
	</footer>';
	return $footerInfo;
}


?>