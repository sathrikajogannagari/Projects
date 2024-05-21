document.addEventListener('DOMContentLoaded', function () {
    const plans = document.querySelectorAll('.plan');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Pricing';
    toggleButton.style.marginTop = '20px';
    document.querySelector('header').appendChild(toggleButton);

    toggleButton.addEventListener('click', () => {
        plans.forEach(plan => {
            const priceElement = plan.querySelector('.price');
            let price = parseFloat(priceElement.textContent.replace('$', ''));
            if (priceElement.textContent.includes('month')) {
                priceElement.innerHTML = `$${(price * 12).toFixed(2)}<span>/year</span>`;
            } else {
                priceElement.innerHTML = `$${(price / 12).toFixed(2)}<span>/month</span>`;
            }
        });
    });
});
