import { useEffect, useRef } from "react";

export const RemoveBackground = () => {
  let uploadSVG = '<svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.2031 0.25C12.9844 0.25 11.8828 0.570312 10.8984 1.21094C9.92969 1.85156 9.1875 2.6875 8.67188 3.71875C8.57812 3.70313 8.48438 3.69531 8.39062 3.69531C8.3125 3.67969 8.23438 3.67188 8.15625 3.67188C7.39062 3.67188 6.70312 3.89844 6.09375 4.35156C5.5 4.80469 5.08594 5.375 4.85156 6.0625C4.19531 6.20312 3.58594 6.45312 3.02344 6.8125C2.46094 7.15625 1.96875 7.58594 1.54688 8.10156C1.14062 8.61719 0.820312 9.19531 0.585938 9.83594C0.367188 10.4766 0.257812 11.1484 0.257812 11.8516C0.257812 12.6641 0.40625 13.4297 0.703125 14.1484C1 14.8516 1.39844 15.4766 1.89844 16.0234C2.41406 16.5547 3.02344 16.9766 3.72656 17.2891C4.41406 17.6016 5.15625 17.7578 5.95312 17.7578H6.49219C6.71094 17.7578 6.89062 17.6875 7.03125 17.5469C7.17188 17.3906 7.24219 17.2109 7.24219 17.0078C7.24219 16.7891 7.17188 16.6094 7.03125 16.4688C6.89062 16.3281 6.71094 16.2578 6.49219 16.2578H5.95312C4.79688 16.2578 3.80469 15.8359 2.97656 14.9922C2.16406 14.1328 1.75781 13.0859 1.75781 11.8516C1.75781 10.7578 2.08594 9.8125 2.74219 9.01562C3.41406 8.20312 4.24219 7.71094 5.22656 7.53906C5.47656 7.49219 5.6875 7.38281 5.85938 7.21094C6.04688 7.03906 6.17969 6.83594 6.25781 6.60156C6.39844 6.17969 6.64062 5.83594 6.98438 5.57031C7.32812 5.30469 7.71875 5.17188 8.15625 5.17188C8.20312 5.17188 8.25 5.17969 8.29688 5.19531C8.35938 5.19531 8.42188 5.20313 8.48438 5.21875C8.76562 5.26562 9.04688 5.22656 9.32812 5.10156C9.60938 4.97656 9.82031 4.76562 9.96094 4.46875C10.3516 3.65625 10.9219 3 11.6719 2.5C12.4375 2 13.2812 1.75 14.2031 1.75C14.8438 1.75 15.4531 1.875 16.0312 2.125C16.6094 2.39063 17.1094 2.75 17.5312 3.20312C17.9688 3.64062 18.3125 4.16406 18.5625 4.77344C18.8281 5.38281 18.9609 6.03125 18.9609 6.71875C18.9609 6.95312 19.0234 7.17188 19.1484 7.375C19.2734 7.5625 19.4453 7.70312 19.6641 7.79688C20.4141 8.125 21.0312 8.65625 21.5156 9.39062C22 10.1094 22.2422 10.9297 22.2422 11.8516C22.2422 13.0859 21.8281 14.1328 21 14.9922C20.1875 15.8359 19.2031 16.2578 18.0469 16.2578H17.5078C17.2891 16.2578 17.1094 16.3281 16.9688 16.4688C16.8281 16.6094 16.7578 16.7891 16.7578 17.0078C16.7578 17.2109 16.8281 17.3906 16.9688 17.5469C17.1094 17.6875 17.2891 17.7578 17.5078 17.7578H18.0469C18.8438 17.7578 19.5859 17.6016 20.2734 17.2891C20.9766 16.9766 21.5781 16.5547 22.0781 16.0234C22.5938 15.4766 23 14.8516 23.2969 14.1484C23.5938 13.4297 23.7422 12.6641 23.7422 11.8516C23.7422 10.6797 23.4375 9.61719 22.8281 8.66406C22.2188 7.69531 21.4219 6.97656 20.4375 6.50781C20.4219 5.64844 20.2422 4.83594 19.8984 4.07031C19.5703 3.32031 19.125 2.66406 18.5625 2.10156C18 1.52344 17.3438 1.07031 16.5938 0.742188C15.8438 0.414062 15.0469 0.25 14.2031 0.25ZM17.2734 13.0938C17.4297 12.9531 17.5078 12.7812 17.5078 12.5781C17.5078 12.3594 17.4297 12.1797 17.2734 12.0391L12.6094 7.35156C12.5156 7.25781 12.3984 7.21094 12.2578 7.21094C12.1172 7.21094 12 7.25781 11.9062 7.35156L7.21875 12.0391C7.07812 12.1797 7.00781 12.3594 7.00781 12.5781C7.00781 12.7812 7.07812 12.9531 7.21875 13.0938C7.35938 13.2344 7.53125 13.3047 7.73438 13.3047C7.95312 13.3047 8.13281 13.2344 8.27344 13.0938L11.5078 9.88281V19.5625C11.5078 19.7656 11.5781 19.9453 11.7188 20.1016C11.8594 20.2422 12.0391 20.3125 12.2578 20.3125C12.4609 20.3125 12.6328 20.2422 12.7734 20.1016C12.9297 19.9453 13.0078 19.7656 13.0078 19.5625V9.88281L16.2188 13.0938C16.3594 13.2344 16.5312 13.3047 16.7344 13.3047C16.9531 13.3047 17.1328 13.2344 17.2734 13.0938Z" fill="#C209C1"/></svg>';
  let copySVG = '<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.63169 4V4.215H3.41669C2.55752 4.215 1.82169 4.52083 1.21002 5.1325C0.59752 5.7325 0.291687 6.4675 0.291687 7.34V14C0.291687 14.8592 0.59752 15.595 1.21002 16.2067C1.82169 16.8192 2.55752 17.125 3.41669 17.125H10.0767C10.9492 17.125 11.685 16.8192 12.2842 16.2067C12.8959 15.595 13.2017 14.8592 13.2017 14V13.785H13.4167C13.826 13.7915 14.2325 13.7152 14.6116 13.5609C14.9908 13.4065 15.3349 13.1772 15.6234 12.8867C16.2359 12.275 16.5417 11.5325 16.5417 10.66V4C16.5417 3.14083 16.2359 2.405 15.6234 1.79333C15.0117 1.18083 14.2759 0.875 13.4167 0.875H6.75669C5.88419 0.875 5.14169 1.18083 4.53002 1.79333C4.23949 2.08176 4.01017 2.42587 3.85581 2.80505C3.70144 3.18423 3.62522 3.59066 3.63169 4ZM4.88169 4.215V4C4.88169 3.47917 5.06419 3.03667 5.42835 2.67167C5.60068 2.49464 5.80745 2.3548 6.03591 2.26078C6.26437 2.16676 6.50968 2.12055 6.75669 2.125H13.4167C13.6637 2.12055 13.909 2.16676 14.1375 2.26078C14.3659 2.3548 14.5727 2.49464 14.745 2.67167C15.1092 3.03667 15.2917 3.47917 15.2917 4V10.66C15.2961 10.907 15.2499 11.1523 15.1559 11.3808C15.0619 11.6092 14.922 11.816 14.745 11.9883C14.5727 12.1654 14.3659 12.3052 14.1375 12.3992C13.909 12.4932 13.6637 12.5394 13.4167 12.535H13.2017V7.34C13.2017 6.4675 12.8959 5.73167 12.2842 5.1325C11.6842 4.52083 10.9492 4.215 10.0767 4.215H4.88169ZM1.54169 7.34C1.54169 6.81917 1.72419 6.37667 2.08835 6.01167C2.26068 5.83464 2.46745 5.69481 2.69591 5.60078C2.92437 5.50676 3.16968 5.46055 3.41669 5.465H10.0767C10.3237 5.46055 10.569 5.50676 10.7975 5.60078C11.0259 5.69481 11.2327 5.83464 11.405 6.01167C11.7692 6.37667 11.9517 6.81917 11.9517 7.34V14C11.9561 14.247 11.9099 14.4923 11.8159 14.7208C11.7219 14.9492 11.582 15.156 11.405 15.3283C11.2327 15.5054 11.0259 15.6452 10.7975 15.7392C10.569 15.8332 10.3237 15.8794 10.0767 15.875H3.41669C3.16968 15.8794 2.92437 15.8332 2.69591 15.7392C2.46745 15.6452 2.26068 15.5054 2.08835 15.3283C1.91133 15.156 1.77149 14.9492 1.67747 14.7208C1.58345 14.4923 1.53724 14.247 1.54169 14V7.34Z" fill="black"/></svg>';
  let shareSVG = '<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.215 0.0766602C13.3425 0.0766602 12.6 0.382493 11.9883 0.994994C11.6978 1.28342 11.4685 1.62754 11.3141 2.00671C11.1598 2.38589 11.0835 2.79232 11.09 3.20166C11.09 3.44461 11.1162 3.68686 11.1683 3.92416L6.28499 6.54166C5.99946 6.16486 5.63219 5.85771 5.21083 5.64333C4.77338 5.40703 4.28298 5.28601 3.78583 5.29166C2.92583 5.29166 2.18999 5.59749 1.57749 6.20999C0.965828 6.82166 0.660828 7.55749 0.660828 8.41666C0.660828 9.27583 0.965828 10.0117 1.57749 10.6233C2.18999 11.2358 2.92583 11.5417 3.78583 11.5417C4.27435 11.5462 4.75671 11.4324 5.19166 11.21C5.61924 10.9881 5.99257 10.6745 6.28499 10.2917L11.1483 12.9867C11.1225 13.0908 11.1025 13.195 11.09 13.2992V13.6317C11.0835 14.041 11.1598 14.4474 11.3141 14.8266C11.4685 15.2058 11.6978 15.5499 11.9883 15.8383C12.6 16.4508 13.3425 16.7567 14.215 16.7567C15.0742 16.7567 15.81 16.4508 16.4217 15.8383C17.0342 15.2267 17.34 14.4908 17.34 13.6317C17.34 12.7592 17.0342 12.0233 16.4217 11.4242C15.81 10.8125 15.0742 10.5067 14.215 10.5067C13.7114 10.5024 13.2146 10.6232 12.7692 10.8583C12.3378 11.0831 11.9638 11.4038 11.6758 11.7958L6.83166 9.11999C6.85833 9.01583 6.87749 8.90499 6.89 8.78749C6.93176 8.42845 6.91203 8.06491 6.83166 7.71249L11.715 5.09583C12.0017 5.47416 12.3592 5.77333 12.7892 5.99499C13.2315 6.21607 13.7197 6.3297 14.2142 6.32666C14.6238 6.33336 15.0305 6.25724 15.41 6.10287C15.7895 5.9485 16.1339 5.71906 16.4225 5.42833C17.0342 4.81666 17.3392 4.07416 17.3392 3.20166C17.3392 2.34249 17.0342 1.60666 16.4225 0.994994C15.81 0.382493 15.0742 0.0766602 14.2142 0.0766602H14.215ZM12.34 3.20166C12.34 2.69333 12.5225 2.25749 12.8867 1.89333C13.2517 1.51583 13.6942 1.32666 14.215 1.32666C14.7233 1.32666 15.1592 1.51583 15.5233 1.89333C15.9008 2.25749 16.09 2.69333 16.09 3.20166C16.09 3.72249 15.9008 4.16499 15.5233 4.52999C15.1592 4.89416 14.7233 5.07666 14.215 5.07666C13.968 5.08111 13.7227 5.0349 13.4942 4.94088C13.2658 4.84686 13.059 4.70702 12.8867 4.52999C12.7096 4.35767 12.5698 4.1509 12.4758 3.92243C12.3818 3.69397 12.3355 3.44867 12.34 3.20166ZM1.90999 8.41666C1.90999 7.89583 2.09249 7.45333 2.45666 7.08833C2.63047 6.91328 2.83752 6.77475 3.06563 6.68087C3.29375 6.587 3.53833 6.53966 3.78499 6.54166C4.03201 6.53721 4.27731 6.58342 4.50577 6.67744C4.73423 6.77147 4.941 6.9113 5.11333 7.08833C5.47749 7.45333 5.65999 7.89583 5.65999 8.41666C5.66444 8.66367 5.61823 8.90897 5.52421 9.13743C5.43019 9.3659 5.29035 9.57267 5.11333 9.74499C4.941 9.92202 4.73423 10.0619 4.50577 10.1559C4.27731 10.2499 4.03201 10.2961 3.78499 10.2917C3.27666 10.2917 2.83499 10.1092 2.45666 9.74499C2.27964 9.57267 2.1398 9.3659 2.04578 9.13743C1.95176 8.90897 1.90554 8.66367 1.90999 8.41666ZM14.215 11.7567C14.7233 11.7567 15.1592 11.9392 15.5233 12.3033C15.9008 12.6683 16.09 13.1108 16.09 13.6317C16.09 14.14 15.9008 14.5817 15.5233 14.96C15.1592 15.3242 14.7233 15.5067 14.215 15.5067C13.968 15.5111 13.7227 15.4649 13.4942 15.3709C13.2658 15.2769 13.059 15.137 12.8867 14.96C12.5225 14.5817 12.34 14.1392 12.34 13.6317C12.34 13.1108 12.5225 12.6683 12.8867 12.3033C13.059 12.1263 13.2658 11.9865 13.4942 11.8924C13.7227 11.7984 13.968 11.7522 14.215 11.7567Z" fill="black"/></svg>';

  uploadSVG = encodeURIComponent(uploadSVG);
  copySVG = encodeURIComponent(copySVG);
  shareSVG = encodeURIComponent(shareSVG);

  function foo() {
  const API_KEY = "eyJraWQiOiI5NzIxYmUzNi1iMjcwLTQ5ZDUtOTc1Ni05ZDU5N2M4NmIwNTEiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhdXRoLXNlcnZpY2UtYzFhYTg5ODAtODBmNi00ZWZjLTkwZTAtOThiMjljNjEyNzdlIiwiYXVkIjoiNDY4NTc2NzQwMDExMTAxIiwibmJmIjoxNzQ0NjM1ODc2LCJzY29wZSI6WyJiMmItYXBpLmdlbl9haSIsImIyYi1hcGkuaW1hZ2VfYXBpIl0sImlzcyI6Imh0dHBzOi8vYXBpLnBpY3NhcnQuY29tL3Rva2VuLXNlcnZpY2UiLCJvd25lcklkIjoiNDY4NTc2NzQwMDExMTAxIiwiaWF0IjoxNzQ0NjM1ODc2LCJqdGkiOiIzNWNmZTJhNi0xNDczLTRkMmYtYTU0Ny02ZGI5ZDY5M2E5MDMifQ.C8_KvtOLyimxRQYdA7yQO8LHZnjCqFBrogq0C09I7saQgaRxvS8cl2jHzMVhiCqQ4xXDNwGfgjIViUOxObtwzsGcfw3vy_YMjAiWMxEo0DP3J1IhqvLN5rAzSZMDZcY-FX2vqXDH2JZber3LunsevRm3DjSpwJJ2fysmgh_reqIH4Nujf8gn1yMRkNe43cZgPKTc0vbDicCf7uHZsk7Fe8t8sV-S9MGMrLO_pICGgSweuAp5hNI0bkNGRwApKrZdVaF8CpmSAjwvlrtdVBEyrkBQOB2kIKm0SiYw9kV-Wm9hcinn2B14yCfPMVEftBZiPYYHmJNi3jKq905VGMHs_g";
  
  const mainImage = document.getElementById("res-image");
  const rendImg = document.getElementById("rend_img");
  const mainImgClasslist = mainImage.classList;
  const form = new FormData();
  
  const NONE_BG_IMAGES_URL = [
    "https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/without-bg/0.png",
    "https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/without-bg/1.png",
    "https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/without-bg/2.png",
    "https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/without-bg/3.png",
    "https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/without-bg/4.png",
    "https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/without-bg/5.png",
    "https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/without-bg/6.png",
    "https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/without-bg/7.png",
    "https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/without-bg/8.png"
  ];
  
  const IMAGES_URL = [
    "https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/patterns/rm-0.png",
    "https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/patterns/rm-1.png",
    "https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/patterns/rm-2.png",
    "https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/patterns/rm-3.png",
    "https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/patterns/rm-4.png",
    "https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/patterns/rm-5.png",
    "https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/patterns/rm-6.png",
    "https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/patterns/rm-7.png",
    "https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/patterns/rm-8.png"
  ];
  
  const patternData = {
    image: "none",
    imageUrl: IMAGES_URL[0],
  };
  
  function afterResourceLoad() {
    document.querySelector("#remove-bg").style.display = "block";
  }
  
  setInitialState();
  
  function setInitialState() {
    if (window.addEventListener) {
      // W3C standard
      window.addEventListener("load", afterResourceLoad);
    } else if (window.attachEvent) {
      // Microsoft
      window.attachEvent("onload", afterResourceLoad);
    }
  
    form.append("output_type", "cutout");
    appendPatterns();
  
    const imageInput = document.getElementById("upload__img");
    imageInput.addEventListener("click", function () {
      this.value = null;
    });
    imageInput.addEventListener("change", handleImageUpload);
  }
  
  function removePatternSelection() {
    const patternButton = document.querySelector("label.active_patt_btn");
    patternButton && patternButton.classList.remove("active_patt_btn");
  }
  
  function appendPatterns() {
    for (let i = 0; i < NONE_BG_IMAGES_URL.length; i++) {
      const patternElement = document.createElement("label");
      patternElement.setAttribute(`class`, `pattern_btn patt_btn_${i}`);
  
      if (i === 1) {
        patternElement.classList.add("active_patt_btn");
      }
  
      patternElement.addEventListener("click", (event) => {
        event;
        rendImg.style.display = 'none'
        removePatternSelection();
        toggleLoadingStatus();
        let thisBtn = document.querySelector(`.patt_btn_${i}`);
        thisBtn.setAttribute("id", i);
        thisBtn.classList.add("active_patt_btn");
        updateMainImage(i);
      });
  
      document.getElementById("patterns").appendChild(patternElement);
    }
  }
  
  //Updates the background of the main image element based on the selected pattern
  function updateMainImage(activeButton) {
    mainImgClasslist.remove(mainImgClasslist[mainImgClasslist.length - 1]);
  
    rendImg.style.width = "100%";
    rendImg.style.height = "auto";
    rendImg.style.display = "block"
    rendImg.src = NONE_BG_IMAGES_URL[activeButton];
    console.log(NONE_BG_IMAGES_URL[activeButton])
  
    patternData.imageUrl = IMAGES_URL[activeButton];
    toggleLoadingStatus();
    updateData(document.querySelector(".active_code_btn"), patternData);
  }
  
  //The fetch function, which sends a request to API using form data and API KEY
  async function getFetchedImage(formData, API_KEY) {
    return await fetch("https://api.picsart.io/tools/1.0/removebg", {
      method: "POST",
      headers: {
        "x-picsart-api-key": API_KEY,
      },
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong.");
      })
      .then((resData) => {
        return resData.data.url;
      })
      .catch((error) => console.error(error));
  }
  
  //Adds a loading effect also disables elements that are now unnecessary
  function toggleLoadingStatus() {
    const imageInput = document.getElementById("upload__img");
    const inputLabel = document.querySelector(".bck-img_label");
    const resImgClasslist = document.querySelector(".load").classList;
    resImgClasslist.toggle("loader");
  
    if (resImgClasslist.contains("loader")) {
      imageInput.disabled = true;
      inputLabel.style.cursor = "default";
    } else {
      imageInput.disabled = false;
      inputLabel.style.cursor = "pointer";
    }
  }
  
  //Edit new image size
  async function editFetchedImg(image) {
    const rendImgStyle = rendImg.style;
    let fetchedImgWidth = image.width;
    let fetchedImgHeight = image.height;
  
    if (fetchedImgWidth > fetchedImgHeight && fetchedImgWidth > mainImage.offsetWidth) {
      fetchedImgWidth = mainImage.offsetWidth;
      rendImgStyle.width = `${mainImage.offsetWidth}px`;
      rendImgStyle.height = "auto";
    } else if (fetchedImgHeight > fetchedImgWidth && fetchedImgWidth > mainImage.offsetWidth) {
      rendImgStyle.width = "auto";
      rendImgStyle.height = `${mainImage.offsetHeight}px`;
    }
  
    const widthDiff = rendImg.offsetWidth >= mainImage.offsetWidth * 0.96;
    const heightDiff = rendImg.offsetHeight >= mainImage.offsetHeight * 0.96;
  
    if (widthDiff && heightDiff) {
      rendImgStyle.borderRadius = "16px";
    } else {
      rendImgStyle.borderRadius = "0px";
    }
  }
  
  //Editing new main image by uploaded image
  async function uploadNewImg(file) {
    if (file) {
      form.set("image", file);
      removePatternSelection();
      toggleLoadingStatus();
      const fetchedImg = await getFetchedImage(form, API_KEY);
      patternData.image = file.name;
      patternData.imageUrl = "none";
  
      const img = new Image();
      img.src = fetchedImg;
      img.addEventListener("load", async () => {
        await editFetchedImg(img);
        rendImg.src = fetchedImg;
        toggleLoadingStatus();
      });
  
      updateData(document.querySelector(".active_code_btn"), patternData);
    }
  }
  
  //Receives an image using an event and calls the fetch function
  async function handleImageUpload(event) {
    if (event && event.target && event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      await uploadNewImg(file);
    }
  }
  
  //Adding a class when the user tries to drag an image
  mainImage.addEventListener("dragover", (event) => {
    event.preventDefault();
    mainImgClasslist.add("dragover");
  });
  
  //Delete the class when the user has gone beyond the field
  mainImage.addEventListener("dragleave", () => {
    mainImgClasslist.remove("dragover");
  });
  
  //Delete the class when the user has already put a picture and send request
  mainImage.addEventListener("drop", async (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const fileType = event.dataTransfer.files[0].type;
    mainImgClasslist.remove("dragover");
    if (
      fileType === "image/webp" ||
      fileType === "image/png" ||
      fileType === "image/jpg" ||
      fileType === "image/jpeg"
    ) {
      await uploadNewImg(file);
    }
  });
  
  const jsButton = document.querySelector(".js_btn");
  const nodejsButton = document.querySelector(".nodejs_btn");
  const javaButton = document.querySelector(".java_btn");
  const pythonButton = document.querySelector(".python_btn");
  const requirementsP = document.querySelector(".requirements");
  const codeExample = document.querySelector(".code_example");
  
  function setJsCode({ image, imageUrl }) {
    requirementsP.innerHTML = `#To send a request you need to add an image using <span class='pink'> input file event </span>`;
    codeExample.innerHTML = `
  const formData = new FormData();<br>
  formData.append(<span class='purple'>"output_type", "cutout"</span>);<br>
  formData.append(<span class='purple'>"format", "PNG"</span>);<br>
    ${imageUrl !== "none"
        ? `formData.append(<span class='purple'>"image_url", "${imageUrl}"</span>);<br>`
        : image === ""
          ? ""
          : `formData.append(<span class='purple'>"image", image</span>);<br>`
      }
  <pre>
  
  fetch(<span class='purple'>"https://api.picsart.io/tools/1.0/removebg"</span>,{
    method: <span class='purple'>"POST"</span>,
    headers: {
      <span class='purple'> "x-picsart-api-key": YOUR_ENTERED_API_KEY </span>
    },
    body: formData
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Something went wrong.");
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => console.error(error));
  </pre>`;
  }
  
  function setNodeCode({ image, imageUrl }) {
    requirementsP.innerHTML = "";
    codeExample.innerHTML = `
  const FormData = require('form-data');<br>
  const http = require("https");<br>
  const fs = require('fs');<br>
  const form = new FormData();<br>
  <br>
  form.append(<span class='purple'>"format", "PNG"</span>);<br>
  form.append(<span class='purple'>"output_type", "cutout"</span>);<br>
  
  ${imageUrl !== "none" && "0"
        ? `form.append(<span class='purple'>"image_url", "${imageUrl}"</span>);`
        : image === ""
          ? ""
          : `form.append(<span class='purple'>"image" </span>, <span class='tab'>fs.createReadStream(<span class='purple'>"${image}"</span>)</span>);<br>`
      }
  <pre>
  
  const options = {
    "method": <span class='purple'>"POST"</span>,
    "hostname": <span class='purple'>"api.picsart.io"</span>,
    "port": <span class='purple'> null </span>,
    "path": <span class='purple'>"/tools/1.0/removebg"</span>,
    "headers": {
      "accept": <span class='purple'>"application/json"</span>,
      <span class='purple'>"x-picsart-api-key": YOUR_ENTERED_API_KEY</span>,
    }  
  };
  
  const req = http.request(options, function (res) {
    const chunks = [];
    res.on("data", function (chunk) {
      chunks.push(chunk);
    });
    res.on("end", function () {
      const body = Buffer.concat(chunks);
      console.log(body.toString());
    });
  });
  req.on("error", (e) => {
    console.error(e);
  });
  form.pipe(req); 
  </pre>`;
  }
  
  function setJavaCode({ image, imageUrl }) {
    requirementsP.innerHTML = "";
    codeExample.innerHTML = `<pre>
  OkHttpClient client = new OkHttpClient().newBuilder().build();
  MediaType mediaType = MediaType.parse("multipart/form-data");
  RequestBody body = new MultipartBody.Builder().setType(MultipartBody.FORM)</pre>
  
  <span class='tab'>.addFormDataPart(<span class='purple'>"format", "PNG"</span>)</span><br>
  <span class='tab'>.addFormDataPart(<span class='purple'>"output_type", "cutout"</span>)</span><br>
    ${imageUrl !== "none"
        ? `<span class='tab'>.addFormDataPart(<span class='purple'>"image_url", "${imageUrl}"</span>)</span>`
        : !image
          ? ""
          : `<span class='tab'>RequestBody.create(MediaType.parse("application/octet-stream"),new File(<span class='purple'>"${image}"</span>))</span>
        `
      } 
  <pre>
    .build();
  
  Request request = new Request.Builder()
    .url(<span class='purple'>"https://api.picsart.io/tools/1.0/removebg"</span>)
    .method(<span class='purple'> "POST"</span>, body )
    .addHeader(<span class='purple'>"accept", "application/json"</span>)
    .addHeader(<span class='purple'>"x-picsart-api-key", YOUR_ENTERED_API_KEY</span>)
    .build();
  
  Response response = client.newCall(request).execute();</pre>`;
  }
  
  function setPythonCode({ image, imageUrl }) {
    requirementsP.innerHTML = "";
    codeExample.innerHTML = `<pre>
  import requests
  
  url = <span class='purple'>"https://api.picsart.io/tools/1.0/removebg"</span>
  payload={<span class='purple'>"format":"PNG","output_type":"cutout",</pre>
  <span>${imageUrl !== "none"
        ? `<span class='tab'><span class='purple'>"image_url":"${imageUrl}"</span>}</span>`
        : !image
          ? ""
          : `}<br>files=[<span class='purple'>
      ('image',('${image}',open('${image}','rb'),'image/png')) </span>
      ]`
      }</span>
  </span>
  <pre>
  headers = { <span class='purple'>
    "accept": "application/json"
    "x-picsart-api-key": YOUR_ENTERED_API_KEY </span>
  }
  
  response = requests.request(<span class='purple'> "POST" </span>, url, headers=headers, data=payload, files=files)
  
  print(response.text)
  </pre>`;
  }
  
  //Updating code button class when user push the button
  function updateButtonClass(clickedButton) {
    if (prevClickedButton) {
      prevClickedButton.classList.remove("active_code_btn");
    }
  
    clickedButton.classList.add("active_code_btn");
    prevClickedButton = clickedButton;
  
    if (clickedButton.classList[1] === "js_btn") {
      setJsCode(patternData);
    }
  }
  
  let prevClickedButton = null;
  updateButtonClass(jsButton);
  
  jsButton.addEventListener("click", () => {
    updateButtonClass(jsButton);
    setJsCode(patternData);
  });
  
  nodejsButton.addEventListener("click", () => {
    updateButtonClass(nodejsButton);
    setNodeCode(patternData);
  });
  
  javaButton.addEventListener("click", () => {
    updateButtonClass(javaButton);
    setJavaCode(patternData);
  });
  
  pythonButton.addEventListener("click", () => {
    updateButtonClass(pythonButton);
    setPythonCode(patternData);
  });
  
  //Updates the example data object with the current settings and displays it in the code section of the page
  function updateData(className, patternData) {
    switch (className.classList[1]) {
      case "js_btn":
        setJsCode(patternData);
        break;
      case "nodejs_btn":
        setNodeCode(patternData);
        break;
      case "java_btn":
        setJavaCode(patternData);
        break;
      case "python_btn":
        setPythonCode(patternData);
        break;
    }
  }
  
  //Copies the code displayed in the code section to the clipboard.
  function copyCode() {
    const copyBtn = document.querySelector(".copy-code_btn");
    copyBtn.addEventListener("click", function () {
      this.classList.remove("copy-code_btn:active");
    });
  
    const text = document.getElementById("text-to-copy").innerText;
    navigator.clipboard.writeText(text).then(function () {
      const btnTxt = document.querySelector(".c_btn-txt");
      btnTxt.innerText = `Copied`;
      setTimeout(() => {
        btnTxt.innerText = `Copy code`;
      }, 3000);
    });
  }
  document.getElementById('copy')?.addEventListener('click', copyCode);
  // Copies the code displayed in the code section and shares to the selected social network
  async function shareCode() {
    const shareBtn = document.querySelector(".share_btn");
    shareBtn.addEventListener("click", function () {
      this.classList.remove("share_btn:active");
    });
  
    try {
      const text = document.getElementById("text-to-copy").innerText;
      await navigator.share({
        title: "Share Generated Code",
        text: text,
        url: location.href,
      });
    } catch (err) {
      console.error(`${err.name}: ${err.message}`);
    }
  }
  document.getElementById('share')?.addEventListener('click', shareCode);
  }
  const ref = useRef(true);
    useEffect(() => {
      if (ref.current) {
        foo();
        ref.current = false;
      }
    }, []);
    const css = `
    @font-face {
    src: local("Gilroy Thin"), local("Gilroy-Thin");
    src: url("https://cdn140.picsart.com/32443984452637405043.woff2") format("woff2");
    font-family: Picsart-Fonts;
    font-style: normal;
    font-weight: 100;
    unicode-range: U+0020 —007F;
  }
  @font-face {
    src: local("Gilroy Thin Italic"), local("Gilroy-Thin-Italic");
    src: url("https://cdn140.picsart.com/58637942714921653866.woff2") format("woff2");
    font-family: Picsart-Fonts;
    font-style: italic;
    font-weight: 100;
    unicode-range: U+0020 —007F;
  }
  @font-face {
    src: local("Gilroy Thin"), local("Gilroy-Thin");
    src: url("https://cdn140.picsart.com/57546820783003045768.woff2") format("woff2");
    font-family: Picsart-Fonts;
    font-style: normal;
    font-weight: 200;
    unicode-range: U+0020 —007F;
  }
  @font-face {
    src: local("Gilroy Thin Italic"), local("Gilroy-Thin-Italic");
    src: url("https://cdn140.picsart.com/38775980189487986566.woff2") format("woff2");
    font-family: Picsart-Fonts;
    font-style: italic;
    font-weight: 200;
    unicode-range: U+0020 —007F;
  }
  @font-face {
    src: local("Gilroy Light"), local("Gilroy-Light");
    src: url("https://cdn140.picsart.com/38402316032204163198.woff2") format("woff2");
    font-family: Picsart-Fonts;
    font-style: normal;
    font-weight: 300;
    unicode-range: U+0020 —007F;
  }
  @font-face {
    src: local("Gilroy Light Italic"), local("Gilroy-Light-Italic");
    src: url("https://cdn140.picsart.com/29500540257975766312.woff2") format("woff2");
    font-family: Picsart-Fonts;
    font-style: italic;
    font-weight: 300;
    unicode-range: U+0020 —007F;
  }
  @font-face {
    src: local("Gilroy Regular"), local("Gilroy-Regular");
    src: url("https://cdn140.picsart.com/31072274683066559421.woff2") format("woff2");
    font-family: Picsart-Fonts;
    font-style: normal;
    font-weight: 400;
    unicode-range: U+0020 —007F;
  }
  @font-face {
    src: local("Gilroy Regular Italic"), local("Gilroy-Regular-Italic");
    src: url("https://cdn140.picsart.com/76786270976937922427.woff2") format("woff2");
    font-family: Picsart-Fonts;
    font-style: italic;
    font-weight: 400;
    unicode-range: U+0020 —007F;
  }
  @font-face {
    src: local("Gilroy Medium"), local("Gilroy-Medium");
    src: url("https://cdn140.picsart.com/11276460729995425074.woff2") format("woff2");
    font-family: Picsart-Fonts;
    font-style: normal;
    font-weight: 500;
    unicode-range: U+0020 —007F;
  }
  @font-face {
    src: local("Gilroy Medium Italic"), local("Gilroy-Medium-Italic");
    src: url("https://cdn140.picsart.com/17786087690064629089.woff2") format("woff2");
    font-family: Picsart-Fonts;
    font-style: italic;
    font-weight: 500;
    unicode-range: U+0020 —007F;
  }
  @font-face {
    src: local("Gilroy SemiBold"), local("Gilroy-SemiBold");
    src: url("https://cdn140.picsart.com/74259325996804646481.woff2") format("woff2");
    font-family: Picsart-Fonts;
    font-style: normal;
    font-weight: 600;
    unicode-range: U+0020 —007F;
  }
  @font-face {
    src: local("Gilroy SemiBold Italic"), local("Gilroy-SemiBold-Italic");
    src: url("https://cdn140.picsart.com/06466915343074890181.woff2") format("woff2");
    font-family: Picsart-Fonts;
    font-style: italic;
    font-weight: 600;
    unicode-range: U+0020 —007F;
  }
  @font-face {
    src: local("Gilroy Bold"), local("Gilroy-Bold");
    src: url("https://cdn140.picsart.com/96827950530598412943.woff2") format("woff2");
    font-family: Picsart-Fonts;
    font-style: normal;
    font-weight: 700;
    unicode-range: U+0020 —007F;
  }
  @font-face {
    src: local("Gilroy Bold Italic"), local("Gilroy-Bold-Italic");
    src: url("https://cdn140.picsart.com/72216519682946598244.woff2") format("woff2");
    font-family: Picsart-Fonts;
    font-style: italic;
    font-weight: 700;
    unicode-range: U+0020 —007F;
  }
  @font-face {
    src: local("Gilroy ExtraBold"), local("Gilroy-ExtraBold");
    src: url("https://cdn140.picsart.com/44746208974633542425.woff2") format("woff2");
    font-family: Picsart-Fonts;
    font-style: normal;
    font-weight: 800;
    unicode-range: U+0020 —007F;
  }
  @font-face {
    src: local("Gilroy ExtraBold Italic"), local("Gilroy-ExtraBold Italic");
    src: url("https://cdn140.picsart.com/94239790747985677850.woff2") format("woff2");
    font-family: Picsart-Fonts;
    font-style: italic;
    font-weight: 800;
    unicode-range: U+0020 —007F;
  }
  @font-face {
    src: local("Gilroy Black"), local("Gilroy-Black");
    src: url("https://cdn140.picsart.com/35699436680161743020.woff2") format("woff2");
    font-family: Picsart-Fonts;
    font-style: normal;
    font-weight: 900;
    unicode-range: U+0020 —007F;
  }
  @font-face {
    src: local("Gilroy Black Italic"), local("Gilroy-Black-Italic");
    src: url("https://cdn140.picsart.com/82495408477170742715.woff2") format("woff2");
    font-family: Picsart-Fonts;
    font-style: italic;
    font-weight: 900;
    unicode-range: U+0020 —007F;
  }
    @import 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@600&display=swap';

#remove-bg {
    font-family: picsart-fonts !important;
    font-weight: 400;
    width: 1296px !important;
    height: 864px !important;
    margin: 0 auto
}

#remove-bg header {
    text-align: center
}

.heading {
    margin-top: 64px;
    font-weight: 500;
    font-size: 60px;
    line-height: 72px
}

.main__container {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    gap: 24px
}

.main__content {
    background-color: #f7f7f7 !important;
    position: relative;
    padding: 24px;
    display: flex;
    border-radius: 24px
}

.main__edit-params {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 40%;
    min-width: 232px
}

.subtitle {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    white-space: nowrap
}

.patt_div {
    color: gray !important;
    display: flex;
    flex-direction: column;
    gap: 12px 8px
}

.patt__head {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px
}

#patterns {
    display: flex;
    flex-wrap: wrap;
    gap: 8px
}

.patt_btn {
    background-image: var(--url);
    width: 72px;
    height: 72px;
    border-radius: 4px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    background-size: cover;
    box-sizing: border-box
}

#patt_img {
    width: auto;
    height: 50px;
    display: block;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none
}

.patt_btn_0 {
    --url: url(https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/patterns/rm-0.png)
}

.patt_btn_1 {
    --url: url(https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/patterns/rm-1.png)
}

.patt_btn_2 {
    --url: url(https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/patterns/rm-2.png)
}

.patt_btn_3 {
    --url: url(https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/patterns/rm-3.png)
}

.patt_btn_4 {
    --url: url(https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/patterns/rm-4.png)
}

.patt_btn_5 {
    --url: url(https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/patterns/rm-5.png)
}

.patt_btn_6 {
    --url: url(https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/patterns/rm-6.png)
}

.patt_btn_7 {
    --url: url(https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/patterns/rm-7.png)
}

.patt_btn_8 {
    --url: url(https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/patterns/rm-8.png)
}

.active_patt_btn {
    border: 2px solid #c209c1 !important;
    border-radius: 6px !important
}

#upload_background-image {
    visibility: hidden;
    cursor: pointer;
    position: absolute;
    z-index: -1
}

.upload_txt {
    font-size: medium !important;
    font-size: 16px !important
}

#upload__img {
    display: none
}

.edit-params-text_div {
    margin-top: 20px
}

.edit-params_txt {
    margin: 0 12px 0 0;
    font-weight: 600;
    text-align: center
}

.bck-img_label {
    position: absolute;
    color: #c209c1 !important;
    left: 64px;
    top: 512px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px, 16px;
    gap: 8px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer
}

.loader {
    position: absolute;
    border-top: 4px solid #c209c1 !important;
    border-bottom: 4px solid #c209c1 !important;
    border-right: 4px solid #c209c1 !important;
    border-left: 4px solid transparent !important;
    border-radius: 50%;
    width: 39px;
    height: 39px;
    animation: spin 1s linear infinite
}

@keyframes spin {
    0% {
        transform: rotate(0)
    }
    100% {
        transform: rotate(360deg)
    }
}

.main__result-img {
    height: 532px;
    display: flex;
    flex-direction: column;
    gap: 10px
}

.result-img__div {
    display: flex;
    justify-content: center;
    align-items: center
}

#res-image {
    background-image: url(https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/transparent.png) !important;
    background: no-repeat;
    background-size: cover;
    height: 532px;
    width: 450px;
    border-radius: 16px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background-position: 50%
}

#rend_img {
    width: 100%;
    height: auto;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none
}

.dragover {
    border: 2px dashed #c209c1 !important
}

.main__req-code {
    background-color: #f7f7f7 !important;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 24px;
    padding: 23px 24px
}

#req_code {
    width: 470px;
    height: 470px;
    overflow: scroll;
    font-size: 16px;
    line-height: 24px;
    color: #000 !important
}

.requirements, .code_example, .code_example p, .code_example pre {
    font-family: source code pro, monospace;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin: 0
}

.tab {
    display: inline-block;
    margin-left: 1em
}

.code_example {
    margin-top: 20px
}

.code_buttons {
    display: flex;
    gap: 33px
}

.c_btn {
    cursor: pointer;
    white-space: nowrap;
    padding: 12px 16px;
    gap: 8px;
    background: #fff !important;
    box-shadow: 0 1px 4px rgba(17, 18, 54, .16) !important;
    border-radius: 32px;
    color: #5a00ee !important;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    border: 0;
    outline: none !important
}

.c_btn:hover {
    background-color: #dacafb !important
}

.c_btn-i, .share_btn {
    display: none
}

.active_code_btn {
    background-color: #dacafb !important
}

#remove-bg footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 16px auto;
    width: 1296px
}

.find {
    display: flex;
    align-items: center
}

.find a {
    white-space: nowrap;
    text-decoration: none !important;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    margin-top: 12px;
    margin-left: 24px;
    line-height: 24px;
    color: #c209c1 !important
}

.find a:hover {
    color: #ededed !important
}

.footer_btns {
    display: flex;
    flex-direction: row;
    gap: 10px
}

.footer_btns button:hover {
    background: #ededed !important
}

.api-key_btn, .copy-code_btn {
    padding: 12px 24px;
    color: #c209c1 !important;
    border-radius: 72px;
    border: 1px solid #cbcbcb !important;
    background-color: #fff !important;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    outline: none !important
}

.copy-code_btn:hover, .api-key_btn:hover, .share_btn:hover {
    background-color: #f0f0f0 !important
}

.purple {
    color: #5a00ee !important
}

.pink {
    color: #c209c1 !important
}

#remove-bg ::-webkit-scrollbar {
    width: 3px !important;
    height: 3px !important
}

#remove-bg ::-webkit-scrollbar-thumb {
    background: #c209c1;
    border-radius: 10px
}

#remove-bg ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 grey !important;
    border-radius: 10px
}

@media only screen and (max-width: 600px) {
    #remove-bg {
        padding: 0;
        width: 375px !important;
        height: 1212px !important
    }

    .heading {
        margin-top: 24px;
        margin-bottom: 17.38px;
        height: 36px;
        font-weight: 600;
        font-size: 30px;
        line-height: 36px
    }

    .main__container {
        margin: 0;
        padding: 0;
        justify-content: center;
        flex-direction: column;
        gap: 48px
    }

    .result-img__div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 327px;
        width: 327px
    }

    .main__content {
        background-color: #fff !important;
        margin: 0 24px;
        flex-direction: column-reverse;
        width: 327px;
        height: 514px
    }

    .main__result-img {
        position: absolute;
        top: 0;
        left: 0;
        height: 327px;
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        gap: 10px
    }

    .edit-params-text_div {
        display: none
    }

    .bck-img_label {
        background-color: #fff;
        left: 0;
        top: 142px;
        bottom: 0;
        width: 327px;
        height: 48px;
        border: 1px solid #cbcbcb;
        border-radius: 72px
    }

    #res-image {
        background-image: url(https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/transparent_small.png) !important;
        margin: 0;
        height: 327px;
        width: 327px
    }

    #patterns {
        width: 327px;
        height: 80px;
        overflow-x: scroll;
        overflow-y: hidden;
        grid-gap: 8px;
        display: grid;
        grid-template-columns:repeat(9, 1fr)
    }

    .patt_btn {
        object-fit: cover
    }

    #patt_img {
        width: auto;
        height: 50px;
        display: block
    }

    .main__edit-params {
        position: absolute;
        top: 346px;
        left: 0
    }

    .main__req-code {
        padding: 0;
        border-radius: 0;
        position: relative;
        width: 375px;
        height: 384px
    }

    #req_code {
        width: 327px;
        height: 264px;
        font-size: 16px;
        line-height: 24px
    }

    .code_buttons {
        position: absolute;
        gap: 12px;
        width: 350px;
        overflow-x: scroll;
        overflow-y: hidden;
        left: 24px;
        bottom: 24px
    }

    .copy-code_btn, .share_btn {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 0;
        padding: 0;
        border-radius: 24px;
        background-color: #f2f2f2 !important;
        border: none !important
    }

    .c_btn-i {
        display: block
    }

    .c_btn-txt {
        display: none
    }

    #remove-bg footer {
        width: 375px;
        flex-direction: column;
        position: absolute
    }

    .footer_btns {
        align-self: flex-end
    }

    .api-key_btn:hover {
        background-color: #fff !important
    }

    .api-key_btn {
        white-space: nowrap;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        width: 124px;
        height: 40px;
        border: 1px solid #c209c1 !important;
        padding: 0
    }

    .find {
        position: absolute;
        top: 100px;
        bottom: 44px;
        left: 124px;
        right: 123px
    }

    .find a {
        margin: 0
    }

    #remove-bg ::-webkit-scrollbar {
        width: 0 !important;
        height: 0 !important
    }
}

@media (min-width: 960px) and (max-width: 1320px) {
    #remove-bg {
        padding: 0;
        width: 862px !important;
        height: 1024px !important
    }

    .heading {
        margin-top: 64px;
        margin-bottom: 40px;
        font-size: 36px;
        line-height: 48px
    }

    .main__content {
        padding: 16px 16px 32px
    }

    .main__edit-params {
        gap: 34px;
        min-width: 232px
    }

    .subtitle {
        margin-top: 14px;
        font-size: 16px;
        line-height: 24px;
        color: #000
    }

    .patt_div {
        gap: 12px 4px
    }

    .patt__head {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px
    }

    #patterns {
        gap: 8px
    }

    .patt_btn {
        width: 62px;
        height: 62px
    }

    #patt_img {
        width: auto;
        height: 36px
    }

    .edit-params_txt {
        margin: 0 24px 0 0
    }

    .bck-img_label {
        position: absolute;
        color: #c209c1;
        left: 48px;
        top: 516px;
        gap: 8px
    }

    .main__result-img {
        height: 532px;
        gap: 10px
    }

    #res-image {
        height: 536px;
        width: 385px
    }

    .main__req-code {
        padding: 16px 16px 15px
    }

    #req_code {
        width: 277px;
        height: 400px
    }

    .code_buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 16px
    }

    .c_btn {
        width: 130px;
        height: 40px;
        justify-content: center
    }

    #remove-bg footer {
        display: flex;
        justify-content: space-between;
        margin: 16px 0 0 -42px;
        width: 960px
    }
}

@media (min-width: 600px) and (max-width: 960px) {
    #remove-bg {
        width: 786px !important;
        height: 1172px !important;
        padding: 0
    }

    .main__container {
        flex-direction: column
    }

    .main__content {
        padding: 32px 0 16px 16px
    }

    .heading {
        margin-bottom: 40px;
        font-size: 36px;
        line-height: 48px
    }

    .main__edit-params {
        gap: 34px;
        width: 210px
    }

    .subtitle {
        margin-top: 0;
        font-size: 16px;
        line-height: 24px
    }

    .patt_div {
        gap: 12px 4px
    }

    #patterns {
        gap: 8px
    }

    .patt_btn {
        width: 62px;
        height: 62px
    }

    #patt_img {
        width: auto;
        height: 36px
    }

    .bck-img_label {
        position: absolute;
        color: #c209c1;
        left: 48px;
        top: 516px;
        gap: 8px
    }

    #patterns {
        gap: 8px
    }

    .patt_btn {
        width: 62px;
        height: 62px
    }

    .result-img__div {
        display: flex;
        justify-content: center;
        align-items: center
    }

    #res-image {
        width: 466px
    }

    .main__req-code {
        align-items: flex-start;
        padding: 16px
    }

    #req_code {
        width: 688px;
        height: 208px
    }

    .code_buttons {
        margin-top: 24px;
        gap: 16px;
        justify-content: flex-start
    }

    .c_btn {
        width: 130px;
        height: 40px;
        justify-content: center
    }

    #remove-bg footer {
        width: 736px;
        margin: 16px 0 0
    }
}
    #patt_img {
        height: 50px;
      }

      #remove-bg {
        width: 1296px !important;
        height: 864px !important;
        margin: 0 auto;
      }

      @media only screen and (max-width: 600px) {
        #remove-bg {
          padding: 0px;
          width: 375px !important;
          height: 1212px !important;
        }

        #rend_img {
          height: 218px;
        }

        #patt_img {
          height: 50px;
        }
        .pattern_btn {
          object-fit: cover !important;
        }
      }

      @media (min-width: 960px) and (max-width: 1320px) {
        #remove-bg {
          padding: 0px;
          width: 862px !important;
          height: 1024px !important;
        }

        #patt_img {
          height: 36px;
        }

        .pattern_btn {
          width: 62px !important;
          height: 62px !important;
        }
      }

      @media (min-width: 600px) and (max-width: 960px) {
        #remove-bg {
          width: 786px !important;
          height: 1172px !important;
          padding: 0 24px;
        }

        #patt_img {
          height: 36px;
        }

        .pattern_btn {
          width: 62px !important;
          height: 62px !important;
        }
      }

      .pattern_btn {
        background-image: var(--url);
        width: 72px;
        height: 72px;
        border-radius: 4px !important;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;
        background-size: cover;
        box-sizing: border-box;
      }

      /* pattern icons urls */
      .patt_btn_0 {
        --url: url(https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/patterns/rm-0.png);
      }

      .patt_btn_1 {
        --url: url(https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/patterns/rm-1.png);
      }

      .patt_btn_2 {
        --url: url(https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/patterns/rm-2.png);
      }

      .patt_btn_3 {
        --url: url(https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/patterns/rm-3.png);
      }

      .patt_btn_4 {
        --url: url(https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/patterns/rm-4.png);
      }

      .patt_btn_5 {
        --url: url(https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/patterns/rm-5.png);
      }

      .patt_btn_6 {
        --url: url(https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/patterns/rm-6.png);
      }

      .patt_btn_7 {
        --url: url(https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/patterns/rm-7.png);
      }

      .patt_btn_8 {
        --url: url(https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/patterns/rm-8.png);
      }

      .active_patt_btn {
        border: 2px solid #c209c1 !important;
        border-radius: 6px !important;
      }

        @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@600&display=swap');

#remove-bg {
  font-family: 'Picsart-Fonts' !important;
  font-weight: 400;
  width: 1296px !important;
  height: 864px !important;
  margin: 0 auto;
}

#remove-bg header {
  text-align: center;
}

.heading {
  margin-top: 64px;
  font-weight: 500;
  font-size: 60px;
  line-height: 72px;
}

.main__container {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 24px;
}

.main__content {
  background-color: #f7f7f7 !important;
  position: relative;
  padding: 24px;
  display: flex;
  border-radius: 24px;
}

.main__edit-params {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 40%;
  min-width: 232px;
}

.subtitle {
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  white-space: nowrap;
}

.patt_div {
  color: #808080 !important;
  display: flex;
  flex-direction: column;
  gap: 12px 8px;
}

.patt__head {
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
}

#patterns {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

#patt_img {
  width: auto;
  height: 50px;
  display: block;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}

#upload_background-image {
  visibility: hidden;
  cursor: pointer;
  position: absolute;
  z-index: -1;
}

.upload_txt {
  font-size: medium !important;
  font-size: 16px !important;
}

#upload__img {
  display: none;
}
.edit-params-text_div {
  margin-top: 20px;
}

.edit-params_txt {
  margin: 0 12px 0px 0;
  font-weight: 600;
  text-align: center;
}

.bck-img_label {
  position: absolute;
  color: #c209c1 !important;
  left: 64px;
  top: 512px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px, 16px;
  gap: 8px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
}

.loader {
  position: absolute;
  border-top: 4px solid #c209c1 !important;
  border-bottom: 4px solid #c209c1 !important;
  border-right: 4px solid #c209c1 !important;
  border-left: 4px solid transparent !important;
  border-radius: 50%;
  width: 39px;
  height: 39px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.main__result-img {
  height: 532px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.result-img__div {
  display: flex;
  justify-content: center;
  align-items: center;
}


#rend_img {
  width: 100%;
  height: auto;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}

.dragover {
  border: 2px dashed #c209c1 !important;
}

.main__req-code {
  background-color: #f7f7f7 !important;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 24px;
  padding: 23px 24px;
}

#req_code {
  width: 470px;
  height: 470px;
  overflow: scroll;
  font-size: 16px;
  line-height: 24px;
  color: #000000 !important;
}

.requirements,
.code_example,
.code_example p,
.code_example pre {
  font-family: 'Source Code Pro', monospace;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
}

.tab {
  display: inline-block;
  margin-left: 1em;
}

.code_example {
  margin-top: 20px;
}

.code_buttons {
  display: flex;
  gap: 33px;
}

.c_btn {
  cursor: pointer;
  white-space: nowrap;
  padding: 12px 16px;
  gap: 8px;
  background: #ffffff !important;
  box-shadow: 0px 1px 4px rgba(17, 18, 54, 0.16) !important;
  border-radius: 32px;
  color: #5a00ee !important;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  border: 0px;
  outline: none !important;
}

.c_btn:hover {
  background-color: #dacafb !important;
}

.c_btn-i,
.share_btn {
  display: none;
}

.active_code_btn {
  background-color: #dacafb !important;
}

#remove-bg footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 16px auto;
  width: 1296px;
}

.find {
  display: flex;
  align-items: center;
}

.find a {
  white-space: nowrap;
  text-decoration: none !important;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  margin-top: 12px;
  margin-left: 24px;
  line-height: 24px;
  color: #c209c1 !important;
}

.find a:hover {
  color: #ededed !important;
}

.footer_btns {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.footer_btns button:hover {
  background: #ededed !important;
}

.api-key_btn,
.copy-code_btn {
  padding: 12px 24px;
  color: #c209c1 !important;
  border-radius: 72px;
  border: 1px solid #cbcbcb !important;
  background-color: #ffffff !important;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  outline: none !important;
}

.copy-code_btn:hover,
.api-key_btn:hover,
.share_btn:hover {
  background-color: #f0f0f0 !important;
}

.purple {
  color: #5a00ee !important;
}

.pink {
  color: #c209c1 !important;
}

#remove-bg ::-webkit-scrollbar {
  width: 3px !important;
  height: 3px !important;
}

#remove-bg ::-webkit-scrollbar-thumb {
  background: #c209c1;
  border-radius: 10px;
}

#remove-bg ::-webkit-scrollbar-track {
  box-shadow: inset 0 0 grey !important;
  border-radius: 10px;
}

@media only screen and (max-width: 600px) {
  #remove-bg {
    padding: 0px;
    width: 375px !important;
    height: 1212px !important;
  }

  .heading {
    margin-top: 24px;
    margin-bottom: 17.38px;
    height: 36px;
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
  }

  .main__container {
    margin: 0;
    padding: 0;
    justify-content: center;
    flex-direction: column;
    gap: 48px;
  }

  .result-img__div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 327px;
    width: 327px;
  }

  .main__content {
    background-color: white !important;
    margin: 0 24px;
    flex-direction: column-reverse;
    width: 327px;
    height: 514px;
  }

  .main__result-img {
    position: absolute;
    top: 0;
    left: 0;
    height: 327px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    gap: 10px;
  }

  .edit-params-text_div {
    display: none;
  }

  .bck-img_label {
    background-color: white;
    left: 0;
    top: 142px;
    bottom: 0;
    width: 327px;
    height: 48px;
    border: 1px solid #cbcbcb;
    border-radius: 72px;
  }


  #patterns {
    width: 327px;
    height: 80px;
    overflow-x: scroll;
    overflow-y: hidden;
    grid-gap: 8px;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
  }

  .patt_btn {
    object-fit: cover;
  }

  #patt_img {
    width: auto;
    height: 50px;
    display: block;
  }

  .main__edit-params {
    position: absolute;
    top: 346px;
    left: 0;
  }

  .main__req-code {
    padding: 0;
    border-radius: 0;
    position: relative;
    width: 375px;
    height: 384px;
  }

  #req_code {
    width: 327px;
    height: 264px;
    font-size: 16px;
    line-height: 24px;
  }

  .code_buttons {
    position: absolute;
    gap: 12px;
    width: 350px;
    overflow-x: scroll;
    overflow-y: hidden;
    left: 24px;
    bottom: 24px;
  }

  .copy-code_btn,
  .share_btn {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 0;
    padding: 0;
    border-radius: 24px;
    background-color: #f2f2f2 !important;
    border: none !important;
  }

  .c_btn-i {
    display: block;
  }

  .c_btn-txt {
    display: none;
  }

  #remove-bg footer {
    width: 375px;
    flex-direction: column;
    position: absolute;
  }

  .footer_btns {
    align-self: flex-end;
  }

  .api-key_btn:hover {
    background-color: white !important;
  }

  .api-key_btn {
    white-space: nowrap;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    width: 124px;
    height: 40px;
    border: 1px solid #c209c1 !important;
    padding: 0px;
  }

  .find {
    position: absolute;
    top: 100px;
    bottom: 44px;
    left: 124px;
    right: 123px;
  }

  .find a {
    margin: 0;
  }

  #remove-bg ::-webkit-scrollbar {
    width: 0px !important;
    height: 0px !important;
  }
}

@media (min-width: 960px) and (max-width: 1320px) {
  #remove-bg {
    padding: 0px;
    width: 862px !important;
    height: 1024px !important;
  }

  .heading {
    margin-top: 64px;
    margin-bottom: 40px;
    font-size: 36px;
    line-height: 48px;
  }

  .main__content {
    padding: 16px 16px 32px 16px;
  }

  .main__edit-params {
    gap: 34px;
    min-width: 232px;
  }

  .subtitle {
    margin-top: 14px;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }

  .patt_div {
    gap: 12px 4px;
  }

  .patt__head {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
  }

  #patterns {
    gap: 8px;
  }

  #patt_img {
    width: auto;
    height: 36px;
  }

  .edit-params_txt {
    margin: 0 24px 0 0;
  }

  .bck-img_label {
    position: absolute;
    color: #c209c1;
    left: 48px;
    top: 516px;
    gap: 8px;
  }

  .main__result-img {
    height: 532px;
    gap: 10px;
  }

  #res-image {
    height: 536px;
    width: 385px;
  }

  .main__req-code {
    padding: 16px 16px 15px 16px;
  }

  #req_code {
    width: 277px;
    height: 400px;
  }

  .code_buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  .c_btn {
    width: 130px;
    height: 40px;
    justify-content: center;
  }

  #remove-bg footer {
    display: flex;
    justify-content: space-between;
    margin: 16px 0 0px -42px;
    width: 960px;
  }
}

@media (min-width: 600px) and (max-width: 960px) {
  #remove-bg {
    width: 786px !important;
    height: 1172px !important;
    padding: 0;
  }

  .main__container {
    flex-direction: column;
  }

  .main__content {
    padding: 32px 0 16px 16px;
  }

  .heading {
    margin-bottom: 40px;
    font-size: 36px;
    line-height: 48px;
  }

  .main__edit-params {
    gap: 34px;
    width: 210px;
  }

  .subtitle {
    margin-top: 0;
    font-size: 16px;
    line-height: 24px;
  }

  .patt_div {
    gap: 12px 4px;
  }

  #patterns {
    gap: 8px;
  }

  #patt_img {
    width: auto;
    height: 36px;
  }

  .bck-img_label {
    position: absolute;
    color: #c209c1;
    left: 48px;
    top: 516px;
    gap: 8px;
  }

  #patterns {
    gap: 8px;
  }

  .result-img__div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #res-image {
    width: 466px;
  }

  .main__req-code {
    align-items: flex-start;
    padding: 16px;
  }

  #req_code {
    width: 688px;
    height: 208px;
  }

  .code_buttons {
    margin-top: 24px;
    gap: 16px;
    justify-content: flex-start;
  }

  .c_btn {
    width: 130px;
    height: 40px;
    justify-content: center;
  }

  #remove-bg footer {
    width: 736px;
    margin: 16px 0 0 0;
  }
}

    `;
    return (
        <>
        <style>{css}</style>
            <div id="remove-bg">
      <header>
        <div className="heading">Try Now</div>
      </header>
      <main className="main__container">
        <div className="main__content">
          <div className="main__edit-params">
            <div className="subtitle">Try one of these images:</div>
            <div>
              <div className="patt_div">
                <div id="patterns"></div>
              </div>
            </div>
            <div className="edit-params-text_div">
              <p className="edit-params_txt">Can't pick?</p>
              <p className="edit-params_txt">Upload your own image</p>
            </div>

            <div className="upload-btn_div gtm-track-try-demo">
              <input
                type="file"
                id="upload__img"
                accept=".png, .jpg, .jpeg, .webp"
              />
              <label htmlFor="upload__img" className="bck-img_label gtm-track-try-demo">
                <i
                  className="upload_img"
                  style={{
                    display: "inline-block",
                    width: "24px",
                    height: "21px",
                    backgroundImage: `url(data:image/svg+xml,${uploadSVG})`
                  }}
                ></i>
                Upload photo
              </label>
            </div>
          </div>
          <div className="main__result-img">
            <div className="result-img__div">
              <div className="load"></div>
              <div id="res-image" className="drop-zone">
                <input
                  type="file"
                  id="upload__img"
                  className="drop-zone__input"
                  accept=".png, .jpg, .jpeg, .webp"
                />
                <img
                  alt="Three joyful individuals leaping in the air on a snowy day with trees and a street caution sign in the background"
                  id="rend_img"
                  width="450"
                  height="310"
                  src="https://picsart.io/wp-content/mu-plugins/demos/remove-background/img/without-bg/1.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="main__req-code">
          <div id="req_code">
            <p className="requirements"></p>
            <div className="code_example" id="text-to-copy"></div>
          </div>
          <div className="code_buttons">
            <button className="c_btn js_btn gtm-track-try-demo">JS / React</button>
            <button className="c_btn nodejs_btn gtm-track-try-demo">JS / Node</button>
            <button className="c_btn java_btn gtm-track-try-demo">Java</button>
            <button className="c_btn python_btn gtm-track-try-demo">Python</button>
          </div>
        </div>
      </main>
      <footer>
        <div className="find">
          <a href="https://picsart.io/api-reference" className="gtm-track-try-demo" target="_blank"
            >Find more details
            </a>
        </div>
        <div className="footer_btns">
          <form
            action="https://console.picsart.io/login"
            target="_blank"
            method="get"
          >
            <button className="api-key_btn gtm-track-try-demo">Get API key</button>
          </form>
          <button
            id="copy"
            className="copy-code_btn gtm-track-try-demo"
            aria-label="aria-copy"
          >
            <span className="c_btn-txt">Copy code</span>
            <i
              className="c_btn-i"
              style={{
                width: "17px",
                height: "17px",
                backgroundImage: `url(data:image/svg+xml,${copySVG})`
              }}
            >
            </i>
          </button>
          <button
            id="share"
            className="share_btn"
            aria-label="aria-share"
          >
            <i
              className="c_btn-i"
              style={{
                width: "17px",
                height: "17px",
                backgroundImage: `url(data:image/svg+xml,${shareSVG})`
              }}
            >
            </i>
          </button>
        </div>
      </footer>
    </div>
        </>
    );
}