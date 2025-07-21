import { useEffect, useRef } from 'react';

export const Enhance = () => {
  let uploadSVG = '<svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.2031 0.25C12.9844 0.25 11.8828 0.570312 10.8984 1.21094C9.92969 1.85156 9.1875 2.6875 8.67188 3.71875C8.57812 3.70313 8.48438 3.69531 8.39062 3.69531C8.3125 3.67969 8.23438 3.67188 8.15625 3.67188C7.39062 3.67188 6.70312 3.89844 6.09375 4.35156C5.5 4.80469 5.08594 5.375 4.85156 6.0625C4.19531 6.20312 3.58594 6.45312 3.02344 6.8125C2.46094 7.15625 1.96875 7.58594 1.54688 8.10156C1.14062 8.61719 0.820312 9.19531 0.585938 9.83594C0.367188 10.4766 0.257812 11.1484 0.257812 11.8516C0.257812 12.6641 0.40625 13.4297 0.703125 14.1484C1 14.8516 1.39844 15.4766 1.89844 16.0234C2.41406 16.5547 3.02344 16.9766 3.72656 17.2891C4.41406 17.6016 5.15625 17.7578 5.95312 17.7578H6.49219C6.71094 17.7578 6.89062 17.6875 7.03125 17.5469C7.17188 17.3906 7.24219 17.2109 7.24219 17.0078C7.24219 16.7891 7.17188 16.6094 7.03125 16.4688C6.89062 16.3281 6.71094 16.2578 6.49219 16.2578H5.95312C4.79688 16.2578 3.80469 15.8359 2.97656 14.9922C2.16406 14.1328 1.75781 13.0859 1.75781 11.8516C1.75781 10.7578 2.08594 9.8125 2.74219 9.01562C3.41406 8.20312 4.24219 7.71094 5.22656 7.53906C5.47656 7.49219 5.6875 7.38281 5.85938 7.21094C6.04688 7.03906 6.17969 6.83594 6.25781 6.60156C6.39844 6.17969 6.64062 5.83594 6.98438 5.57031C7.32812 5.30469 7.71875 5.17188 8.15625 5.17188C8.20312 5.17188 8.25 5.17969 8.29688 5.19531C8.35938 5.19531 8.42188 5.20313 8.48438 5.21875C8.76562 5.26562 9.04688 5.22656 9.32812 5.10156C9.60938 4.97656 9.82031 4.76562 9.96094 4.46875C10.3516 3.65625 10.9219 3 11.6719 2.5C12.4375 2 13.2812 1.75 14.2031 1.75C14.8438 1.75 15.4531 1.875 16.0312 2.125C16.6094 2.39063 17.1094 2.75 17.5312 3.20312C17.9688 3.64062 18.3125 4.16406 18.5625 4.77344C18.8281 5.38281 18.9609 6.03125 18.9609 6.71875C18.9609 6.95312 19.0234 7.17188 19.1484 7.375C19.2734 7.5625 19.4453 7.70312 19.6641 7.79688C20.4141 8.125 21.0312 8.65625 21.5156 9.39062C22 10.1094 22.2422 10.9297 22.2422 11.8516C22.2422 13.0859 21.8281 14.1328 21 14.9922C20.1875 15.8359 19.2031 16.2578 18.0469 16.2578H17.5078C17.2891 16.2578 17.1094 16.3281 16.9688 16.4688C16.8281 16.6094 16.7578 16.7891 16.7578 17.0078C16.7578 17.2109 16.8281 17.3906 16.9688 17.5469C17.1094 17.6875 17.2891 17.7578 17.5078 17.7578H18.0469C18.8438 17.7578 19.5859 17.6016 20.2734 17.2891C20.9766 16.9766 21.5781 16.5547 22.0781 16.0234C22.5938 15.4766 23 14.8516 23.2969 14.1484C23.5938 13.4297 23.7422 12.6641 23.7422 11.8516C23.7422 10.6797 23.4375 9.61719 22.8281 8.66406C22.2188 7.69531 21.4219 6.97656 20.4375 6.50781C20.4219 5.64844 20.2422 4.83594 19.8984 4.07031C19.5703 3.32031 19.125 2.66406 18.5625 2.10156C18 1.52344 17.3438 1.07031 16.5938 0.742188C15.8438 0.414062 15.0469 0.25 14.2031 0.25ZM17.2734 13.0938C17.4297 12.9531 17.5078 12.7812 17.5078 12.5781C17.5078 12.3594 17.4297 12.1797 17.2734 12.0391L12.6094 7.35156C12.5156 7.25781 12.3984 7.21094 12.2578 7.21094C12.1172 7.21094 12 7.25781 11.9062 7.35156L7.21875 12.0391C7.07812 12.1797 7.00781 12.3594 7.00781 12.5781C7.00781 12.7812 7.07812 12.9531 7.21875 13.0938C7.35938 13.2344 7.53125 13.3047 7.73438 13.3047C7.95312 13.3047 8.13281 13.2344 8.27344 13.0938L11.5078 9.88281V19.5625C11.5078 19.7656 11.5781 19.9453 11.7188 20.1016C11.8594 20.2422 12.0391 20.3125 12.2578 20.3125C12.4609 20.3125 12.6328 20.2422 12.7734 20.1016C12.9297 19.9453 13.0078 19.7656 13.0078 19.5625V9.88281L16.2188 13.0938C16.3594 13.2344 16.5312 13.3047 16.7344 13.3047C16.9531 13.3047 17.1328 13.2344 17.2734 13.0938Z" fill="#C209C1"/></svg>';
  let beforeSVG = '<svg width="8" height="8" viewBox="0 0 4 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.98438 1.35938C3.08854 1.25521 3.14062 1.13542 3.14062 1C3.14062 0.864583 3.08854 0.744792 2.98438 0.640625C2.89062 0.546875 2.77083 0.5 2.625 0.5C2.48958 0.5 2.375 0.546875 2.28125 0.640625L0.28125 2.64062C0.1875 2.74479 0.140625 2.86458 0.140625 3C0.140625 3.13542 0.1875 3.25521 0.28125 3.35938L2.28125 5.35938C2.375 5.45312 2.48958 5.5 2.625 5.5C2.77083 5.5 2.89062 5.45312 2.98438 5.35938C3.08854 5.25521 3.14062 5.13542 3.14062 5C3.14062 4.86458 3.08854 4.74479 2.98438 4.64062L1.34375 3L2.98438 1.35938Z" fill="white"/></svg>';
  let afterSVG = '<svg width="8" height="8" viewBox="0 0 4 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.953125 1.35938C0.848958 1.25521 0.796875 1.13542 0.796875 1C0.796875 0.864583 0.848958 0.744792 0.953125 0.640625C1.04688 0.546875 1.16146 0.5 1.29688 0.5C1.43229 0.5 1.55208 0.546875 1.65625 0.640625L3.65625 2.64062C3.75 2.74479 3.79688 2.86458 3.79688 3C3.79688 3.13542 3.75 3.25521 3.65625 3.35938L1.65625 5.35938C1.55208 5.45312 1.43229 5.5 1.29688 5.5C1.16146 5.5 1.04688 5.45312 0.953125 5.35938C0.848958 5.25521 0.796875 5.13542 0.796875 5C0.796875 4.86458 0.848958 4.74479 0.953125 4.64062L2.59375 3L0.953125 1.35938Z" fill="white"/></svg>';
  let copySVG = '<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.63169 4V4.215H3.41669C2.55752 4.215 1.82169 4.52083 1.21002 5.1325C0.59752 5.7325 0.291687 6.4675 0.291687 7.34V14C0.291687 14.8592 0.59752 15.595 1.21002 16.2067C1.82169 16.8192 2.55752 17.125 3.41669 17.125H10.0767C10.9492 17.125 11.685 16.8192 12.2842 16.2067C12.8959 15.595 13.2017 14.8592 13.2017 14V13.785H13.4167C13.826 13.7915 14.2325 13.7152 14.6116 13.5609C14.9908 13.4065 15.3349 13.1772 15.6234 12.8867C16.2359 12.275 16.5417 11.5325 16.5417 10.66V4C16.5417 3.14083 16.2359 2.405 15.6234 1.79333C15.0117 1.18083 14.2759 0.875 13.4167 0.875H6.75669C5.88419 0.875 5.14169 1.18083 4.53002 1.79333C4.23949 2.08176 4.01017 2.42587 3.85581 2.80505C3.70144 3.18423 3.62522 3.59066 3.63169 4ZM4.88169 4.215V4C4.88169 3.47917 5.06419 3.03667 5.42835 2.67167C5.60068 2.49464 5.80745 2.3548 6.03591 2.26078C6.26437 2.16676 6.50968 2.12055 6.75669 2.125H13.4167C13.6637 2.12055 13.909 2.16676 14.1375 2.26078C14.3659 2.3548 14.5727 2.49464 14.745 2.67167C15.1092 3.03667 15.2917 3.47917 15.2917 4V10.66C15.2961 10.907 15.2499 11.1523 15.1559 11.3808C15.0619 11.6092 14.922 11.816 14.745 11.9883C14.5727 12.1654 14.3659 12.3052 14.1375 12.3992C13.909 12.4932 13.6637 12.5394 13.4167 12.535H13.2017V7.34C13.2017 6.4675 12.8959 5.73167 12.2842 5.1325C11.6842 4.52083 10.9492 4.215 10.0767 4.215H4.88169ZM1.54169 7.34C1.54169 6.81917 1.72419 6.37667 2.08835 6.01167C2.26068 5.83464 2.46745 5.69481 2.69591 5.60078C2.92437 5.50676 3.16968 5.46055 3.41669 5.465H10.0767C10.3237 5.46055 10.569 5.50676 10.7975 5.60078C11.0259 5.69481 11.2327 5.83464 11.405 6.01167C11.7692 6.37667 11.9517 6.81917 11.9517 7.34V14C11.9561 14.247 11.9099 14.4923 11.8159 14.7208C11.7219 14.9492 11.582 15.156 11.405 15.3283C11.2327 15.5054 11.0259 15.6452 10.7975 15.7392C10.569 15.8332 10.3237 15.8794 10.0767 15.875H3.41669C3.16968 15.8794 2.92437 15.8332 2.69591 15.7392C2.46745 15.6452 2.26068 15.5054 2.08835 15.3283C1.91133 15.156 1.77149 14.9492 1.67747 14.7208C1.58345 14.4923 1.53724 14.247 1.54169 14V7.34Z" fill="black"/></svg>';
  let shareSVG = '<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.215 0.0766602C13.3425 0.0766602 12.6 0.382493 11.9883 0.994994C11.6978 1.28342 11.4685 1.62754 11.3141 2.00671C11.1598 2.38589 11.0835 2.79232 11.09 3.20166C11.09 3.44461 11.1162 3.68686 11.1683 3.92416L6.28499 6.54166C5.99946 6.16486 5.63219 5.85771 5.21083 5.64333C4.77338 5.40703 4.28298 5.28601 3.78583 5.29166C2.92583 5.29166 2.18999 5.59749 1.57749 6.20999C0.965828 6.82166 0.660828 7.55749 0.660828 8.41666C0.660828 9.27583 0.965828 10.0117 1.57749 10.6233C2.18999 11.2358 2.92583 11.5417 3.78583 11.5417C4.27435 11.5462 4.75671 11.4324 5.19166 11.21C5.61924 10.9881 5.99257 10.6745 6.28499 10.2917L11.1483 12.9867C11.1225 13.0908 11.1025 13.195 11.09 13.2992V13.6317C11.0835 14.041 11.1598 14.4474 11.3141 14.8266C11.4685 15.2058 11.6978 15.5499 11.9883 15.8383C12.6 16.4508 13.3425 16.7567 14.215 16.7567C15.0742 16.7567 15.81 16.4508 16.4217 15.8383C17.0342 15.2267 17.34 14.4908 17.34 13.6317C17.34 12.7592 17.0342 12.0233 16.4217 11.4242C15.81 10.8125 15.0742 10.5067 14.215 10.5067C13.7114 10.5024 13.2146 10.6232 12.7692 10.8583C12.3378 11.0831 11.9638 11.4038 11.6758 11.7958L6.83166 9.11999C6.85833 9.01583 6.87749 8.90499 6.89 8.78749C6.93176 8.42845 6.91203 8.06491 6.83166 7.71249L11.715 5.09583C12.0017 5.47416 12.3592 5.77333 12.7892 5.99499C13.2315 6.21607 13.7197 6.3297 14.2142 6.32666C14.6238 6.33336 15.0305 6.25724 15.41 6.10287C15.7895 5.9485 16.1339 5.71906 16.4225 5.42833C17.0342 4.81666 17.3392 4.07416 17.3392 3.20166C17.3392 2.34249 17.0342 1.60666 16.4225 0.994994C15.81 0.382493 15.0742 0.0766602 14.2142 0.0766602H14.215ZM12.34 3.20166C12.34 2.69333 12.5225 2.25749 12.8867 1.89333C13.2517 1.51583 13.6942 1.32666 14.215 1.32666C14.7233 1.32666 15.1592 1.51583 15.5233 1.89333C15.9008 2.25749 16.09 2.69333 16.09 3.20166C16.09 3.72249 15.9008 4.16499 15.5233 4.52999C15.1592 4.89416 14.7233 5.07666 14.215 5.07666C13.968 5.08111 13.7227 5.0349 13.4942 4.94088C13.2658 4.84686 13.059 4.70702 12.8867 4.52999C12.7096 4.35767 12.5698 4.1509 12.4758 3.92243C12.3818 3.69397 12.3355 3.44867 12.34 3.20166ZM1.90999 8.41666C1.90999 7.89583 2.09249 7.45333 2.45666 7.08833C2.63047 6.91328 2.83752 6.77475 3.06563 6.68087C3.29375 6.587 3.53833 6.53966 3.78499 6.54166C4.03201 6.53721 4.27731 6.58342 4.50577 6.67744C4.73423 6.77147 4.941 6.9113 5.11333 7.08833C5.47749 7.45333 5.65999 7.89583 5.65999 8.41666C5.66444 8.66367 5.61823 8.90897 5.52421 9.13743C5.43019 9.3659 5.29035 9.57267 5.11333 9.74499C4.941 9.92202 4.73423 10.0619 4.50577 10.1559C4.27731 10.2499 4.03201 10.2961 3.78499 10.2917C3.27666 10.2917 2.83499 10.1092 2.45666 9.74499C2.27964 9.57267 2.1398 9.3659 2.04578 9.13743C1.95176 8.90897 1.90554 8.66367 1.90999 8.41666ZM14.215 11.7567C14.7233 11.7567 15.1592 11.9392 15.5233 12.3033C15.9008 12.6683 16.09 13.1108 16.09 13.6317C16.09 14.14 15.9008 14.5817 15.5233 14.96C15.1592 15.3242 14.7233 15.5067 14.215 15.5067C13.968 15.5111 13.7227 15.4649 13.4942 15.3709C13.2658 15.2769 13.059 15.137 12.8867 14.96C12.5225 14.5817 12.34 14.1392 12.34 13.6317C12.34 13.1108 12.5225 12.6683 12.8867 12.3033C13.059 12.1263 13.2658 11.9865 13.4942 11.8924C13.7227 11.7984 13.968 11.7522 14.215 11.7567Z" fill="black"/></svg>';
  let xSVG = '<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.0364 0.763604C1.68492 0.412132 1.11508 0.412132 0.763604 0.763604C0.412132 1.11508 0.412132 1.68492 0.763604 2.0364L3.72721 5L0.763604 7.9636C0.412132 8.31508 0.412132 8.88492 0.763604 9.2364C1.11508 9.58787 1.68492 9.58787 2.0364 9.2364L5 6.27279L7.9636 9.2364C8.31508 9.58787 8.88492 9.58787 9.2364 9.2364C9.58787 8.88492 9.58787 8.31508 9.2364 7.9636L6.27279 5L9.2364 2.0364C9.58787 1.68492 9.58787 1.11508 9.2364 0.763604C8.88492 0.412132 8.31508 0.412132 7.9636 0.763604L5 3.72721L2.0364 0.763604Z" fill="white"/></svg>';
  let closeSVG = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 20C8.61979 20 7.32422 19.7396 6.11328 19.2188C4.88932 18.6979 3.82161 17.9883 2.91016 17.0898C2.01172 16.1784 1.30208 15.1107 0.78125 13.8867C0.260417 12.6758 0 11.3802 0 10C0 8.61979 0.260417 7.32422 0.78125 6.11328C1.30208 4.88932 2.01172 3.82812 2.91016 2.92969C3.82161 2.01823 4.88932 1.30208 6.11328 0.78125C7.32422 0.260417 8.61979 0 10 0C11.3802 0 12.6758 0.260417 13.8867 0.78125C15.1107 1.30208 16.1719 2.01823 17.0703 2.92969C17.9818 3.82812 18.6979 4.88932 19.2188 6.11328C19.7396 7.32422 20 8.61979 20 10C20 11.3802 19.7396 12.6758 19.2188 13.8867C18.6979 15.1107 17.9818 16.1784 17.0703 17.0898C16.1719 17.9883 15.1107 18.6979 13.8867 19.2188C12.6758 19.7396 11.3802 20 10 20ZM13.7695 6.23047C13.6523 6.10026 13.5026 6.03516 13.3203 6.03516C13.151 6.03516 13.0078 6.10026 12.8906 6.23047L10 9.12109L7.10938 6.23047C6.99219 6.10026 6.84245 6.03516 6.66016 6.03516C6.49089 6.03516 6.34766 6.10026 6.23047 6.23047C6.10026 6.34766 6.03516 6.4974 6.03516 6.67969C6.03516 6.84896 6.10026 6.99219 6.23047 7.10938L9.12109 10L6.23047 12.8906C6.10026 13.0078 6.03516 13.1576 6.03516 13.3398C6.03516 13.5091 6.10026 13.6523 6.23047 13.7695C6.34766 13.8997 6.49089 13.9648 6.66016 13.9648C6.84245 13.9648 6.99219 13.8997 7.10938 13.7695L10 10.8789L12.8906 13.7695C13.0078 13.8997 13.151 13.9648 13.3203 13.9648C13.5026 13.9648 13.6523 13.8997 13.7695 13.7695C13.8997 13.6523 13.9648 13.5091 13.9648 13.3398C13.9648 13.1576 13.8997 13.0078 13.7695 12.8906L10.8789 10L13.7695 7.10938C13.8997 6.99219 13.9648 6.84896 13.9648 6.67969C13.9648 6.4974 13.8997 6.34766 13.7695 6.23047Z" fill="#4C4C4C"/></svg>';

  const PREFIX = 'enhance-';

  beforeSVG = encodeURIComponent(beforeSVG);
  afterSVG = encodeURIComponent(afterSVG);
  copySVG = encodeURIComponent(copySVG);
  shareSVG = encodeURIComponent(shareSVG);
  xSVG = encodeURIComponent(xSVG);
  closeSVG = encodeURIComponent(closeSVG);
  uploadSVG = encodeURIComponent(uploadSVG);

  class BeforeAfter {
    constructor() {
      const beforeAfterContainer = document.querySelector(`#enhance-one`);
      const before = beforeAfterContainer.querySelector('.enhance-bal-before');
      const beforeText = beforeAfterContainer.querySelector('.enhance-bal-beforePosition');
      const afterText = beforeAfterContainer.querySelector('.enhance-bal-afterPosition');
      const handle = beforeAfterContainer.querySelector('.enhance-bal-handle');
      let widthChange = 0;

      beforeAfterContainer
        .querySelector('.enhance-bal-before-inset')
        .setAttribute('style', 'width: ' + beforeAfterContainer.offsetWidth + 'px;');
      window.onresize = function () {
        beforeAfterContainer
          .querySelector('.enhance-bal-before-inset')
          .setAttribute('style', 'width: ' + beforeAfterContainer.offsetWidth + 'px;');
      };
      before.setAttribute('style', 'width: 50%;');
      handle.setAttribute('style', 'left: 50%;');

      beforeAfterContainer.addEventListener('touchstart', () => {
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

      const moveSlider = (e) => {
        let containerWidth = beforeAfterContainer.offsetWidth;
        widthChange = e.offsetX;
        let newWidth = (widthChange * 100) / containerWidth;

        if (e.offsetX > 10 && e.offsetX < beforeAfterContainer.offsetWidth - 10) {
          before.setAttribute('style', 'width:' + newWidth + '%;');
          afterText.setAttribute('style', 'z-index: 1;');
          handle.setAttribute('style', 'left:' + newWidth + '%;');
        }
      };

      beforeAfterContainer.addEventListener('click', moveSlider);
      beforeAfterContainer.addEventListener('mousedown', () => {
        beforeAfterContainer.addEventListener('mousemove', moveSlider);
      });

      beforeAfterContainer.addEventListener('mouseup', () => {
        beforeAfterContainer.removeEventListener('mousemove', moveSlider);
      });
    }
  }

  class ImageUpscaler {
    constructor() {
      this.API_KEY = "eyJraWQiOiI5NzIxYmUzNi1iMjcwLTQ5ZDUtOTc1Ni05ZDU5N2M4NmIwNTEiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhdXRoLXNlcnZpY2UtYzFhYTg5ODAtODBmNi00ZWZjLTkwZTAtOThiMjljNjEyNzdlIiwiYXVkIjoiNDY4NTc2NzQwMDExMTAxIiwibmJmIjoxNzQ0NjM1ODc2LCJzY29wZSI6WyJiMmItYXBpLmdlbl9haSIsImIyYi1hcGkuaW1hZ2VfYXBpIl0sImlzcyI6Imh0dHBzOi8vYXBpLnBpY3NhcnQuY29tL3Rva2VuLXNlcnZpY2UiLCJvd25lcklkIjoiNDY4NTc2NzQwMDExMTAxIiwiaWF0IjoxNzQ0NjM1ODc2LCJqdGkiOiIzNWNmZTJhNi0xNDczLTRkMmYtYTU0Ny02ZGI5ZDY5M2E5MDMifQ.C8_KvtOLyimxRQYdA7yQO8LHZnjCqFBrogq0C09I7saQgaRxvS8cl2jHzMVhiCqQ4xXDNwGfgjIViUOxObtwzsGcfw3vy_YMjAiWMxEo0DP3J1IhqvLN5rAzSZMDZcY-FX2vqXDH2JZber3LunsevRm3DjSpwJJ2fysmgh_reqIH4Nujf8gn1yMRkNe43cZgPKTc0vbDicCf7uHZsk7Fe8t8sV-S9MGMrLO_pICGgSweuAp5hNI0bkNGRwApKrZdVaF8CpmSAjwvlrtdVBEyrkBQOB2kIKm0SiYw9kV-Wm9hcinn2B14yCfPMVEftBZiPYYHmJNi3jKq905VGMHs_g";
      this.mainImage = document.getElementById('enhance-res-image');
      this.rendImg = document.getElementById('enhance-rend_img');
      this.mainImgClasslist = this.mainImage.classList;
      this.form = new FormData();
      this.prevClickedButton = null;

      this.NONE_BG_IMAGES_URL = [
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

      this.IMAGES_URL = [
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

      this.UPSCALE_FACTOR = ['x2', 'x4', 'x6', 'x8'];

      this.patternData = {
        image: 'none',
        imageUrl: this.IMAGES_URL[0],
        upscaleFactor: this.UPSCALE_FACTOR[0],
      };

      this.jsButton = document.querySelector('.enhance-js_btn');
      this.nodejsButton = document.querySelector('.enhance-nodejs_btn');
      this.javaButton = document.querySelector('.enhance-java_btn');
      this.pythonButton = document.querySelector('.enhance-python_btn');
      this.requirementsP = document.querySelector('.enhance-requirements');
      this.codeExample = document.querySelector('.enhance-code_example');
    }

    init() {
      this.setInitialState();
      this.updateButtonClass(this.jsButton);
      this.setupEventListeners();
    }

    afterResourceLoad() {
      document.querySelector('#enhance-upscale-img').style.display = 'block';
    }

    setInitialState() {
      if (window.addEventListener) {
        window.addEventListener('load', () => this.afterResourceLoad());
      } else if (window.attachEvent) {
        window.attachEvent('onload', () => this.afterResourceLoad());
      }

      this.appendPatterns();

      const imageInput = document.getElementById('enhance-upload__img');
      imageInput.addEventListener('click', function () {
        this.value = null;
      });
      imageInput.addEventListener('change', (event) => this.handleImageUpload(event));
    }

    removePatternSelection() {
      const patternButton = document.querySelector('label.enhance-active_patt_btn');
      patternButton && patternButton.classList.remove('enhance-active_patt_btn');
    }

    appendPatterns() {
      for (let i = 0; i < this.IMAGES_URL.length; i++) {
        const patternElement = document.createElement('label');
        patternElement.setAttribute('class', `enhance-patt_btn enhance-patt_btn_${i}`);

        if (i === 0) {
          patternElement.classList.add('enhance-active_patt_btn');
        }

        new BeforeAfter({
          id: '#enhance-one',
        });

        patternElement.addEventListener('click', () => {
          this.removePatternSelection();

          let thisBtn = document.querySelector(`.enhance-patt_btn_${i}`);
          thisBtn.setAttribute('id', i);
          thisBtn.classList.add('enhance-active_patt_btn');

          this.updateMainImage(i);
        });

        document.getElementById('enhance-patterns').appendChild(patternElement);
      }
    }

    updateMainImage(activeButton) {
      const beforeImg = document.querySelector('.enhance-before_img');
      const afterImg = document.querySelector('.enhance-after_img');
      this.mainImgClasslist.remove(this.mainImgClasslist[this.mainImgClasslist.length - 1]);
      beforeImg.src = `https://picsart.io/wp-content/uploads/2024/02/${activeButton}.jpg`;
      afterImg.src = this.IMAGES_URL[activeButton];

      this.patternData.imageUrl = this.IMAGES_URL[activeButton];
      this.updateData(document.querySelector('.enhance-active_code_btn'), this.patternData);
    }

    async getFetchedImage(formData) {
      return await fetch('https://api.picsart.io/tools/1.0/upscale', {
        method: 'POST',
        headers: {
          'x-picsart-api-key': this.API_KEY,
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
          this.setStatusModal('Something went wrong', 'Please try again');
          this.toggleLoadingStatus();
        });
    }

    toggleLoadingStatus() {
      const imageInput = document.getElementById('enhance-upload__img');
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

    async uploadNewImg(file) {
      const beforeImg = document.querySelector('.enhance-before_img');
      const afterImg = document.querySelector('.enhance-after_img');

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
            img.addEventListener('load', async () => {
              beforeImg.src = image.src;
              afterImg.src = img.src;
              this.patternData.image = file.name;
              this.patternData.imageUrl = 'none';
              this.toggleLoadingStatus();
              this.updateData(document.querySelector('.enhance-active_code_btn'), this.patternData);
            });
          };
        };
      }
    }

    async handleImageUpload(event) {
      if (
        event &&
        event.target &&
        event.target.files &&
        event.target.files.length
      ) {
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

    setJsCode({ image, imageUrl, upscaleFactor }) {
      this.requirementsP.innerHTML = `#To send a request you need to add an image using <span class='pink'> input file event </span>`;
      this.codeExample.innerHTML = `
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

    setNodeCode({ image, imageUrl, upscaleFactor }) {
      this.requirementsP.innerHTML = '';
      this.codeExample.innerHTML = `
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

    setJavaCode({ image, imageUrl, upscaleFactor }) {
      this.requirementsP.innerHTML = '';
      this.codeExample.innerHTML = `<pre>
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
  .method(<span class='purple'> "POST"</span>, body )
  .addHeader(<span class='purple'>"accept", "application/json"</span>)
  .addHeader(<span class='purple'>"x-picsart-api-key", YOUR_ENTERED_API_KEY</span>)
  .build();
Response response = client.newCall(request).execute();</pre>`;
    }

    setPythonCode({ image, imageUrl, upscaleFactor }) {
      this.requirementsP.innerHTML = '';
      this.codeExample.innerHTML = `<pre>
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
print(response.text)
</pre>`;
    }

    updateButtonClass(clickedButton) {
      if (this.prevClickedButton) {
        this.prevClickedButton.classList.remove('enhance-active_code_btn');
      }

      clickedButton.classList.add('enhance-active_code_btn');
      this.prevClickedButton = clickedButton;

      if (clickedButton.classList.contains('enhance-js_btn')) {
        this.setJsCode(this.patternData);
      }
    }

    setupEventListeners() {
      this.mainImage.addEventListener('dragover', (event) => {
        event.preventDefault();
        this.mainImgClasslist.add('enhance-dragover');
      });

      this.mainImage.addEventListener('dragleave', () => {
        this.mainImgClasslist.remove('enhance-dragover');
      });

      this.mainImage.addEventListener('drop', async (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        const fileType = event.dataTransfer.files[0].type;
        this.mainImgClasslist.remove('enhance-dragover');
        if (
          fileType === 'image/webp' ||
          fileType === 'image/png' ||
          fileType === 'image/jpg' ||
          fileType === 'image/jpeg'
        ) {
          await this.uploadNewImg(file);
        }
      });

      this.jsButton.addEventListener('click', () => {
        this.updateButtonClass(this.jsButton);
        this.setJsCode(this.patternData);
      });

      this.nodejsButton.addEventListener('click', () => {
        this.updateButtonClass(this.nodejsButton);
        this.setNodeCode(this.patternData);
      });

      this.javaButton.addEventListener('click', () => {
        this.updateButtonClass(this.javaButton);
        this.setJavaCode(this.patternData);
      });

      this.pythonButton.addEventListener('click', () => {
        this.updateButtonClass(this.pythonButton);
        this.setPythonCode(this.patternData);
      });

      const copyBtn = document.querySelector('.enhance-copy-code_btn');
      copyBtn.addEventListener('click', () => {
        copyBtn.classList.remove('enhance-copy-code_btn:active');
        const text = document.getElementById('enhance-text-to-copy').innerText;
        navigator.clipboard.writeText(text).then(() => {
          const btnTxt = document.querySelector('.enhance-c_btn-txt');
          btnTxt.innerText = `Copied`;
          setTimeout(() => {
            btnTxt.innerText = `Copy code`;
          }, 3000);
        });
      });

      const shareBtn = document.querySelector('.enhance-share_btn');
      shareBtn.addEventListener('click', async () => {
        shareBtn.classList.remove('enhance-share_btn:active');
        try {
          const text = document.getElementById('enhance-text-to-copy').innerText;
          await navigator.share({
            title: 'Share Generated Code',
            text: text,
            url: location.href,
          });
        } catch (err) {
          console.error(`${err.name}: ${err.message}`);
        }
      });

      const statusClose = document.querySelector('.enhance-status_close');
      statusClose.addEventListener('click', () => {
        const status = document.querySelector('.enhance-status');
        status.style.display = 'none';
      });
    }

    updateData(className, patternData) {
      if (!className) return;
      if (className.classList.contains('enhance-js_btn')) {
        this.setJsCode(patternData);
      } else if (className.classList.contains('enhance-nodejs_btn')) {
        this.setNodeCode(patternData);
      } else if (className.classList.contains('enhance-java_btn')) {
        this.setJavaCode(patternData);
      } else if (className.classList.contains('enhance-python_btn')) {
        this.setPythonCode(patternData);
      }
    }

    setStatusModal(statusHead, statusBody) {
      const statusElem = document.querySelector('.enhance-status');
      const statusHeadElem = document.querySelector('.enhance-status_txt_head');
      const statusBodyElem = document.querySelector('.enhance-status_txt_body');

      statusHeadElem.innerText = statusHead;
      statusBodyElem.innerText = statusBody;
      statusElem.style.display = 'flex';

      setTimeout(() => {
        statusElem.style.display = 'none';
      }, 4000);
    }
  }

  const ref = useRef(true);

  useEffect(() => {
    if (ref.current) {
      const upscaler = new ImageUpscaler();
      upscaler.init();
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

    #enhance-upscale-img {
      font-family: "Picsart-Fonts" !important;
      font-weight: 400;
      width: 1296px !important;
      height: 864px !important;
      margin: 0 auto;
      position: relative;
    }
    #enhance-upscale-img header {
      text-align: center;
    }
    .enhance-heading {
      margin-top: 64px;
      font-weight: 500;
      font-size: 60px;
      line-height: 72px;
    }
    .enhance-main__container {
      margin-top: 40px;
      display: flex;
      justify-content: center;
      gap: 24px;
    }
    .enhance-main__content {
      background-color: #F7F7F7 !important;
      position: relative;
      padding: 24px;
      display: flex;
      border-radius: 24px;
    }
    .enhance-main__edit-params {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 40%;
      min-width: 232px;
    }
    .enhance-subtitle {
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
      white-space: nowrap;
    }
    .enhance-patt_div {
      color: #808080 !important;
      display: flex;
      flex-direction: column;
      gap: 12px 8px;
    }
    .enhance-patt__head {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
    }
    #enhance-patterns {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .enhance-patt_btn {
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
    #enhance-patt_img {
      width: auto;
      height: 50px;
      display: block;
      -webkit-user-drag: none;
      -khtml-user-drag: none;
      -moz-user-drag: none;
      -o-user-drag: none;
    }
    /* pattern icons urls */
    .enhance-patt_btn_0 {
      --url: url(https://picsart.io/wp-content/uploads/2024/02/97ff2ec7-2f17-44a9-86a6-20d19db6ecd8.jpg);
    }
    .enhance-patt_btn_1 {
      --url: url(https://picsart.io/wp-content/uploads/2024/02/e69b14a1-47cf-48a5-b3d4-5b00a27918d7.jpg);
    }
    .enhance-patt_btn_2 {
      --url: url(https://picsart.io/wp-content/uploads/2024/02/c45c40d7-83a5-44cc-9944-eeb9bd8bdc64.jpg);
    }
    .enhance-patt_btn_3 {
      --url: url(https://picsart.io/wp-content/uploads/2024/02/76b50cb9-8529-408f-8ad8-ab81fb19fa49.jpg);
    }
    .enhance-patt_btn_4 {
      --url: url(https://picsart.io/wp-content/uploads/2024/02/3a9f60fa-2c73-44cd-9d86-736b2c5191fd.jpg);
    }
    .enhance-patt_btn_5 {
      --url: url(https://picsart.io/wp-content/uploads/2024/02/b44ace27-5260-4d35-99a1-cebd10d8c801.jpg);
    }
    .enhance-patt_btn_6 {
      --url: url(https://picsart.io/wp-content/uploads/2024/02/8e1c0c40-a0db-428b-9cc7-3e65c0234bb0.jpg);
    }
    .enhance-patt_btn_7 {
      --url: url(https://picsart.io/wp-content/uploads/2024/02/c9770432-1412-43f9-9c7f-1b9134f4b7d6.jpg);
    }
    .enhance-patt_btn_8 {
      --url: url(https://picsart.io/wp-content/uploads/2024/02/3eeae901-17b1-4b1b-81e9-fa9728e34b74.jpg);
    }
    .enhance-active_patt_btn {
      border: 2px solid #c209c1 !important;
      border-radius: 6px !important;
    }
    #enhance-upload_background-image {
      visibility: hidden;
      cursor: pointer;
      position: absolute;
      z-index: -1;
    }
    .enhance-upload_txt {
      font-size: medium !important;
      font-size: 16px !important;
    }
    #enhance-upload__img {
      display: none;
    }
    .enhance-edit-params-text_div {
      margin-top: 20px;
    }
    .enhance-edit-params_txt {
      margin: 0 12px 0px 0;
      font-weight: 600;
      text-align: center;
    }
    .enhance-bck-img_label {
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
    .enhance-loader {
      position: absolute;
      border-top: 4px solid #C209C1 !important;
      border-bottom: 4px solid #C209C1 !important;
      border-right: 4px solid #C209C1 !important;
      border-left: 4px solid transparent !important;
      border-radius: 50%;
      top: 45%;
      left: 45%;
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
    .enhance-main__result-img {
      height: 532px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .enhance-result-img__div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #enhance-res-image {
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
      background-position: center;
    }
    .enhance-mainSection {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-around;
      align-items: stretch;
      align-content: stretch;
      width: 100%;
      height: 500px;
      padding: 10px;
    }
    .enhance-bal-container {
      position: relative;
      width: 100%;
      height: 100%;
      cursor: grab;
      overflow: hidden;
    }
    .enhance-bal-after {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    .enhance-bal-before {
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 15;
      overflow: hidden;
    }
    .enhance-bal-before-inset {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
    }
    .enhance-bal-after img,
    .enhance-bal-before img {
      border-radius: 16px;
      object-fit: cover;
      position: absolute;
      width: 100%;
      height: 100%;
      object-position: 50% 50%;
      top: 0;
      bottom: 0;
      left: 0;
      -webkit-user-drag: none;
      -khtml-user-drag: none;
      -moz-user-drag: none;
      -o-user-drag: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -o-user-select: none;
      user-select: none;
    }
    .enhance-bal-beforePosition {
      background: #121212;
      color: #fff;
      left: 0;
      pointer-events: none;
      border-radius: 0.2rem;
      padding: 2px 10px;
    }
    .enhance-bal-afterPosition {
      background: #121212;
      color: #fff;
      right: 0;
      pointer-events: none;
      border-radius: 0.2rem;
      padding: 2px 10px;
    }
    .enhance-beforeLabel {
      position: absolute;
      top: 0;
      margin: 1rem;
      color: #FFF; 
      background: rgba(18, 18, 18, 0.7);
      font-weight: 500;
      line-height: 16px;
      font-size: 12px;
      border-radius: 12px;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -o-user-select: none;
      user-select: none;
    }
    .enhance-afterLabel {
      position: absolute;
      top: 0;
      margin: 1rem;
      font-size: 12px;
      font-weight: 500;
      line-height: 16px;
      color: #FFF; 
      background: rgba(18, 18, 18, 0.7);
      border-radius: 12px;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -o-user-select: none;
      user-select: none;
    }
    .enhance-bal-handle {
      height: 16px;
      width: 33px;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -20px;
      margin-top: -21px;
      border: 2px solid #FFFFFF;
      border-radius: 1000px;
      z-index: 20;
      pointer-events: none;
    }
    .enhance-handle-left-arrow,
    .enhance-handle-right-arrow {
      width: 0;
      height: 0;
      position: absolute;
      margin-top: -3px;
    }
    .enhance-handle-left-arrow {
      left: 64%;
      margin-left: -15px;
    }
    .enhance-handle-right-arrow {
      right: 84%;
      margin-right: -15px;
    }
    .enhance-bal-handle::before {
      bottom: 50%;
      margin-bottom: 9px;
    }
    .enhance-bal-handle::after {
      top: 50%;
      margin-top: 10px;
    }
    .enhance-bal-handle::before,
    .enhance-bal-handle::after {
      content: " ";
      display: block;
      width: 2px;
      background: #fff;
      height: 540px;
      position: absolute;
      left: 50%;
      margin-left: -1.5px;
    }
    #enhance-rend_img {
      width: 100%;
      height: auto;
      -webkit-user-drag: none;
      -khtml-user-drag: none;
      -moz-user-drag: none;
      -o-user-drag: none;
    }
    .enhance-dragover {
      border: 2px dashed #C209C1 !important;
    }
    .enhance-main__req-code {
      background-color: #F7F7F7 !important;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      border-radius: 24px;
      padding: 23px 24px;
    }
    #enhance-req_code {
      width: 470px;
      height: 470px;
      overflow: scroll;
      font-size: 16px;
      line-height: 24px;
      color: #000000 !important;
    }
    .enhance-requirements,
    .enhance-code_example,
    .enhance-code_example p,
    .enhance-code_example pre {
      font-family: 'Source Code Pro', monospace;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      margin: 0;
    }
    .enhance-tab {
      display: inline-block;
      margin-left: 1em;
    }
    .enhance-code_example {
      margin-top: 20px;
    }
    .enhance-code_buttons {
      display: flex;
      gap: 33px;
    }
    .enhance-c_btn {
      cursor: pointer;
      white-space: nowrap;
      padding: 12px 16px;
      gap: 8px;
      background: #ffffff !important;
      box-shadow: 0px 1px 4px rgba(17, 18, 54, 0.16) !important;
      border-radius: 32px;
      color: #5A00EE !important;
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
    .enhance-c_btn:hover {
      background-color: #dacafb !important;
    }
    .enhance-c_btn-i,
    .enhance-share_btn {
      display: none;
    }
    .enhance-active_code_btn {
      background-color: #dacafb !important;
    }
    #enhance-upscale-img footer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 16px auto;
      width: 1296px;
    }
    .enhance-find {
      display: flex;
      align-items: center;
    }
    .enhance-find a {
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
    .enhance-find a:hover {
      color: #EDEDED !important
    }
    .enhance-footer_btns {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }
    .enhance-footer_btns button:hover {
      background: #EDEDED !important;
    }
    .enhance-api-key_btn,
    .enhance-copy-code_btn {
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
    .enhance-copy-code_btn:hover,
    .enhance-api-key_btn:hover,
    .enhance-share_btn:hover {
      background-color: #f0f0f0 !important;
    }
    .enhance-status {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 16px 16px 16px 16px;
      gap: 16px;
      position: fixed;
      width: 447px;
      height: 48px;
      bottom: 24px;
      background: #FCFCFC;
      box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.24);
      border-radius: 8px;
      z-index: 30;
    }
    .enhance-status_icon {
      background-color: #D31E2A !important;
      width:24px;
      height: 24px;
      border-radius: 20px;
      margin: auto 0;
    }
    .enhance-problem_i {
      position: absolute;
      top: 35px;
      left: 23px;
    }
    .enhance-status_txt {
      display: flex;
      flex-direction: column;
    }
    .enhance-status_txt_head {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
    }
    .enhance-status_txt_body {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #4C4C4C !important;
    }
    .enhance-status_close {
      cursor: pointer;
      position: absolute;
      top: 16px;
      right: 12px;
    }
    .enhance-purple {
      color: #5a00ee !important;
    }
    .enhance-pink {
      color: #c209c1 !important;
    }
    #enhance-upscale-img ::-webkit-scrollbar {
      width: 3px !important;
      height: 3px !important;
    }
    #enhance-upscale-img ::-webkit-scrollbar-thumb {
      background: #C209C1;
      border-radius: 10px;
    }
    #enhance-upscale-img ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 grey !important;
      border-radius: 10px;
    }
    @media only screen and (max-width: 600px) {
      #enhance-upscale-img {
        padding: 0px;
        width: 375px !important;
        height: 1212px !important;
      }
      .enhance-heading {
        margin-top: 24px;
        margin-bottom: 17.38px;
        height: 36px;
        font-weight: 600;
        font-size: 30px;
        line-height: 36px;
      }
      .enhance-main__container {
        margin: 0;
        padding: 0;
        justify-content: center;
        flex-direction: column;
        gap: 24px;
      }
      .enhance-result-img__div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 327px;
        width: 327px;
      }
      .enhance-main__content {
        background-color: white !important;
        margin: 0 24px;
        flex-direction: column-reverse;
        width: 327px;
        height: 514px;
      }
      .enhance-main__result-img {
        position: absolute;
        top: 0;
        left: 0;
        height: 327px;
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        gap: 10px;
      }
      .enhance-edit-params-text_div {
        display: none;
      }
      .enhance-bck-img_label {
        background-color: white;
        left: 0;
        top: 142px;
        bottom: 0;
        width: 327px;
        height: 48px;
        border: 1px solid #CBCBCB;
        border-radius: 72px;
      }
      #enhance-patterns {
        width: 327px;
        height: 80px;
        overflow-x: scroll;
        overflow-y: hidden;
        grid-gap: 8px;
        display: grid;
        grid-template-columns: repeat(9, 1fr);
      }
      .enhance-patt_btn {
        object-fit: cover;
      }
      #enhance-patt_img {
        width: auto;
        height: 50px;
        display: block;
      }
      .enhance-main__edit-params {
        position: absolute; 
        top: 346px;
        left: 0;
      }
      .enhance-bal-container {
        position: static;
      }
      .enhance-bal-handle::before,
      .enhance-bal-handle::after {
        height: 165px; 
      }
      .enhance-bal-after img,
      .enhance-bal-before img {
        width: 327px;
        height: 327px;
      }
      .enhance-main__req-code {
        padding: 0;
        border-radius: 0;
        position: relative;
        width: 375px;
        height: 384px;
      }
      #enhance-req_code {
        width: 327px;
        height: 264px;
        font-size: 16px;
        line-height: 24px;
      }
      .enhance-code_buttons {
        position: absolute;
        gap: 12px;
        width: 350px;
        overflow-x: scroll;
        overflow-y: hidden;
        left: 24px;
        bottom: 24px;
      }
      .enhance-copy-code_btn,
      .enhance-share_btn {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 0;
        padding: 0;
        border-radius: 24px;
        background-color: #F2F2F2 !important;
        border: none !important;
      }
      .enhance-c_btn-i {
        display: block;
      }
      .enhance-c_btn-txt {
        display: none;
      }
      #enhance-upscale-img footer {
        width: 375px;
        flex-direction: column;
        position: absolute;
      }
      .enhance-footer_btns {
        align-self: flex-end;
      }
      .enhance-api-key_btn:hover {
        background-color: white !important;
      }
      .enhance-api-key_btn {
        white-space: nowrap;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        width: 124px;
        height: 40px;
        border: 1px solid #C209C1 !important;
        padding: 0px;
      }
      .enhance-find {
        position: absolute;
        top: 100px;
        bottom: 44px;
        left: 124px;
        right: 123px;
      }
      .enhance-find a {
        margin: 0;
      }
      .enhance-status {
        width: 295px;
        bottom: 24px;
        height: 48px;
        left: 50%;
        transform: translateX(-50%);
      }
      #enhance-upscale-img ::-webkit-scrollbar {
        width: 0px !important;
        height: 0px !important;
      }
    }
    @media (min-width: 960px) and (max-width: 1320px) {
      #enhance-upscale-img {
        padding: 0px;
        width: 862px !important;
        height: 1024px !important;
      }
      .enhance-heading {
        margin-top: 64px;
        margin-bottom: 40px;
        font-size: 36px;
        line-height: 48px;
      }
      .enhance-main__content {
        padding: 16px 16px 32px 16px;
      }
      .enhance-main__edit-params {
        gap: 34px;
        min-width: 232px;
      }
      .enhance-subtitle {
        margin-top: 14px;
        font-size: 16px;
        line-height: 24px;
      }
      .enhance-patt_div {
        gap: 12px 4px;
      }
      .enhance-patt__head {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
      }
      #enhance-patterns {
        gap: 8px;
      }
      .enhance-patt_btn {
        width: 62px;
        height: 62px;
      }
      #enhance-patt_img {
        width: auto;
        height: 36px;
      }
      .enhance-edit-params_txt {
        margin: 0  24px 0 0;
      }
      .enhance-bck-img_label {
        position: absolute;
        color: #c209c1;
        left: 48px;
        top: 516px;
        gap: 8px;
      }
      .enhance-main__result-img {
        height: 532px;
        gap: 10px;
      }
      #enhance-res-image {
        height: 536px;
        width: 385px;
      }
      .enhance-main__req-code {
        padding: 16px 16px 15px 16px;
      }
      #enhance-req_code {
        width: 277px;
        height: 400px;
      }
      .enhance-code_buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
      }
      .enhance-c_btn {
        width: 130px;
        height: 40px;
        justify-content: center;
      }
      #enhance-upscale-img footer {
        display: flex;
        justify-content: space-between;
        margin: 16px 0 0px -42px;
        width: 960px;
      }
      .enhance-status {
       bottom: 24px;
        left: 24px;
      }
    }
    @media (min-width: 600px) and (max-width: 960px) {
      #enhance-upscale-img {
        width: 736px !important;
        height: 1172px !important;
        padding: 0;
      }
      .enhance-main__container {
        flex-direction: column;
      }
      .enhance-main__content {
        padding: 32px 0 16px 16px;
      }
      .enhance-heading {
        margin-bottom: 40px;
        font-size: 36px;
        line-height: 48px;
      }
      .enhance-main__edit-params {
        gap: 34px;
        width: 210px;
      }
      .enhance-subtitle {
        margin-top: 0;
        font-size: 16px;
        line-height: 24px;
      }
      .enhance-patt_div {
        gap: 12px 4px;
      }
      #enhance-patterns {
        gap: 8px;
      }
      .enhance-patt_btn {
        width: 62px;
        height: 62px;
      }
      #enhance-patt_img {
        width: auto;
        height: 36px;
      }
      .enhance-bck-img_label {
        position: absolute;
        color: #c209c1;
        left: 48px;
        top: 516px;
        gap: 8px;
      }
      #enhance-patterns {
        gap: 8px;
      }
      .enhance-patt_btn {
        width: 62px;
        height: 62px;
      }
      .enhance-result-img__div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      #enhance-res-image {
        width: 466px;
      }
      .enhance-main__req-code {
        align-items: flex-start;
        padding: 16px;
      }
      #enhance-req_code {
        width: 688px;
        height: 208px;
      }
      .enhance-code_buttons {
        margin-top: 24px;
        gap: 16px;
        justify-content: flex-start;
      }
      .enhance-c_btn {
        width: 130px;
        height: 40px;
        justify-content: center;
      }
      #enhance-upscale-img footer {
        width: 736px;
        margin: 16px 0 0 0;
      }
      .enhance-status {
        bottom: 24px;
      }
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div id="enhance-upscale-img">
        <header>
          <div className="enhance-heading">Try Now</div>
        </header>
        <main className="enhance-main__container">
          <div className="enhance-main__content">
            <div className="enhance-main__edit-params">
              <div className="enhance-subtitle">Try one of these images:</div>
              <div>
                <div className="enhance-patt_div">
                  <div id="enhance-patterns"></div>
                </div>
              </div>
              <div className="enhance-edit-params-text_div">
                <p className="enhance-edit-params_txt">Can't pick?</p>
                <p className="enhance-edit-params_txt">Upload your own image</p>
              </div>
              <div className="enhance-upload-btn_div gtm-track-try-demo">
                <input type="file" id="enhance-upload__img" accept=".png, .jpg, .jpeg, .webp" />
                <label htmlFor="enhance-upload__img" className="enhance-bck-img_label gtm-track-try-demo">
                  <img src={`data:image/svg+xml,${uploadSVG}`} />
                  Upload photo
                </label>
              </div>
            </div>
            <div className="enhance-main__result-img">
              <div className="enhance-result-img__div">
                <div id="enhance-res-image" className="enhance-drop-zone">
                  <input type="file" id="enhance-upload__img" className="enhance-drop-zone__input" accept=".png, .jpg, .jpeg, .webp" />
                  <div id="enhance-one" className="enhance-bal-container">
                    <div className="enhance-bal-after">
                      <img className="enhance-after_img" src="https://pastatic.picsart.com/cms-pastatic/97ff2ec7-2f17-44a9-86a6-20d19db6ecd8.jpg" />
                      <div className="enhance-load"></div>
                      <div className="enhance-bal-afterPosition enhance-afterLabel">After</div>
                    </div>
                    <div className="enhance-bal-before">
                      <div className="enhance-bal-before-inset">
                        <img className='enhance-before_img' src={"https://picsart.io/wp-content/uploads/2024/02/0.jpg"} />
                        <div className="enhance-load"></div>
                        <div className="enhance-bal-beforePosition enhance-beforeLabel">Before</div>
                      </div>
                    </div>
                    <div className="enhance-bal-handle">
                      <span className="enhance-handle-left-arrow">
                        <img src={`data:image/svg+xml,${beforeSVG}`} />
                      </span>
                      <span className="enhance-handle-right-arrow">
                        <img src={`data:image/svg+xml,${afterSVG}`} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="enhance-main__req-code">
            <div id="enhance-req_code">
              <p className="enhance-requirements"></p>
              <div className="enhance-code_example" id="enhance-text-to-copy"></div>
            </div>
            <div className="enhance-code_buttons">
              <button className="enhance-c_btn enhance-js_btn gtm-track-try-demo">JS / React</button>
              <button className="enhance-c_btn enhance-nodejs_btn gtm-track-try-demo">JS / Node</button>
              <button className="enhance-c_btn enhance-java_btn gtm-track-try-demo">Java</button>
              <button className="enhance-c_btn enhance-python_btn gtm-track-try-demo">Python</button>
            </div>
          </div>
        </main>
        <footer>
          <div className="enhance-find">
            <a href="https://picsart.io/api-reference" className="gtm-track-try-demo" target="_blank">Find more details</a>
          </div>
          <div className="enhance-footer_btns">
            <form action="https://console.picsart.io/login" target="_blank" method="get">
              <button className="enhance-api-key_btn gtm-track-try-demo">Get API key</button>
            </form>
            <button className="enhance-copy-code_btn gtm-track-try-demo" onClick={() => {console.log("copyCode()");}}>
              <span className="enhance-c_btn-txt">Copy code</span>
              <i className="enhance-c_btn-i">
                <img src={`data:image/svg+xml,${copySVG}`} alt="Copy" />
              </i>
            </button>
            <button className="enhance-share_btn" onClick={() => {console.log("shareCode()");}}>
              <i className="enhance-c_btn-i">
                <img src={`data:image/svg+xml,${shareSVG}`} alt="Share" />
              </i>
            </button>
          </div>
        </footer>
        <div className="enhance-status" style={{display: 'none'}}>
          <div className="enhance-status_icon">
            <img src={`data:image/svg+xml,${xSVG}`} className="enhance-problem_i" />
          </div>
          <div className="enhance-status_txt">
            <span className="enhance-status_txt_head">Dialog header</span>
            <span className="enhance-status_txt_body">Dialog body text</span>
          </div>
          <a className='enhance-status_close' onClick={() => {console.log("closeStatus()");}}>
            <img src={`data:image/svg+xml,${closeSVG}`} />
          </a>
        </div>
      </div>
    </>
  );
};