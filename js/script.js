const elem = document.querySelector(".element");

class Input {
	constructor(element, property) {
		this.element = element;
		this.property = property;
	}

	init() {
		// Вычисляем максимальную ширину и высоты элемента
		const maxWidth = elem.closest(".element-container").clientWidth - parseFloat(getComputedStyle(elem.closest(".element-container")).padding) * 2;
		const maxHeight = elem.closest(".element-container").clientHeight - parseFloat(getComputedStyle(elem.closest(".element-container")).padding) * 2;
		elem.style.cssText = `max-width: ${maxWidth}px; max-height: ${maxHeight}px;`;

		// Добаляем событие
		this.element.addEventListener("change", (e) => {
			// Получаем и устанавливаем значение
			const value = this.element.value;
			elem.style[this.property] = value;
		});
	}
}

// Получаем все инпуты
const inputs = document.querySelectorAll(".input");

// Перебираем
for (let i = 0; i < inputs.length; i++) {
	// Получаем кажый инпут
	const input = inputs[i];
	// Инициализируем
	const property = new Input(input, input.id);
	property.init();
	/* Каждое свойство равно id элемента, то есть если в id элемента указан width, то и свойство тоже будет width */
}
