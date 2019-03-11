import * as $ from 'jquery';

export abstract class BaseComponent {

    Scroll(event: MouseEvent, selector: string): void {
        let target = $(selector);
        event.preventDefault();

        $('html, body').animate(
            { scrollTop: target.offset().top },
            1000,
            () => {
                // Callback after animation
                // Must change focus!
                target = $(target);
                target.focus();
                if (target.is(":focus")) // Checking if the target was focused
                    return false;
                else {
                    target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                    target.focus(); // Set focus again
                }
            }
        );
    }

}