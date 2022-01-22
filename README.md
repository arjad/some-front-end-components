# mern-todo
basically for fyp


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Learn To Make A Web Site With HTML & CSS</title>
	<!-- /This meta property is to get details when sharing on social media -->
	<meta property="og:title" content="Learn To Make A Web Site With HTML & CSS"/>
	<meta property="og:type" content="Web Site"/>
	<meta property="og:url" content="https://payhip.com/ProblemSolvingProducts"/>
	<meta property="og:image" content="https://payhip.com/ProblemSolvingProducts/image.jpg"/>
	<meta property="og:description" content="I will Teach you to Make A Web Site With HTML & CSS step by step"/>
	<meta property="og:site_name" content="Learn To Make A Web Site With HTML & CSS"/>

	<link rel="stylesheet" href="jquery.multiscroll.css">
	<link rel="stylesheet" href="style.css">
	
</head>
<body>
		

	<div id="multiscroll">
		<div class="ms-left">
			<div class="ms-section one">
				<h1>Section 1 Left</h1>
				<p>Learn To Make A Web Site With HTML & CSS</p>
				<a href="#Your Link">Learn More</a>
			</div>

			<div class="ms-section two">
				<h1>Section 2 Left</h1>
				<p>Learn To Make A Web Site With HTML & CSS</p>
				<a href="#Your Link">Learn More</a>
			</div>

			<div class="ms-section three">
				<h1>Section 3 Left</h1>
				<p>Learn To Make A Web Site With HTML & CSS</p>
				<a href="#Your Link">Learn More</a>
			</div>
			<div class="ms-section four">
				<h1>Section 4 Left</h1>
				<p>Learn To Make A Web Site With HTML & CSS</p>
				<a href="#Your Link">Learn More</a>
			</div>		
		</div>

		<div class="ms-right">
			<div class="ms-section five">
				<h1>Section 1 Right</h1>
				<p>Learn To Make A Web Site With HTML & CSS</p>
				<a href="#Your Link">Learn More</a>
			</div>

			<div class="ms-section six">
				<h1>Section 2 Right</h1>
				<p>Learn To Make A Web Site With HTML & CSS</p>
				<a href="#Your Link">Learn More</a>
			</div>

			<div class="ms-section seven">
				<h1>Section 3 Right</h1>
				<p>Learn To Make A Web Site With HTML & CSS</p>
				<a href="#Your Link">Learn More</a>
			</div>
			<div class="ms-section eight">
				<h1>Section 4 Right</h1>
				<p>Learn To Make A Web Site With HTML & CSS</p>
				<a href="#Your Link">Learn More</a>
			</div>	
		</div>
	</div>

	<script src="jquery.min.js"></script>
	<script src="jquery.multiscroll.min.js"></script>
	<script src="jquery.easings.min.js"></script>
	<script>
		$(document).ready(function(){
			$('#multiscroll').multiscroll({
				navigation: true,
				navigationPosition: 'right',
				navigationColor: '#000',
			})
		});
	</script>
</body>
</html>
