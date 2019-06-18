const IMAGES = document.querySelectorAll("img");;

for(let i =0;i<IMAGES.length;i++){
  let imgSrc = IMAGES[i].getAttribute("src");
  //delete last 8 chars of imgSrc as they are same -8 because last 8 chars
  imgSrc = imgSrc.slice(0,-8);
  console.log(imgSrc);

  let type = IMAGES[i].getAttribute("data-type");
  console.log(type);
}
