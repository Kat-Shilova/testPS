document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    

    const syncIngredientFieldsWithButtons = () => {

    const INGREDIENT_INPUT_SIGN = 'data-ingredient-input';
    const INGREDIENT_BUTTON_SIGN = 'data-ingredient-button';
    const INGREDIENT_INPUT_SELECTOR = `[${INGREDIENT_INPUT_SIGN}]`;
    const INGREDIENT_BUTTON_SELECTOR = `[${INGREDIENT_BUTTON_SIGN}]`;
    const buttons = [];

        document.querySelectorAll(INGREDIENT_BUTTON_SELECTOR).forEach((button) => {
            buttons.push({
            id: button.getAttribute(INGREDIENT_BUTTON_SIGN),
            elem: button,
            });
        });

        document.querySelectorAll(INGREDIENT_INPUT_SELECTOR).forEach((input) => {
            input.addEventListener('input', () => {
            const value = input.value;
            const ingredientID = input.getAttribute(INGREDIENT_INPUT_SIGN);
            const ingredientButton = buttons.find((b) => b.id === ingredientID);

            ingredientButton.elem.innerText = value;
            });
        });  
    };


    const moveButtonToDroppable = () => {

        const FORM  = document.querySelector('.form');
        const INPUT_BUTTON = document.querySelectorAll('.input__button');
        const DROPPABLE_AREA = document.querySelector('droppable');
        const droppable = [];
        
        FORM.addEventListener('click', (e) => {
            const target = e.target;

            if (target === FORM.children || target.classList.contains('.input__button'))
            console.log(target)

        });
    };

        
    syncIngredientFieldsWithButtons();

    moveButtonToDroppable();
});