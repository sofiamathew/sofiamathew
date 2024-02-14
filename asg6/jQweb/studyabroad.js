$(function() {

    $('.header').hide().delay(400).fadeIn(2000);
    $('.nav').hide().delay(1000).fadeIn(2000);
    $('.links').eq(0).click(function() {

		$('.dis').eq(0).hide();
	  
    $('.maincontent').empty();

		let about = "<p>I studied abroad in London during my second semester of my third year. I chose London because I have always wanted to see it since I was young, and I felt like studying abroad there was the best way to experience it. Because I was only there for a short amount of time, I really tried to explore and travel as much as I could. I highly recommend people to study abroad if they can, as it was one of my favorite experiences.</p>";
		
		$('.maincontent').html(about);

	})

	$('.links').eq(1).click(function() {

		$('.dis').eq(0).hide();

		$('.links').removeClass('selected');
		$(this).addClass('selected');
		$('.section').empty();

		let video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/mOyS8-o1Uvw?si=JzaAyFvchhXDK6nX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
		
    $('.maincontent').html(video);

	})


	$('.links').eq(2).click(function() {
    
		$('.dis').eq(0).hide();

		$('.links').removeClass('selected');
		$(this).addClass('selected');
		$('.maincontent').empty();

		let londonphoto1 = '<img src="ldn1.jpg">';
    let londonphoto2 = '<img src="ldn2.jpg">';

		$('.maincontent').html("<p>skyline view from greenwich</p>" + londonphoto1 + "<br><p>the national gallery</p>" + londonphoto2);
		
	})

	$('.links').eq(3).click(function() {

		$('.links').removeClass('selected');
		$(this).addClass('selected');
		$('.maincontent').empty();
		
		$('.dis').eq(0).show();

	  let recommendations = "<a href='https://www.vam.ac.uk/' target='_blank'><p>victoria & albert museum</p></a><br><a href='https://gailsbread.co.uk/' target='_blank'><p>gail\'s</p></a><br><a href='https://www.royalparks.org.uk/visit/parks/greenwich-park' target='_blank'><p>greenwich park</p></a>";
		$('.maincontent').html(recommendations);
	})

});