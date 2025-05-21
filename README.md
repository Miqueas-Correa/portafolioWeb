# portafolioWeb
Un portafolio personal en una pagina web

# URL: https://portafolio-6rgpzs2u1-miqueas-correas-projects.vercel.app/#proyectos

# Pasos para subir tu proyecto con Vercel:

- Instala Vercel CLI:
Abre tu terminal y ejecuta:

npm install -g vercel

- Inicia sesión en Vercel:
para este paso tenes que tener una cuenta de creada de Vercel enlazada con git antes de realizar el login.
En la terminal, ingresa:

vercel login

Dirígete al proyecto:
Usa cd para entrar a tu carpeta del proyecto.

Configura el proyecto para Vercel:
Si tu proyecto está en una carpeta específica (por ejemplo, /dist o /public), crea un archivo vercel.json en la raíz del proyecto con este contenido:
Si no tienes una carpeta de salida y todos los archivos están en la raíz, no necesitas crear el vercel.json.

{
  "builds": [
    { "src": "index.html", "use": "@vercel/static" }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}

- Despliega el proyecto:
En la terminal, ejecuta:

vercel

- Vercel te hará algunas preguntas:

¿Cuál es la ruta del proyecto? Si está en la raíz, presiona Enter.

¿Dónde está la carpeta de salida? Si está en la raíz, ingresa . o presiona Enter.

- Verifica tu URL:
Una vez finalizado el proceso, verás una URL generada, por ejemplo:

https://mi-portafolio.vercel.app

- Actualiza el proyecto:
Cada vez que realices un cambio, simplemente ejecuta:

vercel --prod

Compatible con HTML, CSS, JS y frameworks como Next.js.
