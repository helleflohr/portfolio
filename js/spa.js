class Spa {
  constructor(defaultPage) {
    this.defaultPage = defaultPage;
    this.pages = document.querySelectorAll(".page");
    this.navItems = document.querySelectorAll(".tabbar a");
    this.pageChange();
    this.hideNav();
  }

  // hide all pages
  hideAllPages() {
    for (let page of this.pages) {
      page.style.display = "none";
    }
  }

  // show page or tab
  showPage(pageId) {
    this.hideAllPages();
    document.querySelector(`#${pageId}`).style.display = "block";
    this.setActiveTab(pageId);
  }

  // sets active tabbar/ menu item
  setActiveTab(pageId) {
    for (let navItem of this.navItems) {
      if (`#${pageId}` === navItem.getAttribute("href")) {
        navItem.classList.add("active");
      } else {
        navItem.classList.remove("active");
      }
    }
  }

  // navigate to a new view/page by changing href
  navigateTo(pageId) {
    window.location.href = `#${pageId}`;
  }

  // set default page or given page by the hash url
  // function is called 'onhashchange'
  pageChange() {
    let page = this.defaultPage;
    if (window.location.hash) {
      page = window.location.hash.slice(1);
    }
    this.showPage(page);
  }

  hideNav() {
    if (window.location.href == "#introduction") {
      document.querySelector(".tabbar").style.display = "none";
    }
  }

}

export default Spa;





// "use strict";

// // hide all pages
// function hideAllPages() {
//   let pages = document.querySelectorAll(".page");
//   for (let page of pages) {
//     page.style.display = "none";
//   }
// }

// // show page or tab
// function showPage(pageId) {
//   console.log("Show Page");
//   hideAllPages();
//   document.querySelector(`#${pageId}`).style.display = "block";
//   setActiveTab(pageId);
// }

// // sets active tabbar/ menu item
// function setActiveTab(pageId) {
//   let pages = document.querySelectorAll(".tabbar a");
//   for (let page of pages) {
//     if (`#${pageId}` === page.getAttribute("href")) {
//       page.classList.add("active");
//     } else {
//       page.classList.remove("active");
//     }
//   }
// }

// // navigate to a new view/page by changing href
// function navigateTo(pageId) {
//   location.href = `#${pageId}`;
// }

// // set default page or given page by the hash url
// // function is called 'onhashchange'
// function pageChange() {
//   console.log("Hello");
//   let page = "home";
//   if (location.hash) {
//     page = location.hash.slice(1);
//   }
//   showPage(page);
// }

// pageChange(); // called by default when the app is loaded for the first time