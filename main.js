const APP_ID = "ddf1c48fd8fdea753b26cb6c0971244a";

const wrapper = document.querySelector(".wrapper"),
  inputPart = wrapper.querySelector(".input-part"),
  infoTxt = inputPart.querySelector(".info-txt"),
  inputField = inputPart.querySelector("input"),
  locationBtn = inputPart.querySelector("button"); 

inputField.addEventListener("keyup", (e) => {
  // nếu user đã nhấn enter và giá trị input không rỗng
  if (e.key == "Enter" && inputField.value != "") {
    requestApi(inputField.value);
  }
});

locationBtn.addEventListener("click", () => {
    if(navigator.geolocation) { 
        navigator.geolocation.getCurrentPosition(onSucces, onError);
    }else {
        alert("Trình duyệt của bạn không hỗ trợ định vị");
    }
})

function onError(error) {
    console.log(error)
}

function requestApi(city) {
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}&units=metric&lang=vi`;

  infoTxt.innerText = "Nhận thông tin chi tiết về thời tiết...";
  infoTxt.classList.add("pending");
  
  // nhận phản hồi api và trả về phân tích cú pháp thành đối tượng js và trong một đối tượng khác
  // sau đó hàm gọi hàm weatherDeails với việc truyền kết quả api làm đối số
  fetch(api)
    .then((response) => response.json())
    .then((result) => weatherDetails(result));
}

function weatherDetails(info) {
  console.log(info);
}
