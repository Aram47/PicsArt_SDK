// const API_KEY = pi_custom_settings.demo_api_key;
const API_KEY = "eyJraWQiOiI5NzIxYmUzNi1iMjcwLTQ5ZDUtOTc1Ni05ZDU5N2M4NmIwNTEiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhdXRoLXNlcnZpY2UtYzFhYTg5ODAtODBmNi00ZWZjLTkwZTAtOThiMjljNjEyNzdlIiwiYXVkIjoiNDY4NTc2NzQwMDExMTAxIiwibmJmIjoxNzQ0NjM1ODc2LCJzY29wZSI6WyJiMmItYXBpLmdlbl9haSIsImIyYi1hcGkuaW1hZ2VfYXBpIl0sImlzcyI6Imh0dHBzOi8vYXBpLnBpY3NhcnQuY29tL3Rva2VuLXNlcnZpY2UiLCJvd25lcklkIjoiNDY4NTc2NzQwMDExMTAxIiwiaWF0IjoxNzQ0NjM1ODc2LCJqdGkiOiIzNWNmZTJhNi0xNDczLTRkMmYtYTU0Ny02ZGI5ZDY5M2E5MDMifQ.C8_KvtOLyimxRQYdA7yQO8LHZnjCqFBrogq0C09I7saQgaRxvS8cl2jHzMVhiCqQ4xXDNwGfgjIViUOxObtwzsGcfw3vy_YMjAiWMxEo0DP3J1IhqvLN5rAzSZMDZcY-FX2vqXDH2JZber3LunsevRm3DjSpwJJ2fysmgh_reqIH4Nujf8gn1yMRkNe43cZgPKTc0vbDicCf7uHZsk7Fe8t8sV-S9MGMrLO_pICGgSweuAp5hNI0bkNGRwApKrZdVaF8CpmSAjwvlrtdVBEyrkBQOB2kIKm0SiYw9kV-Wm9hcinn2B14yCfPMVEftBZiPYYHmJNi3jKq905VGMHs_g";

const mainImage = document.getElementById("res-image");
const rendImg = document.getElementById("rend_img");
const mainImgClasslist = mainImage.classList;
const form = new FormData();

const NONE_BG_IMAGES_URL = [
  "./img/without-bg/0.png",
  "./img/without-bg/1.png",
  "./img/without-bg/2.png",
  "./img/without-bg/3.png",
  "./img/without-bg/4.png",
  "./img/without-bg/5.png",
  "./img/without-bg/6.png",
  "./img/without-bg/7.png",
  "./img/without-bg/8.png",
];

const IMAGES_URL = [
  "./img/patterns/rm-0.png",
  "./img/patterns/rm-1.png",
  "./img/patterns/rm-2.png",
  "./img/patterns/rm-3.png",
  "./img/patterns/rm-4.png",
  "./img/patterns/rm-5.png",
  "./img/patterns/rm-6.png",
  "./img/patterns/rm-7.png",
  "./img/patterns/rm-8.png",
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
