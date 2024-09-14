document.addEventListener('DOMContentLoaded', () => {
	const body = document.querySelector('body')
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.menu')
	const menuItem = document.querySelectorAll('.menu__item')
	const close = document.querySelector('.menu__close')

	const toggleMenu = () => {
		menu.classList.toggle('menu--active')
		burger.classList.toggle('burger--active')
		body.classList.toggle('no-scroll')
	}

	const clickOutsideMenu = event => {
		if (!menu.contains(event.target) && !burger.contains(event.target)) {
			menu.classList.remove('menu--active')
			burger.classList.remove('burger--active')
			body.classList.remove('no-scroll')
		}
	}

	burger.addEventListener('click', toggleMenu)
	document.addEventListener('click', clickOutsideMenu)

	// if (burger) {
	//   menuItem.forEach((item) => {
	//     item.addEventListener('click', () => {
	//       burger.classList.toggle('active')
	//       menu.classList.remove('active')
	//       body.classList.remove('no-scroll')
	//     })
	//   })
	// }

	function handleTabClick(
		tabs,
		pages,
		activeTabClass,
		activePageClass,
		opacityPageClass
	) {
		tabs.forEach((tab, idx) => {
			tab.addEventListener('click', () => {
				tabs.forEach(tab => tab.classList.remove(activeTabClass))
				pages.forEach(page => {
					page.classList.remove(activePageClass)
					page.classList.remove(opacityPageClass)
				})

				tab.classList.add(activeTabClass)
				pages[idx].classList.add(activePageClass)

				setTimeout(() => {
					pages[idx].classList.add(opacityPageClass)
				}, 380)
			})
		})
	}

	const tabs = document.querySelectorAll('.tab__target')
	const pages = document.querySelectorAll('.tab__info')

	handleTabClick(
		tabs,
		pages,
		'tab__target--active',
		'tab__info--active',
		'tab__info--opacity'
	)

	const accordion = document.querySelectorAll('.accordion')

	accordion?.forEach(acc => {
		acc.addEventListener('click', e => {
			e.preventDefault()
			// const content = acc.querySelector('.accordion__content')
			const content = acc.nextElementSibling
			if (acc.classList.contains('accordion--active')) {
				acc.classList.remove('accordion--active')
				content.style.maxHeight = '0'
			} else {
				acc.classList.add('accordion--active')
				content.style.maxHeight = content.scrollHeight + 'px'
			}
		})
	})

	// const accordion = document.querySelectorAll('.accordion')

	// if (accordion) {
	// 	accordion.forEach(acc => {
	// 		acc.addEventListener('click', () => {
	// 			const content = acc.querySelector('.accordion__content')

	// 			if (acc.classList.contains('accordion--active')) {
	// 				acc.classList.remove('accordion--active')
	// 				content.style.maxHeight = '0'
	// 			} else {
	// 				acc.classList.add('accordion--active')
	// 				content.style.maxHeight = `${content.scrollHeight}px`
	// 			}
	// 		})
	// 	})

	// 	document.addEventListener('click', e => {
	// 		const isAccordionClicked = e.target.closest('.accordion')

	// 		if (!isAccordionClicked) {
	// 			accordion.forEach(acc => {
	// 				const content = acc.querySelector('.accordion__content')
	// 				acc.classList.remove('accordion--active')
	// 				content.style.maxHeight = '0'
	// 			})
	// 		}
	// 	})
	// }

	// accordion?.forEach(acc => {
	// 	acc.addEventListener('click', function (e) {
	// 		const content = this.querySelector('.accordion__content')
	// 		if (!this.classList.contains('accordion--active')) {
	// 			accordion.forEach(otherAcc => {
	// 				if (otherAcc !== this) {
	// 					const otherContent = otherAcc.querySelector('.accordion__content')
	// 					otherAcc.classList.remove('accordion--active')
	// 					otherContent.style.maxHeight = '0'
	// 				}
	// 			})
	// 			this.classList.add('accordion--active')
	// 			content.style.maxHeight = content.scrollHeight + 'px'
	// 		} else {
	// 			this.classList.remove('accordion--active')
	// 			content.style.maxHeight = '0'
	// 		}
	// 	})
	// })

	// accordionAlt?.forEach(acc => {
	// 	acc.addEventListener('click', function (e) {
	// 		const content = this.querySelector('.accordionAlt__content')
	// 		if (!e.target.closest('.accordionAlt__content')) {
	// 			if (!this.classList.contains('accordionAlt--active')) {
	// 				accordionAlt.forEach(otherAcc => {
	// 					if (otherAcc !== this) {
	// 						const otherContent = otherAcc.querySelector(
	// 							'.accordionAlt__content'
	// 						)
	// 						otherAcc.classList.remove('accordionAlt--active')
	// 						otherContent.style.maxHeight = '0'
	// 					}
	// 				})
	// 				this.classList.add('accordionAlt--active')
	// 				content.style.maxHeight = content.scrollHeight + 'px'
	// 			} else {
	// 				this.classList.remove('accordionAlt--active')
	// 				content.style.maxHeight = '0'
	// 			}
	// 		}
	// 	})
	// })

	// const accordions = document.querySelectorAll('.accordion')
	// const contents = document.querySelectorAll('.accordion-content')

	// accordions?.forEach((acc, index) => {
	//   acc.addEventListener('click', (e) => {
	//     e.preventDefault()

	//     const content = contents[index]

	//     if (acc.classList.contains('accordion--active')) {
	//       acc.classList.remove('accordion--active')
	//       content.style.maxHeight = '0'
	//     } else {
	//       acc.classList.add('accordion--active')
	//       content.style.maxHeight = content.scrollHeight + 'px'
	//     }
	//   })
	// })

	const menuLinks = document.querySelectorAll('[class][data-goto]')

	if (menuLinks.length > 0) {
		menuLinks.forEach(link => {
			link.addEventListener('click', onMenuLinkClick)
		})

		function onMenuLinkClick(e) {
			const link = e.target
			if (link.dataset.goto && document.querySelector(link.dataset.goto)) {
				const gotoBlock = document.querySelector(link.dataset.goto)
				const gotoBlockValue = gotoBlock.getBoundingClientRect().top
				window.scrollBy({
					top: gotoBlockValue,
					behavior: 'smooth',
				})
				e.preventDefault()
			}
		}
	}

	if (document.querySelector('[name="phone"]')) {
		const element = document.querySelector('[name="phone"]')
		const maskOptions = {
			mask: '+{7} 000 000 00 00',
		}
		const mask = IMask(element, maskOptions)
	}

	if (document.querySelector('.slider__swiper')) {
		var sliderSwiper = new Swiper('.slider__swiper', {
			slidesPerView: 2,
			spaceBetween: 5,
			breakpoints: {
				993: {
					slidesPerView: 2,
          spaceBetween: 30,
				},
				577: {
          slidesPerView: 2.1,
          spaceBetween: 5,
				},
				361: {
					slidesPerView: 1.1,
				},
				320: {
					slidesPerView: 1.1,
          spaceBetween: 5,
				},
			},
			navigation: {
				nextEl: `.slider__arrow-next`,
				prevEl: `.slider__arrow-prev`,
			},
      pagination: {
        el: ".slider__dots",
      },
		})
	}
	if (document.querySelector('.popular__swiper')) {
		var popularSwiper = new Swiper('.popular__swiper', {
			slidesPerView: 3,
			spaceBetween: 17,
			breakpoints: {
				993: {
					slidesPerView: 3,
				},
				577: {
          slidesPerView: 2,
				},
				361: {
					slidesPerView: 1,
				},
				320: {
					slidesPerView: 1,
				},
			},
			navigation: {
				nextEl: `.popular__arrow-next`,
				prevEl: `.popular__arrow-prev`,
			},
		})
	}

	// const slidersSwipers = []
	// const sliderSwiper = document.querySelectorAll('.slider__swiper')
	// sliderSwiper?.forEach((swiper, index) => {
	// 	slidersSwipers.push(setSlidersSwiper(index + 1))
	// })
	// function setSlidersSwiper(index) {
	// 	return new Swiper(`.slider__swiper--${index}`, {
	// 		navigation: {
	// 			prevEl: `.slider__arrow-prev--${index}`,
	// 			nextEl: `.slider__arrow-next--${index}`,
	// 		},
	// 		breakpoints: {
	// 			992: {
	// 				slidesPerView: 3,
	// 				spaceBetween: 32,
	// 			},
	// 			768: {
	// 				slidesPerView: 2.1,
	// 				spaceBetween: 24,
	// 			},
	// 			576: {
	// 				slidesPerView: 1.6,
	// 				spaceBetween: 16,
	// 			},
	// 			414: {
	// 				slidesPerView: 1.5,
	// 				spaceBetween: 12,
	// 			},
	// 			320: {
	// 				slidesPerView: 1.1,
	// 				spaceBetween: 12,
	// 			},
	// 		},
	// 	})
	// }
})
// $(document).ready(function () {})
// $('.catalog__sorting').select2({
//   dropdownParent: $('.catalog__sort-select'),
//   // placeholder: 'Выберите из списка',
// })
