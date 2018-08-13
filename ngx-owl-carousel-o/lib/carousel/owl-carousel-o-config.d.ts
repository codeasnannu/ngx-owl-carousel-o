import { OwlOptions } from "../models/owl-options.model";
export declare class OwlCarouselOConfig implements OwlOptions {
    items: number;
    loop: boolean;
    center: boolean;
    rewind: boolean;
    mouseDrag: boolean;
    touchDrag: boolean;
    pullDrag: boolean;
    freeDrag: boolean;
    margin: number;
    stagePadding: number;
    merge: boolean;
    mergeFit: boolean;
    autoWidth: boolean;
    startPosition: number;
    rtl: boolean;
    smartSpeed: number;
    fluidSpeed: boolean;
    dragEndSpeed: boolean;
    responsive: {};
    responsiveRefreshRate: number;
    nav: boolean;
    navText: string[];
    navSpeed: boolean;
    slideBy: number;
    dots: boolean;
    dotsEach: boolean;
    dotsData: boolean;
    dotsSpeed: boolean;
    autoplay: false;
    autoplayTimeout: 5000;
    autoplayHoverPause: false;
    autoplaySpeed: false;
    constructor();
}
export declare class OwlOptionsMockedTypes {
    items: string;
    loop: string;
    center: string;
    rewind: string;
    mouseDrag: string;
    touchDrag: string;
    pullDrag: string;
    freeDrag: string;
    margin: string;
    stagePadding: string;
    merge: string;
    mergeFit: string;
    autoWidth: string;
    startPosition: string;
    rtl: string;
    smartSpeed: string;
    fluidSpeed: string;
    dragEndSpeed: string;
    responsive: {};
    responsiveRefreshRate: string;
    nav: string;
    navText: string;
    navSpeed: string;
    slideBy: string;
    dots: string;
    dotsEach: string;
    dotsData: string;
    dotsSpeed: string;
    autoplay: 'boolean';
    autoplayTimeout: 'number';
    autoplayHoverPause: 'boolean';
    autoplaySpeed: 'number|boolean';
    constructor();
}