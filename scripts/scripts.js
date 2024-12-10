document.addEventListener('DOMContentLoaded', () => {
	const body = document.querySelector('body')
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.menu')
	const openModalReviews = document.querySelectorAll('.open-modalReviews')
	const modalReviews = document.querySelector('.modal--reviews')
	const openModalPhone = document.querySelectorAll('.openPhone-modal')
	const modalPhone = document.querySelector('.modal--phone')
	const success = document.querySelector('.success')
	const bookingSpecialistsForm = document.querySelectorAll('.booking__specialists-form')
	const hidden = document.querySelector('.booking__specialists-hidden')
	const modalAccordion = document.querySelector('.modal__accordion')
	const ratings = document.querySelectorAll('.rating')
	const videos = document.querySelectorAll('.video__video')

	videos?.forEach(item => {
		item.addEventListener('click', () => {
			const videoHidden = item.querySelector('.video__hidden')?.firstElementChild
			videoHidden.click()
		})
	})

	if (ratings) {
		initRatings()
	}

	function initRatings() {
		let ratingActive, ratingValue

		for (let index = 0; index < ratings.length; index++) {
			const rating = ratings[index]
			initRating(rating)
		}

		function initRating(rating) {
			initRatingVars(rating)

			setRatingActiveWidth()

			if (rating.classList.contains('rating')) {
				setRating(rating)
			}
		}

		function initRatingVars(rating) {
			ratingActive = rating.querySelector('.rating__active')
			ratingValue = rating.querySelector('.rating__value')
		}

		function setRatingActiveWidth(index = ratingValue.innerHTML) {
			const ratingActiveWidth = index / 0.05
			ratingActive.style.width = `${ratingActiveWidth + 2}%`
		}

		function setRating(rating) {
			const ratingItems = rating.querySelectorAll('.rating__item')

			for (let index = 0; index < ratingItems.length; index++) {
				const ratingItem = ratingItems[index]

				ratingItem.addEventListener('mouseenter', function (e) {
					initRatingVars(rating)
					setRatingActiveWidth(ratingItem.value)
				})

				ratingItem.addEventListener('mouseleave', function (e) {
					setRatingActiveWidth()
				})

				ratingItem.addEventListener('click', function (e) {
					initRatingVars(rating)

					ratingValue.innerHTML = index + 1 + '.0'
					if (ratingItem.parentNode.parentNode.parentNode.classList.contains('rating--notEvent')) {
						ratingValue.innerHTML = index + 1 + '.0'
					} else {
						ratingValue.innerHTML = index + 1
					}
					setRatingActiveWidth()
				})
			}
		}
	}

	modalAccordion?.addEventListener('click', e => {
		const title = document.querySelector('.modal__accordion-title')
		const target = e.target
		if (target.classList.contains('modal__accordion-check')) {
			const targetText = target.parentNode.textContent
			title.textContent = targetText
		}
	})

	bookingSpecialistsForm?.forEach(item => {
		const text = item.querySelectorAll('.booking__specialists-elem')

		text.forEach(elem => {
			item.addEventListener('click', e => {
				const value = item.querySelector('.search__input')
				value.value = e.target.textContent.trim()
			})
			bookingSpecialistsForm[0].addEventListener('click', e => {
				const value = bookingSpecialistsForm[0].querySelector('.search__input')
				if (value.value != '') {
					hidden.classList.add('booking__specialists-hidden--active')
					setTimeout(() => {
						hidden.classList.add('booking__specialists-hidden--opacity')
					}, 230)
				} else {
					setTimeout(() => {
						hidden.classList.remove('booking__specialists-hidden--active')
					}, 230)
					hidden.classList.remove('booking__specialists-hidden--opacity')
				}
			})
		})
	})

	if (modalReviews) {
		const close = modalReviews.querySelector('.modal__close')
		const inner = modalReviews.querySelector('.modal__inner')
		modalReviews.addEventListener('click', e => {
			if (!inner.contains(e.target)) {
				modalReviews.classList.remove('modal--active')
				body.classList.remove('no-scroll')
			}
			if (e.target === close) {
				modalReviews.classList.remove('modal--active')
				body.classList.remove('no-scroll')
			}
		})
	}

	if (modalPhone) {
		const close = modalPhone.querySelector('.modal__close')
		const inner = modalPhone.querySelector('.modal__inner')
		modalPhone.addEventListener('click', e => {
			if (!inner.contains(e.target)) {
				modalPhone.classList.remove('modal--active')
				body.classList.remove('no-scroll')
			}
			if (e.target === close) {
				modalPhone.classList.remove('modal--active')
				body.classList.remove('no-scroll')
			}
		})
	}

	if (success) {
		const close = document.querySelector('.success__close')
		const inner = document.querySelector('.success__inner')
		success.addEventListener('click', e => {
			if (!inner.contains(e.target)) {
				success.classList.remove('success--active')
				body.classList.remove('no-scroll')
			}
			if (e.target === close) {
				success.classList.remove('success--active')
				body.classList.remove('no-scroll')
			}
		})
	}

	openModalPhone?.forEach(item => {
		item.addEventListener('click', e => {
			if (modalPhone) {
				e.preventDefault()
			}
			modalPhone.classList.add('modal--active')
			body.classList.add('no-scroll')
		})
	})

	openModalReviews?.forEach(item => {
		item.addEventListener('click', e => {
			if (openModalReviews) {
				e.preventDefault()
			}
			modalReviews.classList.add('modal--active')
			body.classList.add('no-scroll')
		})
	})

	const toggleMenu = () => {
		menu.classList.toggle('menu--active')
		burger.classList.toggle('burger--active')
		body.classList.toggle('no-scroll')
	}

	const clickOutsideMenu = e => {
		if (
			!menu.contains(e.target) &&
			!burger.contains(e.target) &&
			!openModalReviews.forEach(item => {
				item.contains(e.target)
			}) &&
			!openModalPhone.forEach(item => {
				item.contains(e.target)
			})
		) {
			menu.classList.remove('menu--active')
			burger.classList.remove('burger--active')
			body.classList.remove('no-scroll')
		}
	}

	burger.addEventListener('click', toggleMenu)
	document.addEventListener('click', clickOutsideMenu)

	function handleTabClick(tabs, pages, activeTabClass, activePageClass, opacityPageClass) {
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

	handleTabClick(tabs, pages, 'tab__target--active', 'tab__info--active', 'tab__info--opacity')

	const bookingServices = document.querySelectorAll('.booking__services')
	bookingServices?.forEach(elem => {
		const bookingServicesBtn = elem.querySelectorAll('.btn')
		bookingServicesBtn.forEach(btn => {
			btn.addEventListener('click', () => {
				const targetActive = document.querySelectorAll('.tabBooking__target')

				targetActive.forEach(item => {
					if (item.classList.contains('tabBooking__target--active')) {
						item.classList.add('tabBooking__target--img')
					}
				})
			})
		})
	})

	var targetMap = document.querySelectorAll('[data-target]')
	var map = document.querySelectorAll('.tabBooking__info')

	targetMap?.forEach(elem => {
		elem.addEventListener('click', function (e) {
			e.preventDefault()
			var target = this.getAttribute('data-target')

			map.forEach(elem => {
				elem.classList.remove('tabBooking__info--opacity', 'tabBooking__info--active')
			})

			targetMap.forEach(elem => {
				elem.classList.remove('tabBooking__target--active')
			})

			var cat = document.querySelector('[data-info="' + target + '"]')
			cat.classList.add('tabBooking__info--active')

			setTimeout(() => {
				cat.classList.add('tabBooking__info--opacity')
			}, 230)

			updateActiveState()
		})
	})

	function updateActiveState() {
		targetMap.forEach((targetElem, index) => {
			const infoElem = map[index]

			if (infoElem?.classList.contains('tabBooking__info--active')) {
				targetElem.classList.add('tabBooking__target--active')
			} else {
				targetElem.classList.remove('tabBooking__target--active')
			}
		})
	}

	const reviewsСards = document.querySelector('.reviews__cards')
	if (reviewsСards) {
		const reviewsСardsItem = reviewsСards?.querySelectorAll('.reviews__card')
		const showMoreButton = reviewsСards.nextElementSibling

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
			stockInner.style.height = `${stockInner.clientHeight}px`
			showNextCards()
			setTimeout(() => {
				stockInner.removeAttribute('style')
			}, 1)
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

	if (innerWidth > 992) {
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
	const accordionAlt = document.querySelectorAll('.accordionAlt')

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

	accordionAlt?.forEach(acc => {
		acc.addEventListener('click', function (e) {
			const content = this.querySelector('.accordionAlt__content')
			if (!this.classList.contains('accordionAlt--active')) {
				accordionAlt.forEach(otherAcc => {
					if (otherAcc !== this) {
						const otherContent = otherAcc.querySelector('.accordionAlt__content')
						otherAcc.classList.remove('accordionAlt--active')
						otherContent.style.maxHeight = '0'
					}
				})
				this.classList.add('accordionAlt--active')
				content.style.maxHeight = content.scrollHeight + 'px'
			} else {
				this.classList.remove('accordionAlt--active')
				content.style.maxHeight = '0'
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
		var problemsSwiper = new Swiper('.problems__swiper', {
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
				nextEl: '.problems__arrow-next',
				prevEl: '.problems__arrow-prev',
			},
			pagination: {
				el: '.problems__dots',
			},
		})

		// window.addEventListener('resize', function () {
		// 	problemsSwiper.update()
		// }, 100)

		// window.addEventListener('load', function () {
		// 	problemsSwiper.update()
		// })

		// const swiperContainer = document.querySelector('.problems__swiper');

		// const resizeObserver = new ResizeObserver(entries => {
		//     for (let entry of entries) {
		//         problemsSwiper.update();
		//     }
		// });

		// resizeObserver.observe(swiperContainer);
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

	const afterBeforeSwipers = []
	const afterBeforeSwiper = document.querySelectorAll('.afterBefore__swiper')
	afterBeforeSwiper?.forEach((swiper, index) => {
		afterBeforeSwipers.push(setAfterBeforeSwipers(index + 1))
	})
	function setAfterBeforeSwipers(index) {
		return new Swiper(`.afterBefore__swiper--${index}`, {
			navigation: {
				prevEl: `.afterBefore__arrow-prev--${index}`,
				nextEl: `.afterBefore__arrow-next--${index}`,
			},
			breakpoints: {
				992: {
					slidesPerView: 2,
					spaceBetween: 40,
				},
				768: {
					slidesPerView: 2.1,
					spaceBetween: 24,
				},
				576: {
					slidesPerView: 1.6,
					spaceBetween: 16,
				},
				414: {
					slidesPerView: 1.5,
					spaceBetween: 12,
				},
				320: {
					slidesPerView: 1.1,
					spaceBetween: 12,
				},
			},
		})
	}

	const faqSwipers = []
	const faqSwiper = document.querySelectorAll('.faq__swiper')
	faqSwiper?.forEach((swiper, index) => {
		faqSwipers.push(setFaqSwipers(index + 1))
	})
	function setFaqSwipers(index) {
		return new Swiper(`.faq__swiper--${index}`, {
			navigation: {
				prevEl: `.faq__arrow-prev--${index}`,
				nextEl: `.faq__arrow-next--${index}`,
			},
			breakpoints: {
				992: {
					slidesPerView: 4,
					spaceBetween: 40,
				},
				768: {
					slidesPerView: 3.2,
					spaceBetween: 24,
				},
				576: {
					slidesPerView: 2.2,
					spaceBetween: 16,
				},
				414: {
					slidesPerView: 2.2,
					spaceBetween: 12,
				},
				320: {
					slidesPerView: 1.1,
					spaceBetween: 12,
				},
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
				name: 'Улица 1',
				// iconImageHref: '../assets/images/map/1.svg',
				iconImageHref: '/CenterOfMedicalCosmetology/assets/images/map/1.svg',
			},
			{
				text: '+7 (812) 223-51-27',
				address: '191014, Санкт-Петербург, улица Рылеева, дом 1',
				schedule:
					'Понедельник-пятница с 10:00 до 20:00, <br> Суббота с 11:00 до 19:00, <br> Воскресенье с 11:00 до 19:00',
				coords: [59.942412, 30.351055],
				name: 'Улица 2',
				// iconImageHref: '../assets/images/map/2.svg',
				iconImageHref: '/CenterOfMedicalCosmetology/assets/images/map/2.svg',
			},
			{
				text: '+7 (812) 223-51-27',
				address: '191014, Санкт-Петербург, улица Рылеева, дом 1',
				schedule:
					'Понедельник-пятница с 10:00 до 20:00, <br> Суббота с 11:00 до 19:00, <br> Воскресенье с 11:00 до 19:00',
				coords: [59.947243, 30.378472],
				name: 'Улица 3',
				// iconImageHref: '../assets/images/map/3.svg',
				iconImageHref: '/CenterOfMedicalCosmetology/assets/images/map/3.svg',
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
						iconImageHref: point.iconImageHref,
						iconImageSize: [247, 30],
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
			scale: 0,
			signed: false,
			thousandsSeparator: ' ',
			padFractionalZeros: false,
			normalizeZeros: true,
			radix: ',',
			mapToRadix: [','],
		}
		const mask = IMask(element, maskOptions)
	}

	Fancybox.bind('[data-fancybox]', {})
})
