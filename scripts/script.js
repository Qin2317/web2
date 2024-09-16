// 用于切换图片
function changeImage(imageSrc) {
  var displayedImage = document.getElementById('displayedImage');   //获取显示图片的元素
  displayedImage.src = imageSrc;                                     //设置显示图片的元素的src属性为传入的图片路径
}
//切换图片亮暗
let isdark=false;
function changeLightness() {
  const img = document.getElementById('displayedImage');   //获取显示图片的元素
  const button = document.getElementById('change');
  if(isdark){
    img.classList.remove('darken');
    button.textContent = 'light'; // 切换到亮模式，按钮显示"light"
    }                                    
  else{
    img.classList.add('darken');
      button.textContent = 'dark'; // 切换到亮模式，按钮显示"light"
  }
  isdark=!isdark;
}