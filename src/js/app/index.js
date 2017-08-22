define(['jquery', 'carousel', 'goTop', 'waterFall'],function ($, carousel, goTop, waterFall) {
    carousel.start($('.carousel'));
    goTop.start($('.go-top'));
    waterFall.start($('.load-container'));
});