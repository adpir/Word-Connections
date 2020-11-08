//  this is api  request url for spanish to english https://www.dictionaryapi.com/api/v3/references/spanish/json/language?key=your-api-key
//  key for span  b1823e2d-0dd8-4ab4-bfa5-f67523265df8
// dictionary api https://www.dictionaryapi.com/api/v3/references/collegiate/json/searchquerey?key=your-api-key
// key for dict 097e4f17-51a3-4c33-868e-e4192b97f92a
// colligate thes https://www.dictionaryapi.com/api/v3/references/thesaurus/json/umpire?key=your-api-key
// key 20fc6f58-5554-4511-aeb4-73b02f754ec4


let googleObject;
let searchText = $("#textarea").value;
let searchBtn = $("#search-button");
let idNumber = 0;

let spanishCall = "https://www.dictionaryapi.com/api/v3/references/spanish/json/"+searchText+"?key=b1823e2d-0dd8-4ab4-bfa5-f67523265df8";
let dict = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/"+searchText+"?key=097e4f17-51a3-4c33-868e-e4192b97f92a";
let thes = "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/"+searchText+"?key=20fc6f58-5554-4511-aeb4-73b02f754ec4";


//let  currentSearch;
//$.ajax({url:currentSearch,method: "GET"})
//    .then(function(responce){}
//   );
    

$("#search-button").on("click", function () {
    console.log("search button clicked");
    googleApi();
    console.log("called google api");
    
});
searchBtn.on("click", function () {
    SetHistory();
});

function SetHistory() {
    let textItem = searchText.val();
    let newListItem = $("<li>");
    newListItem.attr("id", idNumber);
    newListItem.attr("class", "historyListItems");
    newListItem.append(textItem);
    newListItem.on("click", function(){historyClick()});
    $("#history-items").prepend(newListItem);
    idNumber++;
};

function historyClick() {
    console.log("hi");
};


  // google api stuffssssss
/*curl \
  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&type=video&key=[YOUR_API_KEY]' \
  --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
  --header 'Accept: application/json' \
  --compressed
*/

function googleApi(){
    searchText = document.getElementById("textarea").value;
    console.log(searchText);
    console.log(typeof searchText);
    let youtubeAPI = "https://youtube.googleapis.com/youtube/v3/search?&maxResults=10&order=relevance&q="+searchText+"&type=video&videoEmbeddable=true&videoType=videoTypeUnspecified&key=AIzaSyA8fMnoVL3CYKS1ikwHY_Wuv2GXFDSoPoo"
    console.log(youtubeAPI);

    $.ajax({url:youtubeAPI,method: "GET"})
    .then(function(responce){
        console.log(responce);
        googleObject=responce;
        createVideoCarusel();
        }
    )
        
}


 function createVideoCarusel(){
  let video1 = "https://www.youtube.com/embed/"+googleObject.items[0].Id.videoID;
  console.log(video1);
  document.getElementById("ytPlayer").setAttribute("src",video1);
 
   // ect

 }


//!!!!!!!!!!!       this is the basics for embeded only vids    !!!!!!!!!!!!!!!!!!!!!!
 /*'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&order=relevance&q=banana&type=video&videoEmbeddable=true&videoType=videoTypeUnspecified&key=[YOUR_API_KEY]' \
  --header 'Accept: application/json' \
  --compressed
 */
