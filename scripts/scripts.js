document.addEventListener('DOMContentLoaded', () => {
	const body = document.querySelector('body')
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.menu')

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

	const reviewsСards = document.querySelector('.reviews__cards')
	if (reviewsСards) {
		const reviewsСardsItem = reviewsСards?.querySelectorAll('.reviews__card')
		const showMoreButton = reviewsСards.nextElementSibling
		console.log(showMoreButton)

		let currentIndex = 0
		const cardsToShow = 6

		function showNextCards() {
			for (let i = currentIndex; i < currentIndex + cardsToShow; i++) {
				if (reviewsСardsItem[i]) {
					reviewsСardsItem[i].style.display = 'flex'
					reviewsСardsItem[i]?.classList.add('visible')
				}
			}
			currentIndex += cardsToShow
			if (currentIndex >= reviewsСardsItem.length) {
				if (showMoreButton) {
					showMoreButton.style.display = 'none'
				}
				reviewsСardsItem.forEach(card => {
					card.classList.remove('visible')
				})
			}
		}
		showNextCards()

		showMoreButton?.addEventListener('click', function () {
			showNextCards()
		})
	}
	const stockInner = document.querySelector('.stock__inner')
	if (stockInner) {
		const stockItem = stockInner?.querySelectorAll('.stock__item')
		const showMoreButton = stockInner.nextElementSibling
		console.log(showMoreButton)

		let currentIndex = 0
		const cardsToShow = 3

		function showNextCards() {
			for (let i = currentIndex; i < currentIndex + cardsToShow; i++) {
				if (stockItem[i]) {
					stockItem[i].style.display = 'flex'
				}
			}
			currentIndex += cardsToShow
			if (currentIndex >= stockItem.length) {
				if (showMoreButton) {
					showMoreButton.style.display = 'none'
				}
			}
		}
		showNextCards()

		showMoreButton?.addEventListener('click', function () {
			showNextCards()
		})
	}

	if (innerWidth > 1201) {
		window.addEventListener('scroll', function () {
			const header = document.querySelector('.header')
			const headerInner = header.querySelector('.header__inner')
			const bodyRect = document.body.getBoundingClientRect()

			if (window.innerWidth > 1366) {
				if (headerInner.getBoundingClientRect().top < 0) {
					header.classList.add('header--fixed')
				} else if (bodyRect.top >= -75) {
					header.classList.remove('header--fixed')
				}
			} else {
				if (headerInner.getBoundingClientRect().top < 0) {
					header.classList.add('header--fixed')
				} else if (bodyRect.top >= -51) {
					header.classList.remove('header--fixed')
				}
			}
		})
	}

    if(innerWidth > 992) {
        const numbersItems = document.querySelectorAll('.numbers__item')

		const observerCallback = entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('animate')
				}
			})
		}

		const observer = new IntersectionObserver(observerCallback, {
			rootMargin: '0px',
			threshold: 0.5,
		})

		numbersItems.forEach(item => {
			observer.observe(item)
		})
    }

	const accordion = document.querySelectorAll('.accordion')

	accordion?.forEach(acc => {
		acc.addEventListener('click', e => {
			e.preventDefault()
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

	const accordionHover = document.querySelectorAll('.accordionHover')

	accordionHover?.forEach(acc => {
		if (innerWidth > 993) {
			acc.addEventListener('mouseover', e => {
				e.preventDefault()
				const content = acc.querySelector('.accordionHover__content')
				acc.classList.add('accordionHover--active')
				content.style.maxHeight = content.scrollHeight + 'px'
			})
			acc.addEventListener('mouseleave', e => {
				e.preventDefault()
				const content = acc.querySelector('.accordionHover__content')
				if (acc.classList.contains('accordionHover--active')) {
					acc.classList.remove('accordionHover--active')
					content.style.maxHeight = '0'
				}
			})
		} else {
			acc.addEventListener('click', e => {
				e.preventDefault()
				const content = acc.querySelector('.accordionHover__content')
				if (acc.classList.contains('accordionHover--active')) {
					acc.classList.remove('accordionHover--active')
					content.style.maxHeight = '0'
				} else {
					acc.classList.add('accordionHover--active')
					content.style.maxHeight = content.scrollHeight + 'px'
				}
			})
		}
	})

	if (document.querySelector('.slider__swiper')) {
		var sliderSwiper = new Swiper('.slider__swiper', {
			slidesPerView: 2,
			spaceBetween: 5,
            loop: 'true',
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
				el: '.slider__dots',
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

	if (document.querySelector('.problems__swiper')) {
		var sliderSwiper = new Swiper('.problems__swiper', {
			slidesPerView: 2,
			spaceBetween: 15,
			breakpoints: {
				993: {
					slidesPerView: 2,
				},
				577: {
					slidesPerView: 2,
				},
				361: {
					slidesPerView: 1,
					grid: {
						rows: 2,
					},
				},
				320: {
					slidesPerView: 1,
					grid: {
						rows: 2,
					},
				},
			},
			navigation: {
				nextEl: `.problems__arrow-next`,
				prevEl: `.problems__arrow-prev`,
			},
			pagination: {
				el: '.problems__dots',
			},
		})
	}

	if (document.querySelector('.licenses__swiper')) {
		var licensesSwiper = new Swiper('.licenses__swiper', {
			slidesPerView: 3,
			spaceBetween: 80,
			breakpoints: {
				993: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				577: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				361: {
					slidesPerView: 1.2,
					spaceBetween: 10,
				},
				320: {
					slidesPerView: 1.2,
					spaceBetween: 10,
				},
			},
			navigation: {
				nextEl: `.licenses__arrow-next`,
				prevEl: `.licenses__arrow-prev`,
			},
		})
	}

	if (document.querySelector('#mapYandex')) {
		const map = document.querySelector('.map')
		const points = [
			{
				text: '+7 (812) 223-51-27',
				address: '191014, Санкт-Петербург, улица Рылеева, дом 1',
				schedule:
					'Понедельник-пятница с 10:00 до 20:00, <br> Суббота с 11:00 до 19:00, <br> Воскресенье с 11:00 до 19:00',
				coords: [59.92617, 30.286161],
			},
			{
				text: '+7 (812) 223-51-27',
				address: '191014, Санкт-Петербург, улица Рылеева, дом 1',
				schedule:
					'Понедельник-пятница с 10:00 до 20:00, <br> Суббота с 11:00 до 19:00, <br> Воскресенье с 11:00 до 19:00',
				coords: [59.942412, 30.351055],
			},
			{
				text: '+7 (812) 223-51-27',
				address: '191014, Санкт-Петербург, улица Рылеева, дом 1',
				schedule:
					'Понедельник-пятница с 10:00 до 20:00, <br> Суббота с 11:00 до 19:00, <br> Воскресенье с 11:00 до 19:00',
				coords: [59.947243, 30.378472],
			},
		]

		ymaps.ready(init)

		function init() {
			const myMap = new ymaps.Map('mapYandex', {
				center: [59.942412, 30.351055],
				zoom: 12,
			})

			const myCollection = new ymaps.GeoObjectCollection()

			points.forEach(point => {
				const content = `
                    <div class="map__ballon">
                        <div class="map__ballon-box">
                            <p class="map__ballon-title">Телефон</p>
                            <p class="map__ballon-text">
                                <a href="tel:${point.text}">${point.text}</a>
                            </p>
                        </div>
                        <div class="map__ballon-box">
                            <p class="map__ballon-title">Адрес</p>
                            <p class="map__ballon-text">${point.address}</p>
                        </div>
                        <div class="map__ballon-box">
                            <p class="map__ballon-title">График работы</p>
                            <p class="map__ballon-text">${point.schedule}</p>
                        </div>
                    </div>
                    `

				const myPlacemark = new ymaps.Placemark(
					point.coords,
					{
						balloonContent: content,
					},
					{
						iconLayout: 'default#image',
						iconImageHref: '/CenterOfMedicalCosmetology/assets/images/icons/loca-gold.svg',
						iconImageSize: [48, 48],
					}
				)
				myCollection.add(myPlacemark)
			})

			myMap.geoObjects.add(myCollection)
		}
	}

	if (document.querySelector('[name="phone"]')) {
		const element = document.querySelector('[name="phone"]')
		const maskOptions = {
			mask: '+{7} 000 000 00 00',
		}
		const mask = IMask(element, maskOptions)
	}

	if (document.querySelector('[name="sum"]')) {
		const element = document.querySelector('[name="sum"]')
		const maskOptions = {
			mask: Number,
			scale: 0, // digits after point, 0 for integers
			signed: false, // disallow negative
			thousandsSeparator: ' ', // any single char
			padFractionalZeros: false,
			normalizeZeros: true,
			radix: ',', // fractional delimiter
			mapToRadix: [','],
		}
		const mask = IMask(element, maskOptions)
	}
})
