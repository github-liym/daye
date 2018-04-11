/**
 * Created by 94216 on 2017/12/5.
 */
import 'bootstrap/dist/css/bootstrap.css'
import scss from '../css/main.scss'
import 'bootstrap'
import Swiper from 'swiper'
/*
var mySwiper = new Swiper('.swiper-container', {
	direction: 'vertical',
	autoplay: true,
	loop: true
})*/

var swiper = new Swiper('.swiper-container', {
	direction: 'vertical',
	slidesPerView: 1,
	autoplay: {
		delay: 4000,
		stopOnLastSlide: false,
		disableOnInteraction: true,
	},
	spaceBetween: 20,
	loop: true,
});
