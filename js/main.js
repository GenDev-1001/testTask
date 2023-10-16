const burger = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu__list");

const btnLang = document.querySelector(".btn--lang");
const langList = document.querySelector(".lang__list");
const langItems = document.querySelectorAll(".lang__list-item");


const burgerClickHandle = () => {
	menu.classList.toggle("menu--active");
	burger.classList.toggle("burger--active");
};

const btnLangClickHandle = () => {
	langList.classList.toggle("lang__list--active");
};

const langItemClickHandle = (e) => {
	if (btnLang.innerHTML !== e.target.innerHTML) {
		btnLang.innerHTML = e.target.innerHTML;
		langList.classList.remove("lang__list--active");
	}
};

burger.addEventListener("click", burgerClickHandle);
btnLang.addEventListener("click", btnLangClickHandle);
langItems.forEach((item) =>
	item.addEventListener("click", langItemClickHandle)
);


new SimpleBar(document.getElementById("page__blog-box"), {
	autoHide: false,
	clickOnTrack: false,
});
