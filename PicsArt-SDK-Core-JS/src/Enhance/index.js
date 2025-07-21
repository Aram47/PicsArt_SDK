// src/Enhance/index.js
import './styles/style.css';
import './styles/gilroyfonts.css';

// Import assets (adjust paths if needed)
import uploadIcon from './img/upload.svg';
import beforeIcon from './img/before.svg';
import afterIcon from './img/after.svg';
import closeIcon from './img/icons/close.svg';
import xIcon from './img/icons/x.svg';

import image0 from './img/img_small/0.jpg';
import image1 from './img/img_small/1.jpg';
import image2 from './img/img_small/2.jpg';
import image3 from './img/img_small/3.jpg';
import image4 from './img/img_small/4.jpg';
import image5 from './img/img_small/5.jpg';
import image6 from './img/img_small/6.jpg';
import image7 from './img/img_small/7.jpg';
import image8 from './img/img_small/8.jpg';

const ImagesArray = [
  image0,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8
];


// Constants
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

export class Enhance {
  constructor(apiKey, containerId) {
    this.apiKey = apiKey;
    this.containerId = containerId;
    this.patternData = {
      image: 'none',
      imageUrl: IMAGES_URL[0],
      upscaleFactor: UPSCALE_FACTOR[0],
    };
    this.form = new FormData();
  }

  // Initialize UI by injecting HTML into the specified container
  initializeUI() {
    const container = document.getElementById(this.containerId);
    if (!container) {
      console.error('Container not found');
      return;
    }

    // Inject HTML from index.html
    container.innerHTML = `
      <div id="upscale-img">
        <header>
          <div class="heading">Try Now</div>
        </header>
        <main class="main__container">
          <div class="main__content">
            <div class="main__edit-params">
              <div class="subtitle">Try one of these images:</div>
              <div>
                <div class="patt_div">
                  <div id="patterns"></div>
                </div>
              </div>
              <div class="edit-params-text_div">
                <p class="edit-params_txt">Can't pick?</p>
                <p class="edit-params_txt">Upload your own image</p>
              </div>
              <div class="upload-btn_div gtm-track-try-demo">
                <input type="file" id="upload__img" accept=".png, .jpg, .jpeg, .webp" />
                <label for="upload__img" class="bck-img_label gtm-track-try-demo">
                  <img src="${uploadIcon}" />
                  Upload photo
                </label>
              </div>
            </div>
            <div class="main__result-img">
              <div class="result-img__div">
                <div id="res-image" class="drop-zone">
                  <input type="file" id="upload__img" class="drop-zone__input" accept=".png, .jpg, .jpeg, .webp" />
                  <div id="one" class="bal-container">
                    <div class="bal-after">
                      <img class="after_img" src="${IMAGES_URL[0]}">
                      <div class="load"></div>
                      <div class="bal-afterPosition afterLabel">After</div>
                    </div>
                    <div class="bal-before">
                      <div class="bal-before-inset">
                        <img class="before_img" src="${ImagesArray[0]}">
                        <div class="load"></div>
                        <div class="bal-beforePosition beforeLabel">Before</div>
                      </div>
                    </div>
                    <div class="bal-handle">
                      <span class="handle-left-arrow"><img src="${beforeIcon}"></span>
                      <span class="handle-right-arrow"><img src="${afterIcon}"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="main__req-code">
            <div id="req_code">
              <p class="requirements"></p>
              <div class="code_example" id="text-to-copy"></div>
            </div>
            <div class="code_buttons">
              <button class="c_btn js_btn gtm-track-try-demo active_code_btn">JS / React</button>
              <button class="c_btn nodejs_btn gtm-track-try-demo">JS / Node</button>
              <button class="c_btn java_btn gtm-track-try-demo">Java</button>
              <button class="c_btn python_btn gtm-track-try-demo">Python</button>
            </div>
          </div>
        </main>
        <footer>
          <div class="find">
            <a href="https://picsart.io/api-reference" class="gtm-track-try-demo" target="_blank">Find more details</a>
          </div>
          <div class="footer_btns">
            <form action="https://console.picsart.io/login" target="_blank" method="get">
              <button class="api-key_btn gtm-track試試看">Get API key</button>
            </form>
            <button class="copy-code_btn gtm-track-try-demo">Copy code</button>
            <button class="share_btn">Share</button>
          </div>
        </footer>
        <div class="status" style="display: none;">
          <div class="status_icon">
            <img src="${xIcon}" class="problem_i">
          </div>
          <div class="status_txt">
            <span class="status_txt_head">Dialog header</span>
            <span class="status_txt_body">Dialog body text</span>
          </div>
          <a class="status_close">
            <img src="${closeIcon}">
          </a>
        </div>
      </div>
    `;

    // Initialize event listeners and UI
    this.setInitialState();
  }

  // BeforeAfter class for slider functionality
  initBeforeAfter() {
    const beforeAfterContainer = document.querySelector('#one');
    const before = beforeAfterContainer.querySelector('.bal-before');
    const beforeText = beforeAfterContainer.querySelector('.bal-beforePosition');
    const afterText = beforeAfterContainer.querySelector('.bal-afterPosition');
    const handle = beforeAfterContainer.querySelector('.bal-handle');

    beforeAfterContainer
      .querySelector('.bal-before-inset')
      .setAttribute('style', `width: ${beforeAfterContainer.offsetWidth}px;`);
    
    window.onresize = () => {
      beforeAfterContainer
        .querySelector('.bal-before-inset')
        .setAttribute('style', `width: ${beforeAfterContainer.offsetWidth}px;`);
    };
    
    before.setAttribute('style', 'width: 50%;');
    handle.setAttribute('style', 'left: 50%;');

    const moveSlider = (e) => {
      let containerWidth = beforeAfterContainer.offsetWidth;
      let widthChange = e.offsetX;
      let newWidth = (widthChange * 100) / containerWidth;

      if (e.offsetX > 10 && e.offsetX < containerWidth - 10) {
        before.setAttribute('style', `width: ${newWidth}%;`);
        afterText.setAttribute('style', 'z-index: 1;');
        handle.setAttribute('style', `left: ${newWidth}%;`);
      }
    };

    beforeAfterContainer.addEventListener('click', moveSlider);
    beforeAfterContainer.addEventListener('mousedown', () => {
      beforeAfterContainer.addEventListener('mousemove', moveSlider);
    });
    beforeAfterContainer.addEventListener('mouseup', () => {
      beforeAfterContainer.removeEventListener('mousemove', moveSlider);
    });

    beforeAfterContainer.addEventListener('touchstart', () => {
      beforeAfterContainer.addEventListener('touchmove', (e2) => {
        let containerWidth = beforeAfterContainer.offsetWidth;
        let currentPoint = e2.changedTouches[0].clientX;
        let startOfDiv = beforeAfterContainer.offsetLeft;
        let modifiedCurrentPoint = currentPoint - startOfDiv;

        if (modifiedCurrentPoint > 10 && modifiedCurrentPoint < containerWidth - 10) {
          let newWidth = (modifiedCurrentPoint * 100) / containerWidth;
          before.setAttribute('style', `width: ${newWidth}%;`);
          afterText.setAttribute('style', 'z-index: 1;');
          handle.setAttribute('style', `left: ${newWidth}%;`);
        }
      });
    });
  }

  // Initial setup
  setInitialState() {
    document.querySelector('#upscale-img').style.display = 'block';
    this.appendPatterns();
    this.initBeforeAfter();

    const imageInput = document.getElementById('upload__img');
    imageInput.addEventListener('click', () => (imageInput.value = null));
    imageInput.addEventListener('change', (event) => this.handleImageUpload(event));

    const mainImage = document.getElementById('res-image');
    mainImage.addEventListener('dragover', (event) => {
      event.preventDefault();
      mainImage.classList.add('dragover');
    });
    mainImage.addEventListener('dragleave', () => {
      mainImage.classList.remove('dragover');
    });
    mainImage.addEventListener('drop', async (event) => {
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      const fileType = file.type;
      mainImage.classList.remove('dragover');
      if (['image/webp', 'image/png', 'image/jpg', 'image/jpeg'].includes(fileType)) {
        await this.uploadNewImg(file);
      }
    });

    // Code buttons
    const jsButton = document.querySelector('.js_btn');
    const nodejsButton = document.querySelector('.nodejs_btn');
    const javaButton = document.querySelector('.java_btn');
    const pythonButton = document.querySelector('.python_btn');

    jsButton.addEventListener('click', () => {
      this.updateButtonClass(jsButton);
      this.setJsCode(this.patternData);
    });
    nodejsButton.addEventListener('click', () => {
      this.updateButtonClass(nodejsButton);
      this.setNodeCode(this.patternData);
    });
    javaButton.addEventListener('click', () => {
      this.updateButtonClass(javaButton);
      this.setJavaCode(this.patternData);
    });
    pythonButton.addEventListener('click', () => {
      this.updateButtonClass(pythonButton);
      this.setPythonCode(this.patternData);
    });

    // Initialize default code view
    this.setJsCode(this.patternData);

    // Copy and share buttons
    document.querySelector('.copy-code_btn').addEventListener('click', () => this.copyCode());
    document.querySelector('.share_btn').addEventListener('click', () => this.shareCode());
    document.querySelector('.status_close').addEventListener('click', () => this.closeStatus());
  }

  // Append pattern buttons
  appendPatterns() {
    const patternsContainer = document.getElementById('patterns');
    IMAGES_URL.forEach((url, i) => {
      const patternElement = document.createElement('label');
      patternElement.setAttribute('class', `patt_btn patt_btn_${i}`);
      if (i === 0) patternElement.classList.add('active_patt_btn');

      patternElement.addEventListener('click', () => {
        this.removePatternSelection();
        patternElement.classList.add('active_patt_btn');
        this.updateMainImage(i);
      });

      patternsContainer.appendChild(patternElement);
    });
  }

  // Remove active pattern selection
  removePatternSelection() {
    const patternButton = document.querySelector('label.active_patt_btn');
    if (patternButton) patternButton.classList.remove('active_patt_btn');
  }

  // Update main image
  updateMainImage(activeButton) {
    const beforeImg = document.querySelector('.before_img');
    const afterImg = document.querySelector('.after_img');
    const mainImage = document.getElementById('res-image');
    mainImage.classList.remove(mainImage.classList[mainImage.classList.length - 1]);
    beforeImg.src = ImagesArray[activeButton];
    afterImg.src = IMAGES_URL[activeButton];
    this.patternData.imageUrl = IMAGES_URL[activeButton];
    this.patternData.image = 'none';
    this.updateData(document.querySelector('.active_code_btn'), this.patternData);
  }

  // Fetch image from PicsArt API
  async getFetchedImage(formData) {
    try {
      const response = await fetch('https://api.picsart.io/tools/1.0/upscale', {
        method: 'POST',
        headers: {
          'x-picsart-api-key': this.apiKey,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const resData = await response.json();
      return resData.data.url;
    } catch (error) {
      this.setStatusModal('Something went wrong', 'Please try again');
      this.toggleLoadingStatus();
      throw error;
    }
  }

  // Toggle loading status
  toggleLoadingStatus() {
    const imageInput = document.getElementById('upload__img');
    const inputLabel = document.querySelector('.bck-img_label');
    const resImgDivs = document.querySelectorAll('.load');

    resImgDivs.forEach((div) => {
      div.classList.toggle('loader');
      if (div.classList.contains('loader')) {
        imageInput.disabled = true;
        inputLabel.style.cursor = 'default';
      } else {
        imageInput.disabled = false;
        inputLabel.style.cursor = 'pointer';
      }
    });
  }

  // Upload and process new image
  async uploadNewImg(file) {
    const beforeImg = document.querySelector('.before_img');
    const afterImg = document.querySelector('.after_img');

    if (file) {
      this.toggleLoadingStatus();
      this.removePatternSelection();

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
            this.toggleLoadingStatus();
            this.setStatusModal(
              'Your image resolution is too big.',
              'Please upload an image smaller than 2000x2000 px'
            );
            return;
          }

          if (widthDiff <= 4 && heightDiff <= 4) {
            this.form.set('upscale_factor', 'x2');
          } else if (widthDiff <= 6 && heightDiff <= 6) {
            this.form.set('upscale_factor', 'x4');
          } else if (widthDiff <= 8 && heightDiff <= 8) {
            this.form.set('upscale_factor', 'x6');
          } else {
            this.form.set('upscale_factor', 'x8');
          }

          this.patternData.upscaleFactor = this.form.get('upscale_factor');
          this.form.set('image', file);

          const fetchedImg = await this.getFetchedImage(this.form);
          const img = new Image();
          img.src = fetchedImg;
          img.addEventListener('load', () => {
            beforeImg.src = image.src;
            afterImg.src = img.src;
            this.patternData.image = file.name;
            this.patternData.imageUrl = 'none';
            this.toggleLoadingStatus();
            this.updateData(document.querySelector('.active_code_btn'), this.patternData);
          });
        };
      };
    }
  }

  // Handle image upload
  async handleImageUpload(event) {
    if (event && event.target && event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      const fileSizeInMB = file.size / (1024 * 1024);

      if (fileSizeInMB >= 20) {
        this.setStatusModal(
          'Your image size is too big',
          'Please upload an image smaller than 20 MB'
        );
        return;
      }

      await this.uploadNewImg(file);
    }
  }

  // Code generation methods
  setJsCode({ image, imageUrl, upscaleFactor }) {
    const requirementsP = document.querySelector('.requirements');
    const codeExample = document.querySelector('.code_example');
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
fetch(<span class='purple'>"https://api.picsart.io/tools/1.0/upscale"</span>, {
  method: <span class='purple'>"POST"</span>,
  headers: {
    <span class='purple'>"x-picsart-api-key": YOUR_ENTERED_API_KEY</span>
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

  setNodeCode({ image, imageUrl, upscaleFactor }) {
    const requirementsP = document.querySelector('.requirements');
    const codeExample = document.querySelector('.code_example');
    requirementsP.innerHTML = '';
    codeExample.innerHTML = `
const FormData = require('form-data');<br>
const http = require("https");<br>
const fs = require('fs');<br>
const form = new FormData();<br>
<br>
form.append(<span class='purple'>"upscale_factor", "${upscaleFactor}"</span>);<br>
${
  imageUrl !== 'none'
    ? `form.append(<span class='purple'>"image_url", "${imageUrl}"</span>);`
    : image === ''
    ? ''
    : `form.append(<span class='purple'>"image" </span>, <span class='tab'>fs.createReadStream(<span class='purple'>"${image}"</span>)</span>);<br>`
}
<pre>
const options = {
  "method": <span class='purple'>"POST"</span>,
  "hostname": <span class='purple'>"api.picsart.io"</span>,
  "port": <span class='purple'>null</span>,
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

  setJavaCode({ image, imageUrl, upscaleFactor }) {
    const requirementsP = document.querySelector('.requirements');
    const codeExample = document.querySelector('.code_example');
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
    : `<span class='tab'>RequestBody.create(MediaType.parse("application/octet-stream"),new File(<span class='purple'>"${image}"</span>))</span>`
}
<pre>
  .build();
Request request = new Request.Builder()
  .url(<span class='purple'>"https://api.picsart.io/tools/1.0/upscale"</span>)
  .method(<span class='purple'>"POST"</span>, body)
  .addHeader(<span class='purple'>"accept", "application/json"</span>)
  .addHeader(<span class='purple'>"x-picsart-api-key", YOUR_ENTERED_API_KEY</span>)
  .build();
Response response = client.newCall(request).execute();
</pre>`;
  }

  setPythonCode({ image, imageUrl, upscaleFactor }) {
    const requirementsP = document.querySelector('.requirements');
    const codeExample = document.querySelector('.code_example');
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
    : `}<br>files=[<span class='purple'>('image',('${image}',open('${image}','rb'),'image/png'))</span>]</span>`
}
<pre>
headers = { <span class='purple'>
  "accept": "application/json",
  "x-picsart-api-key": YOUR_ENTERED_API_KEY </span>
}
response = requests.request(<span class='purple'>"POST"</span>, url, headers=headers, data=payload, files=files)
print(response.text)
</pre>`;
  }

  updateButtonClass(clickedButton) {
    const prevClickedButton = document.querySelector('.active_code_btn');
    if (prevClickedButton) {
      prevClickedButton.classList.remove('active_code_btn');
    }
    clickedButton.classList.add('active_code_btn');
  }

  updateData(className, patternData) {
    switch (className.classList[1]) {
      case 'js_btn':
        this.setJsCode(patternData);
        break;
      case 'nodejs_btn':
        this.setNodeCode(patternData);
        break;
      case 'java_btn':
        this.setJavaCode(patternData);
        break;
      case 'python_btn':
        this.setPythonCode(patternData);
        break;
    }
  }

  async copyCode() {
    const text = document.getElementById('text-to-copy').innerText;
    await navigator.clipboard.writeText(text);
    const btnTxt = document.querySelector('.c_btn-txt');
    btnTxt.innerText = 'Copied';
    setTimeout(() => {
      btnTxt.innerText = 'Copy code';
    }, 3000);
  }

  async shareCode() {
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

  setStatusModal(statusHead, statusBody) {
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

  closeStatus() {
    const status = document.querySelector('.status');
    status.style.display = 'none';
  }
}