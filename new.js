function ta()
{
fetch( 'https://newsapi.org/v2/top-headlines?country=in&apiKey=8d23d27a6c0047d999c8178f109a03a7'

	//8d23d27a6c0047d999c8178f109a03a7
	
)
.then(response =>response.json() )
.then(json=>{
	
	console.log(json.articles);
	// let x=new Array;
	// for(let i=0;i<20;i++)
	//  x[i] =json.articles[i].description;

	 console.log(json.articles[0].urlToImage)
	//x=x.toString();
  // document.querySelector('#d1').innerHTML=json.articles[0].content;
   document.getElementById("i1").src =json.articles[0].urlToImage;
   document.querySelector('#t1').innerHTML=json.articles[0].title;
   document.getElementById("l1").href = json.articles[0].url;

  // document.querySelector('#d2').innerHTML=json.articles[1].content;
   document.getElementById("i2").src =json.articles[1].urlToImage;
   document.querySelector('#t2').innerHTML=json.articles[1].title;
   document.getElementById("l2").href = json.articles[1].url;


  // document.querySelector('#d3').innerHTML=json.articles[2].content;
   document.getElementById("i3").src =json.articles[2].urlToImage;
   document.querySelector('#t3').innerHTML=json.articles[2].title;
   document.getElementById("l3").href = json.articles[2].url;


   document.querySelector('#d4').innerHTML=json.articles[3].content;
   document.getElementById("i4").src =json.articles[3].urlToImage;
   document.querySelector('#t4').innerHTML=json.articles[3].title;
   document.getElementById("l4").href = json.articles[3].url;

   document.querySelector('#d5').innerHTML=json.articles[4].content;
   document.getElementById("i5").src =json.articles[4].urlToImage;
   document.querySelector('#t5').innerHTML=json.articles[4].title;
   document.getElementById("l5").href = json.articles[4].url;
   
   document.querySelector('#d6').innerHTML=json.articles[5].content;
   document.getElementById("i6").src =json.articles[5].urlToImage;
   document.querySelector('#t6').innerHTML=json.articles[5].title;
   document.getElementById("l6").href = json.articles[5].url;
   
   document.querySelector('#d7').innerHTML=json.articles[6].content;
   document.getElementById("i7").src =json.articles[6].urlToImage;
   document.querySelector('#t7').innerHTML=json.articles[6].title;
   document.getElementById("l7").href = json.articles[6].url;
   
   document.querySelector('#d8').innerHTML=json.articles[7].content;
   document.getElementById("i8").src =json.articles[7].urlToImage;
   document.querySelector('#t8').innerHTML=json.articles[7].title;
   document.getElementById("l8").href = json.articles[7].url;


   document.querySelector('#d9').innerHTML=json.articles[8].content;
   document.getElementById("i9").src =json.articles[8].urlToImage;
   document.querySelector('#t9').innerHTML=json.articles[8].title;
   document.getElementById("l9").href = json.articles[8].url;

   document.querySelector('#d9').innerHTML=json.articles[8].content;
   document.getElementById("i9").src =json.articles[8].urlToImage;
   document.querySelector('#t9').innerHTML=json.articles[8].title;
   document.getElementById("l9").href = json.articles[8].url;

   document.querySelector('#d10').innerHTML=json.articles[9].content;
   document.getElementById("i10").src =json.articles[9].urlToImage;
   document.querySelector('#t10').innerHTML=json.articles[9].title;
   document.getElementById("l10").href = json.articles[9].url;

   document.querySelector('#d11').innerHTML=json.articles[10].content;
   document.getElementById("i11").src =json.articles[10].urlToImage;
   document.querySelector('#t11').innerHTML=json.articles[10].title;
   document.getElementById("l11").href = json.articles[10].url;

   document.querySelector('#d12').innerHTML=json.articles[11].content;
   document.getElementById("i12").src =json.articles[11].urlToImage;
   document.querySelector('#t12').innerHTML=json.articles[11].title;
   document.getElementById("l12").href = json.articles[11].url;

   /*document.querySelector('#d13').innerHTML=json.articles[12].content;
   document.getElementById("i13").src =json.articles[12].urlToImage;
   document.querySelector('#t13').innerHTML=json.articles[12].title;
   document.getElementById("l13").href = json.articles[12].url;
  4
   document.querySelector('#d14').innerHTML=json.articles[13].content;
   document.getElementById("i14").src =json.articles[13].urlToImage;
   document.querySelector('#t14').innerHTML=json.articles[13].title;
   document.getElementById("l14").href = json.articles[13].url;

   document.querySelector('#d15').innerHTML=json.articles[14].content;
   document.getElementById("i15").src =json.articles[14].urlToImage;
   document.querySelector('#t15').innerHTML=json.articles[14].title;
   document.getElementById("l15").href = json.articles[14].url;

*/


   

})//.items.snippet.thumbnails.high))
.catch(err => {
	console.log(err);
});
};

ta();
//let a =document.getElementById("s").li.value;
//document.querySelectorAll('.nav-item').addEventListener('click',function(){
   //var a= document.getElementsByClassName('nav-item').click.value;
  // console.log("5")
//})
var ul = document.getElementById('s');
ul.onclick = function(event) {
    var target = event.target;
    console.log(event.target.textContent);
    if(event.target.textContent=='Trending (current)')
    ta();

    else
    fetch( `https://newsapi.org/v2/top-headlines?country=in&apiKey=8d23d27a6c0047d999c8178f109a03a7&category=${event.target.textContent.toLowerCase()}`

	//8d23d27a6c0047d999c8178f109a03a7
	
)
.then(response =>response.json() )
.then(json=>{
	
	console.log(json.articles);
	// let x=new Array;
	// for(let i=0;i<20;i++)
	//  x[i] =json.articles[i].description;

	 console.log(json.articles[0].urlToImage)
	//x=x.toString();
  // document.querySelector('#d1').innerHTML=json.articles[0].content;
   document.getElementById("i1").src =json.articles[0].urlToImage;
   document.querySelector('#t1').innerHTML=json.articles[0].title;
   document.getElementById("l1").href = json.articles[0].url;

  // document.querySelector('#d2').innerHTML=json.articles[1].content;
   document.getElementById("i2").src =json.articles[1].urlToImage;
   document.querySelector('#t2').innerHTML=json.articles[1].title;
   document.getElementById("l2").href = json.articles[1].url;


  // document.querySelector('#d3').innerHTML=json.articles[2].content;
   document.getElementById("i3").src =json.articles[2].urlToImage;
   document.querySelector('#t3').innerHTML=json.articles[2].title;
   document.getElementById("l3").href = json.articles[2].url;


   document.querySelector('#d4').innerHTML=json.articles[3].content;
   document.getElementById("i4").src =json.articles[3].urlToImage;
   document.querySelector('#t4').innerHTML=json.articles[3].title;
   document.getElementById("l4").href = json.articles[3].url;

   document.querySelector('#d5').innerHTML=json.articles[4].content;
   document.getElementById("i5").src =json.articles[4].urlToImage;
   document.querySelector('#t5').innerHTML=json.articles[4].title;
   document.getElementById("l5").href = json.articles[4].url;
   
   document.querySelector('#d6').innerHTML=json.articles[5].content;
   document.getElementById("i6").src =json.articles[5].urlToImage;
   document.querySelector('#t6').innerHTML=json.articles[5].title;
   document.getElementById("l6").href = json.articles[5].url;
   
   document.querySelector('#d7').innerHTML=json.articles[6].content;
   document.getElementById("i7").src =json.articles[6].urlToImage;
   document.querySelector('#t7').innerHTML=json.articles[6].title;
   document.getElementById("l7").href = json.articles[6].url;
   
   document.querySelector('#d8').innerHTML=json.articles[7].content;
   document.getElementById("i8").src =json.articles[7].urlToImage;
   document.querySelector('#t8').innerHTML=json.articles[7].title;
   document.getElementById("l8").href = json.articles[7].url;


   document.querySelector('#d9').innerHTML=json.articles[8].content;
   document.getElementById("i9").src =json.articles[8].urlToImage;
   document.querySelector('#t9').innerHTML=json.articles[8].title;
   document.getElementById("l9").href = json.articles[8].url;

   document.querySelector('#d10').innerHTML=json.articles[9].content;
   document.getElementById("i10").src =json.articles[9].urlToImage;
   document.querySelector('#t10').innerHTML=json.articles[9].title;
   document.getElementById("l10").href = json.articles[9].url;

   document.querySelector('#d11').innerHTML=json.articles[10].content;
   document.getElementById("i11").src =json.articles[10].urlToImage;
   document.querySelector('#t11').innerHTML=json.articles[10].title;
   document.getElementById("l11").href = json.articles[10].url;

   document.querySelector('#d12').innerHTML=json.articles[11].content;
   document.getElementById("i12").src =json.articles[11].urlToImage;
   document.querySelector('#t12').innerHTML=json.articles[11].title;
   document.getElementById("l12").href = json.articles[11].url;



   

})//.items.snippet.thumbnails.high))


};  





// fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
// 		"x-rapidapi-key": "4bca0d37d5mshbcc12129ee2c496p1ec011jsn54e2c2f1323c"
// 	}
// })

// .then(response =>response.json() )
// .then(json=>{
	
// 	console.log(json.data[0].link);
// 	// let x=new Array;
// 	// for(let i=0;i<20;i++)
// 	//  x[i] =json.articles[i].description;

// 	// console.log(x)
// 	//x=x.toString();
//   // document.querySelector('.h').innerHTML=json.articles[0].description;;
   

// })//.items.snippet.thumbnails.high))
// .catch(err => {
// 	console.log(err);
// });



