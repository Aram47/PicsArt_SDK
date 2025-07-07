// const API_KEY = pi_custom_settings.demo_api_key;
const API_KEY = "eyJraWQiOiI5NzIxYmUzNi1iMjcwLTQ5ZDUtOTc1Ni05ZDU5N2M4NmIwNTEiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhdXRoLXNlcnZpY2UtYzFhYTg5ODAtODBmNi00ZWZjLTkwZTAtOThiMjljNjEyNzdlIiwiYXVkIjoiNDY4NTc2NzQwMDExMTAxIiwibmJmIjoxNzQ0NjM1ODc2LCJzY29wZSI6WyJiMmItYXBpLmdlbl9haSIsImIyYi1hcGkuaW1hZ2VfYXBpIl0sImlzcyI6Imh0dHBzOi8vYXBpLnBpY3NhcnQuY29tL3Rva2VuLXNlcnZpY2UiLCJvd25lcklkIjoiNDY4NTc2NzQwMDExMTAxIiwiaWF0IjoxNzQ0NjM1ODc2LCJqdGkiOiIzNWNmZTJhNi0xNDczLTRkMmYtYTU0Ny02ZGI5ZDY5M2E5MDMifQ.C8_KvtOLyimxRQYdA7yQO8LHZnjCqFBrogq0C09I7saQgaRxvS8cl2jHzMVhiCqQ4xXDNwGfgjIViUOxObtwzsGcfw3vy_YMjAiWMxEo0DP3J1IhqvLN5rAzSZMDZcY-FX2vqXDH2JZber3LunsevRm3DjSpwJJ2fysmgh_reqIH4Nujf8gn1yMRkNe43cZgPKTc0vbDicCf7uHZsk7Fe8t8sV-S9MGMrLO_pICGgSweuAp5hNI0bkNGRwApKrZdVaF8CpmSAjwvlrtdVBEyrkBQOB2kIKm0SiYw9kV-Wm9hcinn2B14yCfPMVEftBZiPYYHmJNi3jKq905VGMHs_g";
const mainImage = document.getElementById('res-image');
const rendImg = document.getElementById('rend_img');
const mainImgClasslist = mainImage.classList;
const form = new FormData();

const NONE_BG_IMAGES_URL = [
  'https://pastatic.picsart.com/cms-pastatic/ba799f69-9894-4cd7-808b-d14dfd424e81.png',
  'https://pastatic.picsart.com/cms-pastatic/4409b861-7ac2-448f-a9a8-a9101f8ff48a.png',
  'https://pastatic.picsart.com/cms-pastatic/220e357f-e24f-4df6-9d75-15b06caa3b88.png',
  'https://pastatic.picsart.com/cms-pastatic/d229088d-3323-45e7-9102-a25c7aeb79d9.png',
  'https://pastatic.picsart.com/cms-pastatic/91d70c86-29c7-466a-aedf-24f830aca432.png',
  'https://pastatic.picsart.com/cms-pastatic/6d60b70a-106e-42d4-9e5e-a03ccefd7cde.png',
  'https://pastatic.picsart.com/cms-pastatic/b4d1671d-02e4-4944-9837-726da99a769d.png',
  'https://pastatic.picsart.com/cms-pastatic/ff7e77f5-54a8-4d95-b138-5f808c8f8748.png',
  'https://pastatic.picsart.com/cms-pastatic/a8cb90fd-4937-4f38-a26b-909ff1097810.png',
];

const IMAGES_URL = [
  'https://picsart.io/wp-content/uploads/2024/02/97ff2ec7-2f17-44a9-86a6-20d19db6ecd8.jpg',
  'https://picsart.io/wp-content/uploads/2024/02/e69b14a1-47cf-48a5-b3d4-5b00a27918d7.jpg',
  'https://picsart.io/wp-content/uploads/2024/02/c45c40d7-83a5-44cc-9944-eeb9bd8bdc64.jpg',
  'https://picsart.io/wp-content/uploads/2024/02/76b50cb9-8529-408f-8ad8-ab81fb19fa49.jpg',
  'https://picsart.io/wp-content/uploads/2024/02/3a9f60fa-2c73-44cd-9d86-736b2c5191fd.jpg',
  'https://picsart.io/wp-content/uploads/2024/02/b44ace27-5260-4d35-99a1-cebd10d8c801.jpg',
  'https://picsart.io/wp-content/uploads/2024/02/8e1c0c40-a0db-428b-9cc7-3e65c0234bb0.jpg',
  'https://picsart.io/wp-content/uploads/2024/02/c9770432-1412-43f9-9c7f-1b9134f4b7d6.jpg',
  'https://picsart.io/wp-content/uploads/2024/02/3eeae901-17b1-4b1b-81e9-fa9728e34b74.jpg',
];

const UPSCALE_FACTOR = ['x2', 'x4', 'x6', 'x8'];

class BeforeAfter {
  constructor(enteryObject) {
    const beforeAfterContainer = document.querySelector(enteryObject.id);
    const before = beforeAfterContainer.querySelector('.bal-before');
    const beforeText = beforeAfterContainer.querySelector(
      '.bal-beforePosition'
    );
    const afterText = beforeAfterContainer.querySelector('.bal-afterPosition');
    const handle = beforeAfterContainer.querySelector('.bal-handle');
    var widthChange = 0;

    beforeAfterContainer
      .querySelector('.bal-before-inset')
      .setAttribute(
        'style',
        'width: ' + beforeAfterContainer.offsetWidth + 'px;'
      );
    window.onresize = function () {
      beforeAfterContainer
        .querySelector('.bal-before-inset')
        .setAttribute(
          'style',
          'width: ' + beforeAfterContainer.offsetWidth + 'px;'
        );
    };
    before.setAttribute('style', 'width: 50%;');
    handle.setAttribute('style', 'left: 50%;');

    //touch screen event listener
    beforeAfterContainer.addEventListener('touchstart', (e) => {
      beforeAfterContainer.addEventListener('touchmove', (e2) => {
        let containerWidth = beforeAfterContainer.offsetWidth;
        let currentPoint = e2.changedTouches[0].clientX;

        let startOfDiv = beforeAfterContainer.offsetLeft;

        let modifiedCurrentPoint = currentPoint - startOfDiv;

        if (
          modifiedCurrentPoint > 10 &&
          modifiedCurrentPoint < beforeAfterContainer.offsetWidth - 10
        ) {
          let newWidth = (modifiedCurrentPoint * 100) / containerWidth;

          before.setAttribute('style', 'width:' + newWidth + '%;');
          afterText.setAttribute('style', 'z-index: 1;');
          handle.setAttribute('style', 'left:' + newWidth + '%;');
        }
      });
    });

    //mouse move event listener
    beforeAfterContainer.addEventListener('click', moveSlider);
    beforeAfterContainer.addEventListener('mousedown', () => {
      beforeAfterContainer.addEventListener('mousemove', moveSlider);
    });

    beforeAfterContainer.addEventListener('mouseup', () => {
      beforeAfterContainer.removeEventListener('mousemove', moveSlider);
    });

    function moveSlider(e) {
      let containerWidth = beforeAfterContainer.offsetWidth;
      widthChange = e.offsetX;
      let newWidth = (widthChange * 100) / containerWidth;

      if (e.offsetX > 10 && e.offsetX < beforeAfterContainer.offsetWidth - 10) {
        before.setAttribute('style', 'width:' + newWidth + '%;');
        afterText.setAttribute('style', 'z-index:' + '1;');
        handle.setAttribute('style', 'left:' + newWidth + '%;');
      }
    }

    //mouse move event listener
    beforeAfterContainer.addEventListener('click', moveSlider);
    beforeAfterContainer.addEventListener('mousedown', () => {
      beforeAfterContainer.addEventListener('mousemove', moveSlider);
    });

    beforeAfterContainer.addEventListener('mouseup', () => {
      beforeAfterContainer.removeEventListener('mousemove', moveSlider);
    });

    function moveSlider(e) {
      let containerWidth = beforeAfterContainer.offsetWidth;
      widthChange = e.offsetX;
      let newWidth = (widthChange * 100) / containerWidth;

      if (e.offsetX > 10 && e.offsetX < beforeAfterContainer.offsetWidth - 10) {
        before.setAttribute('style', 'width:' + newWidth + '%;');
        afterText.setAttribute('style', 'z-index:' + '1;');
        handle.setAttribute('style', 'left:' + newWidth + '%;');
      }
    }
  }
}

const patternData = {
  image: 'none',
  imageUrl: IMAGES_URL[0],
  upscaleFactor: UPSCALE_FACTOR[0],
};

function afterResourceLoad() {
  document.querySelector('#upscale-img').style.display = 'block';
}

setInitialState();

function setInitialState() {
  if (window.addEventListener) {
    // W3C standard
    window.addEventListener('load', afterResourceLoad);
  } else if (window.attachEvent) {
    // Microsoft
    window.attachEvent('onload', afterResourceLoad);
  }

  appendPatterns();

  const imageInput = document.getElementById('upload__img');
  imageInput.addEventListener('click', function () {
    this.value = null;
  });
  imageInput.addEventListener('change', handleImageUpload);
}

function removePatternSelection() {
  const patternButton = document.querySelector('label.active_patt_btn');
  patternButton && patternButton.classList.remove('active_patt_btn');
}

function appendPatterns() {
  for (let i = 0; i < IMAGES_URL.length; i++) {
    const patternElement = document.createElement('label');
    patternElement.setAttribute(`class`, `patt_btn patt_btn_${i}`);

    if (i === 0) {
      patternElement.classList.add('active_patt_btn');
    }

    new BeforeAfter({
      id: '#one',
    });

    patternElement.addEventListener('click', (event) => {
      removePatternSelection();

      let thisBtn = document.querySelector(`.patt_btn_${i}`);
      thisBtn.setAttribute('id', i);
      thisBtn.classList.add('active_patt_btn');

      updateMainImage(i);
    });

    document.getElementById('patterns').appendChild(patternElement);
  }
}

//Updates the background of the main image element based on the selected pattern
function updateMainImage(activeButton) {
  const beforeImg = document.querySelector('.before_img');
  const afterImg = document.querySelector('.after_img');
  mainImgClasslist.remove(mainImgClasslist[mainImgClasslist.length - 1]);
  console.log(activeButton);
  beforeImg.src = `https://picsart.io/wp-content/uploads/2024/02/${activeButton}.jpg`;

  https: afterImg.src = IMAGES_URL[activeButton];

  patternData.imageUrl = IMAGES_URL[activeButton];
  updateData(document.querySelector('.active_code_btn'), patternData);
}

//The fetch function, which sends a request to API using form data and API KEY
async function getFetchedImage(formData, API_KEY) {
  return await fetch('https://api.picsart.io/tools/1.0/upscale', {
    method: 'POST',
    headers: {
      'x-picsart-api-key': API_KEY,
    },
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then((resData) => {
      return resData.data.url;
    })
    .catch((error) => {
      setStatusModal('Something went wrong', 'Please try again');
      toggleLoadingStatus();
    });
}

//Adds a loading effect also disables elements that are now unnecessary
function toggleLoadingStatus() {
  const imageInput = document.getElementById('upload__img');
  const inputLabel = document.querySelector('.bck-img_label');
  const resImgDivs = document.querySelectorAll('.load');

  for (let i = 0; i < resImgDivs.length; ++i) {
    let resImgClasslist = resImgDivs[i].classList;
    resImgClasslist.toggle('loader');

    if (resImgClasslist.contains('loader')) {
      imageInput.disabled = true;
      inputLabel.style.cursor = 'default';
    } else {
      imageInput.disabled = false;
      inputLabel.style.cursor = 'pointer';
    }
  }
}

//Editing new main image by uploaded image
async function uploadNewImg(file) {
  const beforeImg = document.querySelector('.before_img');
  const afterImg = document.querySelector('.after_img');

  if (file) {
    toggleLoadingStatus();
    removePatternSelection();

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const image = new Image();
      image.src = reader.result;
      image.onload = async () => {
        const width = image.width;
        const height = image.height;
        const widthDiff = 4800 / width;
        const heightDiff = 4800 / height;

        if (widthDiff < 2 || heightDiff < 2) {
          toggleLoadingStatus();
          setStatusModal(
            'Your image resolution is too big.',
            'Please upload an image smaller than 2000x2000 px'
          );
          return;
        }

        if (widthDiff <= 4 && heightDiff <= 4) {
          form.set('upscale_factor', 'x2');
        } else if (widthDiff <= 6 && heightDiff <= 6) {
          form.set('upscale_factor', 'x4');
        } else if (widthDiff <= 8 && heightDiff <= 8) {
          form.set('upscale_factor', 'x6');
        } else {
          form.set('upscale_factor', 'x8');
        }

        patternData.upscaleFactor = form.get('upscale_factor');

        form.set('image', file);
        const fetchedImg = await getFetchedImage(form, API_KEY);

        const img = new Image();
        img.src = fetchedImg;
        img.addEventListener('load', async () => {
          beforeImg.src = image.src;
          afterImg.src = img.src;
          patternData.image = file.name;
          patternData.imageUrl = 'none';
          toggleLoadingStatus();
          updateData(document.querySelector('.active_code_btn'), patternData);
        });
      };
    };
  }
}

//Receives an image using an event and calls the fetch function
async function handleImageUpload(event) {
  if (
    event &&
    event.target &&
    event.target.files &&
    event.target.files.length
  ) {
    const file = event.target.files[0];
    const fileSizeInMB = file.size / (1024 * 1024);

    if (fileSizeInMB >= 20) {
      setStatusModal(
        'Your image size is too big',
        'Please upload an image smaller than 20 MB'
      );
      return;
    }

    await uploadNewImg(file);
  }
}

//Adding a class when the user tries to drag an image
mainImage.addEventListener('dragover', (event) => {
  event.preventDefault();
  mainImgClasslist.add('dragover');
});

//Delete the class when the user has gone beyond the field
mainImage.addEventListener('dragleave', () => {
  mainImgClasslist.remove('dragover');
});

//Delete the class when the user has already put a picture and send request
mainImage.addEventListener('drop', async (event) => {
  event.preventDefault();
  const file = event.dataTransfer.files[0];
  const fileType = event.dataTransfer.files[0].type;
  mainImgClasslist.remove('dragover');
  if (
    fileType === 'image/webp' ||
    fileType === 'image/png' ||
    fileType === 'image/jpg' ||
    fileType === 'image/jpeg'
  ) {
    await uploadNewImg(file);
  }
});

const jsButton = document.querySelector('.js_btn');
const nodejsButton = document.querySelector('.nodejs_btn');
const javaButton = document.querySelector('.java_btn');
const pythonButton = document.querySelector('.python_btn');
const requirementsP = document.querySelector('.requirements');
const codeExample = document.querySelector('.code_example');

function setJsCode({ image, imageUrl, upscaleFactor }) {
  requirementsP.innerHTML = `#To send a request you need to add an image using <span class='pink'> input file event </span>`;
  codeExample.innerHTML = `
const formData = new FormData();<br>
formData.append(<span class='purple'>"upscale_factor", "${upscaleFactor}"</span>);<br>
  ${
    imageUrl !== 'none'
      ? `formData.append(<span class='purple'>"image_url", "${imageUrl}"</span>);<br>`
      : image === ''
      ? ''
      : `formData.append(<span class='purple'>"image", image</span>);<br>`
  }
<pre>

fetch(<span class='purple'>"https://api.picsart.io/tools/1.0/upscale"</span>,{
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

function setNodeCode({ image, imageUrl, upscaleFactor }) {
  requirementsP.innerHTML = '';
  codeExample.innerHTML = `
const FormData = require('form-data');<br>
const http = require("https");<br>
const fs = require('fs');<br>
const form = new FormData();<br>
<br>
form.append(<span class='purple'>"upscale_factor", "${upscaleFactor}"</span>);<br>

${
  imageUrl !== 'none' && '0'
    ? `form.append(<span class='purple'>"image_url", "${imageUrl}"</span>);`
    : image === ''
    ? ''
    : `form.append(<span class='purple'>"image" </span>, <span class='tab'>fs.createReadStream(<span class='purple'>"${image}"</span>)</span>);<br>`
}
<pre>

const options = {
  "method": <span class='purple'>"POST"</span>,
  "hostname": <span class='purple'>"api.picsart.io"</span>,
  "port": <span class='purple'> null </span>,
  "path": <span class='purple'>"/tools/1.0/upscale"</span>,
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

function setJavaCode({ image, imageUrl, upscaleFactor }) {
  requirementsP.innerHTML = '';
  codeExample.innerHTML = `<pre>
OkHttpClient client = new OkHttpClient().newBuilder().build();
MediaType mediaType = MediaType.parse("multipart/form-data");
RequestBody body = new MultipartBody.Builder().setType(MultipartBody.FORM)</pre>

<span class='tab'>.addFormDataPart(<span class='purple'>"upscale_factor", "${upscaleFactor}"</span>)</span><br>
  ${
    imageUrl !== 'none'
      ? `<span class='tab'>.addFormDataPart(<span class='purple'>"image_url", "${imageUrl}"</span>)</span>`
      : !image
      ? ''
      : `<span class='tab'>RequestBody.create(MediaType.parse("application/octet-stream"),new File(<span class='purple'>"${image}"</span>))</span>
      `
  } 
<pre>
  .build();

Request request = new Request.Builder()
  .url(<span class='purple'>"https://api.picsart.io/tools/1.0/upscale"</span>)
  .method(<span class='purple'> "POST"</span>, body )
  .addHeader(<span class='purple'>"accept", "application/json"</span>)
  .addHeader(<span class='purple'>"x-picsart-api-key", YOUR_ENTERED_API_KEY</span>)
  .build();

Response response = client.newCall(request).execute();</pre>`;
}

function setPythonCode({ image, imageUrl, upscaleFactor }) {
  requirementsP.innerHTML = '';
  codeExample.innerHTML = `<pre>
import requests

url = <span class='purple'>"https://api.picsart.io/tools/1.0/upscale"</span>
payload={<span class='purple'>"upscale_factor":"${upscaleFactor}",</pre>
<span>${
    imageUrl !== 'none'
      ? `<span class='tab'><span class='purple'>"image_url":"${imageUrl}"</span>}</span>`
      : !image
      ? ''
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
x
print(response.text)
</pre>`;
}

//Updating code button class when user push the button
function updateButtonClass(clickedButton) {
  if (prevClickedButton) {
    prevClickedButton.classList.remove('active_code_btn');
  }

  clickedButton.classList.add('active_code_btn');
  prevClickedButton = clickedButton;

  if (clickedButton.classList[1] === 'js_btn') {
    setJsCode(patternData);
  }
}

let prevClickedButton = null;
updateButtonClass(jsButton);

jsButton.addEventListener('click', () => {
  updateButtonClass(jsButton);
  setJsCode(patternData);
});

nodejsButton.addEventListener('click', () => {
  updateButtonClass(nodejsButton);
  setNodeCode(patternData);
});

javaButton.addEventListener('click', () => {
  updateButtonClass(javaButton);
  setJavaCode(patternData);
});

pythonButton.addEventListener('click', () => {
  updateButtonClass(pythonButton);
  setPythonCode(patternData);
});

//Updates the example data object with the current settings and displays it in the code section of the page
function updateData(className, patternData) {
  switch (className.classList[1]) {
    case 'js_btn':
      setJsCode(patternData);
      break;
    case 'nodejs_btn':
      setNodeCode(patternData);
      break;
    case 'java_btn':
      setJavaCode(patternData);
      break;
    case 'python_btn':
      setPythonCode(patternData);
      break;
  }
}

//Copies the code displayed in the code section to the clipboard.
function copyCode() {
  const copyBtn = document.querySelector('.copy-code_btn');
  copyBtn.addEventListener('click', function () {
    this.classList.remove('copy-code_btn:active');
  });

  const text = document.getElementById('text-to-copy').innerText;
  navigator.clipboard.writeText(text).then(function () {
    const btnTxt = document.querySelector('.c_btn-txt');
    btnTxt.innerText = `Copied`;
    setTimeout(() => {
      btnTxt.innerText = `Copy code`;
    }, 3000);
  });
}

// Copies the code displayed in the code section and shares to the selected social network
async function shareCode() {
  const shareBtn = document.querySelector('.share_btn');
  shareBtn.addEventListener('click', function () {
    this.classList.remove('share_btn:active');
  });

  try {
    const text = document.getElementById('text-to-copy').innerText;
    await navigator.share({
      title: 'Share Generated Code',
      text: text,
      url: location.href,
    });
  } catch (err) {
    console.error(`${err.name}: ${err.message}`);
  }
}

function setStatusModal(statusHead, statusBody) {
  const statusElem = document.querySelector('.status');
  const statusHeadElem = document.querySelector('.status_txt_head');
  const statusBodyElem = document.querySelector('.status_txt_body');

  statusHeadElem.innerText = statusHead;
  statusBodyElem.innerText = statusBody;
  statusElem.style.display = 'flex';

  setTimeout(() => {
    statusElem.style.display = 'none';
  }, 4000);
}

function closeStatus() {
  const status = document.querySelector('.status');
  status.style.display = 'none';
}