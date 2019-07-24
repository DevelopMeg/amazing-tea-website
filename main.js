// *****************************************************

// LEAVE NAV AFTER CLICK BURGER (MOBILE)

const burgerBox = document.querySelector(".head-burger-menu");

const menu = document.querySelector(".head-menu");

const handleShowMenu = () => {
  menu.classList.toggle("on");
};

burgerBox.addEventListener("click", handleShowMenu);

// *****************************************************

// SCROLL TO SECTION AFTER CLICK NAV

const navItems = document.querySelectorAll(".navbar__item");
const sections = ["choose-tea", "about-us", "order-tea"];
const logoHeight = document.querySelector(".head-logo").offsetHeight;

navItems.forEach((navItem, i) => {
  const section = document.querySelector(`.section-${sections[i]}`);

  const handleScrollSection = () => {
    window.scrollTo({
      behavior: "smooth",
      top: section.offsetTop + window.innerHeight - logoHeight
    });
  };

  navItem.addEventListener("click", handleScrollSection);
});

// **************************

// CLOSE ITEM NAV AFTER CLICK (MOBILE)

navItems.forEach(items => {
  const handleCloseNav = () => {
    menu.classList.remove("on");
  };

  items.addEventListener("click", handleCloseNav);
});

// *****************************************************

// SCROLL TO ARTICLE BOX AFTER CLICK CHOOSE ITEM

const selectItems = [...document.querySelectorAll(".select-tea__item")];

const articles = ["black-tea", "green-tea", "red-tea", "white-tea"];

selectItems.forEach((selectItem, i) => {
  const article = document.querySelector(`.box-choose-tea--${articles[i]}`);

  const handleScrollArticle = () => {
    window.scrollTo({
      behavior: "smooth",
      top: article.offsetTop + window.innerHeight - logoHeight
    });
  };

  selectItem.addEventListener("click", handleScrollArticle);
});

// *****************************************************

// SCROLL TO ORDER SECTION AFTER CLICK BTN IN ARTICLE

const orderBtns = document.querySelectorAll(".order-choose-tea__btn");

const sectionOrder = document.querySelector(".section-order-tea");

orderBtns.forEach(orderBtn => {
  const handleScrollOrder = () => {
    window.scrollTo({
      behavior: "smooth",
      top: sectionOrder.offsetTop + window.innerHeight - logoHeight
    });
  };

  orderBtn.addEventListener("click", handleScrollOrder);
});

// *****************************************************

// CHOOSE TEA CHANGE COLOR SPAN TITLE

const titleSpan = document.querySelector(".section-choose-tea__title--span");

const selectTeaBoxes = [...document.querySelectorAll(".select-tea__item")];

const blackBox = document.querySelector(".select-tea__item--black-tea");
const greenBox = document.querySelector(".select-tea__item--green-tea");
const redBox = document.querySelector(".select-tea__item--red-tea");
const whiteBox = document.querySelector(".select-tea__item--white-tea");

selectTeaBoxes.forEach(teaBox => {
  const addColor = () => {
    if (teaBox == blackBox) {
      titleSpan.classList.add("on-black");
    } else if (teaBox == greenBox) {
      titleSpan.classList.add("on-green");
    } else if (teaBox == redBox) {
      titleSpan.classList.add("on-red");
    } else if (teaBox == whiteBox) {
      titleSpan.classList.add("on-white");
    }
  };

  teaBox.addEventListener("mouseover", addColor);
});

selectTeaBoxes.forEach(teaBox => {
  const removeColor = () => {
    if (teaBox == blackBox) {
      titleSpan.classList.remove("on-black");
    } else if (teaBox == greenBox) {
      titleSpan.classList.remove("on-green");
    } else if (teaBox == redBox) {
      titleSpan.classList.remove("on-red");
    } else if (teaBox == whiteBox) {
      titleSpan.classList.remove("on-white");
    }
  };

  teaBox.addEventListener("mouseout", removeColor);
});

// *****************************************************

// OPEN PRICE & CLOSE PRICE (ROLL)

const priceTitles = [...document.querySelectorAll(".price-teas__title")];

priceTitles.forEach((priceTitle, i) => {
  const prefix = ["black-tea", "green-tea", "red-tea", "white-tea"];

  const priceTitleItem = document.querySelector(
    `.price-teas__title--${prefix[i]}`
  );

  const sectionPriceItem = document.querySelector(`.price-teas--${prefix[i]}`);

  const priceBoxItem = document.querySelector(`.price-list--${prefix[i]}`);

  const articleTextItem = document.querySelector(
    `.read-choose-tea--${prefix[i]}`
  );

  const showPrice = () => {
    if (priceTitle === priceTitleItem) {
      sectionPriceItem.classList.toggle("on");
      priceBoxItem.classList.toggle("on");
      articleTextItem.classList.toggle("on");
    }
  };

  priceTitle.addEventListener("click", showPrice);
});

// *****************************************************

// ANIMATION PRICE

const handleScrollPage = () => {
  const windowHeight = window.innerHeight;

  const scrollValue = window.scrollY;

  const priceTitleBlack = document.querySelector(
    ".price-teas__title--black-tea"
  );
  const priceTitleGreen = document.querySelector(
    ".price-teas__title--green-tea"
  );
  const priceTitleRed = document.querySelector(".price-teas__title--red-tea");
  const priceTitleWhite = document.querySelector(
    ".price-teas__title--white-tea"
  );

  const articleBoxBlack = document.querySelector(".box-choose-tea--black-tea");
  const articleBoxGreen = document.querySelector(".box-choose-tea--green-tea");
  const articleBoxRed = document.querySelector(".box-choose-tea--red-tea");
  const articleBoxWhite = document.querySelector(".box-choose-tea--white-tea");

  const number = 600 + "px";
  const size = parseInt(number);

  if (
    scrollValue >
    articleBoxBlack.offsetTop +
      articleBoxBlack.offsetHeight -
      windowHeight +
      size
  ) {
    priceTitleBlack.classList.add("animate");
  }

  if (
    scrollValue >
    articleBoxGreen.offsetTop +
      articleBoxGreen.offsetHeight -
      windowHeight +
      size
  ) {
    priceTitleGreen.classList.add("animate");
  }

  if (
    scrollValue >
    articleBoxRed.offsetTop + articleBoxRed.offsetHeight - windowHeight + size
  ) {
    priceTitleRed.classList.add("animate");
  }

  if (
    scrollValue >
    articleBoxWhite.offsetTop +
      articleBoxWhite.offsetHeight -
      windowHeight +
      size
  ) {
    priceTitleWhite.classList.add("animate");
  }
};

document.addEventListener("scroll", handleScrollPage);
