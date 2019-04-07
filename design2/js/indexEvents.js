function toggleFooterDisplay(){
	$("#expandedFooter").toggle(1000);
	
	if ( $("#homepageFooter").attr("class") == "collapseFooter" ){
		$("#homepageFooter").removeClass("collapseFooter");
		$("#homepageFooter").addClass("expandFooter");
		$("#expandButton").addClass("expandFooterButton");
		$("#expandButton").removeClass("collapseFooterButton");
	}else{
		$("#homepageFooter").removeClass("expandFooter");
		$("#homepageFooter").addClass("collapseFooter");
		$("#expandButton").addClass("collapseFooterButton"); 
		$("#expandButton").removeClass("expandFooterButton");
	}
	
}	

// success on retrieving menu value
function success(data) {
  // do something with data, which is an object
}

	

$(function(){
	$("#homepageFooter").addClass("expandFooter");
	$("#expandButton").addClass("expandFooterButton");
	$("#mainBodyContent").position({
		"my":"center top",
		"at":"center bottom",
		"of":$("#homepageHeader")
	});
	$("#expandButton").click(function(){
		toggleFooterDisplay();
	});
	
	
	$("#topTabs li").click(function(e){
		e.preventDefault();
		
		$("#documentTitle").text(e.target.id);
		//alert("clicked element is: " + e.target.id);
		$.ajax({
			type: "GET",
			url: 'getPages.php',
			data: {page: e.target.id},
			success: function(data){
				var pageContent = " ";
				if ( e.target.id  === "Projects"){
					pageContent += '<div id="projectImages"><image src="' + data.project1Image.imageName +'" alt="'+ data.project1Image.alt + '" ><image src="' + data.project2Image.imageName +'" alt="'+ data.project2Image.alt + '" ><image src="' + data.project3Image.imageName +'" alt="'+ data.project3Image.alt + '" ></div>';
					pageContent += '<ul><h3 id="projectList">Completed Projects</h3><li><a href="'+ data.project1.url  + '">'+ data.project1.name + '</a></li><li><a href="'+ data.project2.url  + '">'+ data.project2.name + '</a></li><li><a href="'+ data.project3.url  + '">'+ data.project3.name + '</a></li></ul>';
					pageContent += '<ul><h3 id="projectList">Incomplete Projects</h3><li>' + data.project1Name+ '</li><li>' + data.project2Name+ '</li></ul>';
				}else if (e.target.id === "Home"){
					pageContent += sendHomePage();
				}else{ 
					pageContent += sendAboutPage();
				}
				//alert("page Content: \n\n" + pageContent);
				$("#mainBodyContent").empty();
				$("#mainBodyContent").append( pageContent);
			},
			error: function(data){
				$("#mainBodyContent").empty();
			}
		});

	});
	$("#hometab").click();
});
function sendHomePage(){
    var pageContent = "";
    
    pageContent += '<p> I have already experienced programming in various programming languages in Saskatchewan, and I have moved to Ontario to expand my knowledge in a professional environment. <p> ';
    
    pageContent += '</br></br><p> The "Projects" tab displays a list of personal custom projects I have completed, and I am continually expanding my knowledge with others. <p> ';
    
    pageContent += '<p> A project I have completed recently can be found <a href="https://www.kobackproducts.ca">here</a>.</p>';
    return pageContent;
}
function sendAboutPage(){
    var pageContent = "";
    pageContent += "";
    pageContent += '<p>I have completed several projects in the past, where majority of them involve re-engineering interactive websites I have discovered in various programming languages.</p>';
    pageContent += '<p>Due to uncertainty in legal matters, they are not available for online perusal. </p>';
    pageContent += '</br></br><h3>Programming Languages Used  </h3><p>I have used HTML5/Css/Javascript the most with an average of three years, whereas I have used Django and AngularJS 7/NodeJS two years. </p>';
    pageContent +='<p>I am also familiar with MySQL and PostgreSQL for databases. </p>';
    return pageContent;
}