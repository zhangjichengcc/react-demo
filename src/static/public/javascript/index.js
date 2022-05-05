/*
* @Author: zhangjicheng
 * @Date: 2022-04-07 23:32:18
 * @LastEditTime: 2022-04-21 22:39:57
 * @LastEditors: zhangjicheng
 * @Description: 前端资源 js
 * @FilePath: \ejs-portfolio\src\public\javascript\index.js
 */

// @ts-nocheck
'use strict';


/** utils */


/**
 * 复制字符串到剪切板
 * @param {*} text 
 * @returns 
 */
function clipboard(text) {
  return new Promise((resolve, reject) => {
    try {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function(res) {
          resolve(res)
        }, function(err) {
          reject(err)
        });
      } else {
        const input = document.createElement('input');
        input.id = 'copyToClipboard_input';
        input.value = text;
        document.body.appendChild(input);
        input.select();
        const res = document.execCommand('copy');
        document.body.removeChild(input);
        resolve(res);
      }
    } catch (err) {
      reject(err);
    }
  })
}

/**
 * 格式化日期，英文格式
 * @param {*} str 
 * @returns 
 */
function displayDataEN(str) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return str.replace(/(\d+)[-\|](\d+)[-\|](\d+)/, function($0, $1, $2, $3) {
    const month = months[Number($2) - 1];
    return `${month} ${$3}, ${$1}`;
  })
}



/** methods */

/**
 * 弹窗方法
 * @param {*} text 
 */
const toast = (function() {
  const { document } = globalThis;
  const toastDom = document.createElement('div');
  toastDom.classList.add('global-toast');
  document.body.appendChild(toastDom);
  let timer = null;
  return function(text) {
    if (timer) {
      clearTimeout(timer);
      timer = null;
      toastDom.classList.remove('active');
    }
    toastDom.innerHTML = `
      <p>${text}</p>
    `;
    toastDom.classList.add('active');
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      toastDom.classList.remove('active');
    }, 2500);
  }
}());

const socialBtns = document.querySelectorAll("[data-social-value]");
socialBtns.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    const { socialValue, socialLabel } = btn.dataset;
    socialValue && clipboard(socialValue).then(res => {
      toast(`${socialLabel}已复制到剪切板`);
    });
  })
})


/** html javascript */

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}
