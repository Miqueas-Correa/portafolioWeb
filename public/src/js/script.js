document.addEventListener('DOMContentLoaded', () => {
    const $form = document.querySelector('#form');
    const $spinner = document.querySelector('#spinner');

    $form.addEventListener('submit', async function (event) {
        event.preventDefault();

        // Mostrar el spinner
        $spinner.style.display = 'block';

        const form = new FormData(this);

        try {
            const response = await fetch(this.action, {
                method: this.method,
                body: form,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                this.reset();
                alert('Gracias por contactarme, te contestaré a la brevedad posible');
            } else {
                alert('Ocurrió un error al enviar el formulario.');
            }

        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            alert('Error de conexión. Por favor, intenta nuevamente.');
        } finally {
            // Ocultar el spinner
            $spinner.style.display = 'none';
        }
    });
});
