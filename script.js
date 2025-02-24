function changeBackgroundColor() {
    // قائمة من الألوان العشوائية
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFD700'];

    // اختيار لون عشوائي من القائمة
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // تغيير لون خلفية الصفحة
    document.body.style.backgroundColor = randomColor;

}

const c = '#00FFFF';


//let myImg = document.getElementsByTagName("img")[1];
/*
if(myImg.hasAttribute("title")){
    if(myImg.getAttribute("title") === ("itachy")){
        myImg.setAttribute("title" , "oncle");



    }


}*/

