// import "./styles/gilroyfonts.css"
// import "./styles/RemoveBgGDemos-remove-background-style-style.min.css"

import uploadIcon from './img/upload.svg';
import copyIcon from './img/copy.svg';
import shareIcon from './img/share.svg';

import image0 from './img/patterns/rm-0.png';
import image1 from './img/patterns/rm-1.png';
import image2 from './img/patterns/rm-2.png';
import image3 from './img/patterns/rm-3.png';
import image4 from './img/patterns/rm-4.png';
import image5 from './img/patterns/rm-5.png';
import image6 from './img/patterns/rm-6.png';
import image7 from './img/patterns/rm-7.png';
import image8 from './img/patterns/rm-8.png';

import noBgImage0 from './img/without-bg/0.png';
import noBgImage1 from './img/without-bg/1.png';
import noBgImage2 from './img/without-bg/2.png';
import noBgImage3 from './img/without-bg/3.png';
import noBgImage4 from './img/without-bg/4.png';
import noBgImage5 from './img/without-bg/5.png';
import noBgImage6 from './img/without-bg/6.png';
import noBgImage7 from './img/without-bg/7.png';
import noBgImage8 from './img/without-bg/8.png';

const IMAGES_URL = [
  image0,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
];

const NONE_BG_IMAGES_URL = [
  noBgImage0,
  noBgImage1,
  noBgImage2,
  noBgImage3,
  noBgImage4,
  noBgImage5,
  noBgImage6,
  noBgImage7,
  noBgImage8,
];

export class RemoveBackground {
  constructor(apiKey, containerId) {
    this.apiKey = apiKey;
    this.containerId = containerId;
    this.patternData = {
      image: 'none',
      imageUrl: IMAGES_URL[0],
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
      <div id="rm-remove-bg">
        <header>
          <div class="rm-heading">Try Now</div>
        </header>
        <main class="rm-main__container">
          <div class="rm-main__content">
            <div class="rm-main__edit-params">
              <div class="rm-subtitle">Try one of these images:</div>
              <div>
                <div class="rm-patt_div">
                  <div id="rm-patterns"></div>
                </div>
              </div>
              <div class="rm-edit-params-text_div">
                <p class="rm-edit-params_txt">Can't pick?</p>
                <p class="rm-edit-params_txt">Upload your own image</p>
              </div>
              <div class="rm-upload-btn_div gtm-track-try-demo">
                <input type="file" id="rm-upload__img" accept=".png, .jpg, .jpeg, .webp" />
                <label for="rm-upload__img" class="rm-bck-img_label gtm-track-try-demo">
                  <i class="rm-upload_img" style="display: inline-block; width: 24px; height: 21px; background-image: url(${uploadIcon});"></i>
                  Upload photo
                </label>
              </div>
            </div>
            <div class="rm-main__result-img">
              <div class="rm-result-img__div">
                <div class="rm-load"></div>
                <div id="rm-res-image" class="rm-drop-zone">
                  <input type="file" id="rm-upload__img" class="rm-drop-zone__input" accept=".png, .jpg, .jpeg, .webp" />
                  <img alt="Result image" id="rm-rend_img" width="450" height="310" src="${NONE_BG_IMAGES_URL[1]}" />
                </div>
              </div>
            </div>
          </div>
          <div class="rm-main__req-code">
            <div id="rm-req_code">
              <p class="rm-requirements"></p>
              <div class="rm-code_example" id="rm-text-to-copy"></div>
            </div>
            <div class="rm-code_buttons">
              <button class="rm-c_btn rm-js_btn gtm-track-try-demo rm-active_code_btn">JS / React</button>
              <button class="rm-c_btn rm-nodejs_btn gtm-track-try-demo">JS / Node</button>
              <button class="rm-c_btn rm-java_btn gtm-track-try-demo">Java</button>
              <button class="rm-c_btn rm-python_btn gtm-track-try-demo">Python</button>
            </div>
          </div>
        </main>
        <footer>
          <div class="rm-find">
            <a href="https://picsart.io/api-reference" class="gtm-track-try-demo" target="_blank">Find more details</a>
          </div>
          <div class="rm-footer_btns">
            <form action="https://console.picsart.io/login" target="_blank" method="get">
              <button class="rm-api-key_btn gtm-track-try-demo">Get API key</button>
            </form>
            <button id="rm-copy" class="rm-copy-code_btn gtm-track-try-demo" aria-label="aria-copy">
              <span class="rm-c_btn-txt">Copy code</span>
              <i class="rm-c_btn-i" style="width: 17px; height: 17px; background-image: url(${copyIcon});"></i>
            </button>
            <button id="rm-share" class="rm-share_btn" aria-label="aria-share">
              <i class="rm-c_btn-i" style="width: 17px; height: 17px; background-image: url(${shareIcon});"></i>
            </button>
          </div>
        </footer>
      </div>
    `;

    // Initialize event listeners and UI
    this.setInitialState();
  }

  // Initial setup
  setInitialState() {
    document.querySelector('#rm-remove-bg').style.display = 'block';
    this.form.append('output_type', 'cutout');
    this.appendPatterns();

    const imageInput = document.getElementById('rm-upload__img');
    imageInput.addEventListener('click', () => (imageInput.value = null));
    imageInput.addEventListener('change', (event) => this.handleImageUpload(event));

    const mainImage = document.getElementById('rm-res-image');
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
    const jsButton = document.querySelector('.rm-js_btn');
    const nodejsButton = document.querySelector('.rm-nodejs_btn');
    const javaButton = document.querySelector('.rm-java_btn');
    const pythonButton = document.querySelector('.rm-python_btn');

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
    document.querySelector('.rm-copy-code_btn').addEventListener('click', () => this.copyCode());
    document.querySelector('.rm-share_btn').addEventListener('click', () => this.shareCode());
  }

  // Append pattern buttons
  appendPatterns() {
    const patternsContainer = document.getElementById('rm-patterns');
    IMAGES_URL.forEach((url, i) => {
      const patternElement = document.createElement('label');

      const inp = document.createElement('input');
      inp.type = "radio";
      inp.name = "pattern";
      inp.hidden = true;
      patternElement.appendChild(inp);

      patternElement.setAttribute('class', `pattern_btn rm-patt_btn_${i}`);
      if (i === 1) patternElement.classList.add('active_patt_btn');
      
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
    const rendImg = document.getElementById('rm-rend_img');
    const mainImage = document.getElementById('rm-res-image');
    mainImage.classList.remove(mainImage.classList[mainImage.classList.length - 1]);
    rendImg.style.display = 'none';
    this.toggleLoadingStatus();
    rendImg.style.width = '100%';
    rendImg.style.height = 'auto';
    rendImg.src = NONE_BG_IMAGES_URL[activeButton];
    rendImg.style.display = 'block';
    this.patternData.imageUrl = IMAGES_URL[activeButton];
    this.patternData.image = 'none';
    this.toggleLoadingStatus();
    this.updateData(document.querySelector('.rm-active_code_btn'), this.patternData);
  }

  // Fetch image from PicsArt API
  async getFetchedImage(formData) {
    try {
      const response = await fetch('https://api.picsart.io/tools/1.0/removebg', {
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
      console.error(error);
      throw error;
    }
  }

  // Toggle loading status
  toggleLoadingStatus() {
    const imageInput = document.getElementById('rm-upload__img');
    const inputLabel = document.querySelector('.rm-bck-img_label');
    const resImgClasslist = document.querySelector('.rm-load').classList;
    resImgClasslist.toggle('loader');

    if (resImgClasslist.contains('loader')) {
      imageInput.disabled = true;
      inputLabel.style.cursor = 'default';
    } else {
      imageInput.disabled = false;
      inputLabel.style.cursor = 'pointer';
    }
  }

  // Edit fetched image size
  async editFetchedImg(image) {
    const rendImg = document.getElementById('rm-rend_img');
    const mainImage = document.getElementById('rm-res-image');
    const rendImgStyle = rendImg.style;
    let fetchedImgWidth = image.width;
    let fetchedImgHeight = image.height;

    if (fetchedImgWidth > fetchedImgHeight && fetchedImgWidth > mainImage.offsetWidth) {
      fetchedImgWidth = mainImage.offsetWidth;
      rendImgStyle.width = `${mainImage.offsetWidth}px`;
      rendImgStyle.height = 'auto';
    } else if (fetchedImgHeight > fetchedImgWidth && fetchedImgWidth > mainImage.offsetWidth) {
      rendImgStyle.width = 'auto';
      rendImgStyle.height = `${mainImage.offsetHeight}px`;
    }

    const widthDiff = rendImg.offsetWidth >= mainImage.offsetWidth * 0.96;
    const heightDiff = rendImg.offsetHeight >= mainImage.offsetHeight * 0.96;

    if (widthDiff && heightDiff) {
      rendImgStyle.borderRadius = '16px';
    } else {
      rendImgStyle.borderRadius = '0px';
    }
  }

  // Upload and process new image
  async uploadNewImg(file) {
    if (file) {
      this.form.set('image', file);
      this.removePatternSelection();
      this.toggleLoadingStatus();
      const fetchedImg = await this.getFetchedImage(this.form);
      this.patternData.image = file.name;
      this.patternData.imageUrl = 'none';

      const img = new Image();
      img.src = fetchedImg;
      img.addEventListener('load', async () => {
        await this.editFetchedImg(img);
        document.getElementById('rm-rend_img').src = fetchedImg;
        this.toggleLoadingStatus();
        this.updateData(document.querySelector('.rm-active_code_btn'), this.patternData);
      });
    }
  }

  // Handle image upload
  async handleImageUpload(event) {
    if (event && event.target && event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      await this.uploadNewImg(file);
    }
  }

  // Code generation methods
  setJsCode({ image, imageUrl }) {
    const requirementsP = document.querySelector('.rm-requirements');
    const codeExample = document.querySelector('.rm-code_example');
    requirementsP.innerHTML = `#To send a request you need to add an image using <span class='pink'> input file event </span>`;
    codeExample.innerHTML = `
const formData = new FormData();<br>
formData.append(<span class='purple'>"output_type", "cutout"</span>);<br>
formData.append(<span class='purple'>"format", "PNG"</span>);<br>
${imageUrl !== 'none'
    ? `formData.append(<span class='purple'>"image_url", "${imageUrl}"</span>);<br>`
    : image === ''
    ? ''
    : `formData.append(<span class='purple'>"image", image</span>);<br>`
}
<pre>
fetch(<span class='purple'>"https://api.picsart.io/tools/1.0/removebg"</span>, {
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

  setNodeCode({ image, imageUrl }) {
    const requirementsP = document.querySelector('.rm-requirements');
    const codeExample = document.querySelector('.rm-code_example');
    requirementsP.innerHTML = '';
    codeExample.innerHTML = `
const FormData = require('form-data');<br>
const http = require("https");<br>
const fs = require('fs');<br>
const form = new FormData();<br>
<br>
form.append(<span class='purple'>"format", "PNG"</span>);<br>
form.append(<span class='purple'>"output_type", "cutout"</span>);<br>
${imageUrl !== 'none'
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

  setJavaCode({ image, imageUrl }) {
    const requirementsP = document.querySelector('.rm-requirements');
    const codeExample = document.querySelector('.rm-code_example');
    requirementsP.innerHTML = '';
    codeExample.innerHTML = `<pre>
OkHttpClient client = new OkHttpClient().newBuilder().build();
MediaType mediaType = MediaType.parse("multipart/form-data");
RequestBody body = new MultipartBody.Builder().setType(MultipartBody.FORM)</pre>
<span class='tab'>.addFormDataPart(<span class='purple'>"format", "PNG"</span>)</span><br>
<span class='tab'>.addFormDataPart(<span class='purple'>"output_type", "cutout"</span>)</span><br>
${imageUrl !== 'none'
    ? `<span class='tab'>.addFormDataPart(<span class='purple'>"image_url", "${imageUrl}"</span>)</span>`
    : !image
    ? ''
    : `<span class='tab'>RequestBody.create(MediaType.parse("application/octet-stream"),new File(<span class='purple'>"${image}"</span>))</span>`
}
<pre>
  .build();
Request request = new Request.Builder()
  .url(<span class='purple'>"https://api.picsart.io/tools/1.0/removebg"</span>)
  .method(<span class='purple'>"POST"</span>, body)
  .addHeader(<span class='purple'>"accept", "application/json"</span>)
  .addHeader(<span class='purple'>"x-picsart-api-key", YOUR_ENTERED_API_KEY</span>)
  .build();
Response response = client.newCall(request).execute();
</pre>`;
  }

  setPythonCode({ image, imageUrl }) {
    const requirementsP = document.querySelector('.rm-requirements');
    const codeExample = document.querySelector('.rm-code_example');
    requirementsP.innerHTML = '';
    codeExample.innerHTML = `<pre>
import requests
url = <span class='purple'>"https://api.picsart.io/tools/1.0/removebg"</span>
payload={<span class='purple'>"format":"PNG","output_type":"cutout",</pre>
<span>${imageUrl !== 'none'
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
    const prevClickedButton = document.querySelector('.rm-active_code_btn');
    if (prevClickedButton) {
      prevClickedButton.classList.remove('rm-active_code_btn');
    }
    clickedButton.classList.add('rm-active_code_btn');
  }

  updateData(className, patternData) {
    switch (className.classList[1]) {
      case 'rm-js_btn':
        this.setJsCode(patternData);
        break;
      case 'rm-nodejs_btn':
        this.setNodeCode(patternData);
        break;
      case 'rm-java_btn':
        this.setJavaCode(patternData);
        break;
      case 'rm-python_btn':
        this.setPythonCode(patternData);
        break;
    }
  }

  async copyCode() {
    const text = document.getElementById('rm-text-to-copy').innerText;
    await navigator.clipboard.writeText(text);
    const btnTxt = document.querySelector('.rm-c_btn-txt');
    btnTxt.innerText = 'Copied';
    setTimeout(() => {
      btnTxt.innerText = 'Copy code';
    }, 3000);
  }

  async shareCode() {
    try {
      const text = document.getElementById('rm-text-to-copy').innerText;
      await navigator.share({
        title: 'Share Generated Code',
        text: text,
        url: location.href,
      });
    } catch (err) {
      console.error(`${err.name}: ${err.message}`);
    }
  }
}