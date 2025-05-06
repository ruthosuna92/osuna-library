🧩 Osuna Library
Librería de componentes React reutilizables.
Incluye componentes listos para usar como Tarjeta, diseñados para interfaces modernas y dinámicas.

🚀 Tecnologías
⚡ Vite – Bundler ultrarrápido y servidor de desarrollo.

⚛️ React – Librería para construir interfaces de usuario.

🎨 CSS Modules – Estilos encapsulados por componente.

🧪 Vitest – Testing rápido y liviano para Vite.

📦 Instalación

Opción 1: Clonar el proyecto (modo desarrollo)

git clone https://github.com/ruthosuna92/osuna-library
cd osuna-library
npm install
npm run dev
Abre tu navegador en http://localhost:5173

Opción 2: Usar como librería desde npm
Instala el paquete:

npm install @osuna-ale/osuna-library
Importa y utiliza el componente:


```import { Tarjeta } from '@osuna-ale/osuna-library'

<Tarjeta
  character={{
    image: 'https://example.com/image.jpg',
    name: 'Nombre',
    status: 'Alive',
    species: 'Humano',
    origin: { name: 'Planeta X' },
    location: { name: 'Lugar Y' }
  }}
  onFavorite={(isFav) => console.log('Favorito:', isFav)}
  onClick={() => console.log('Click en la tarjeta')}
/>```
⚠️ Si no se pasa la prop character, se renderiza un personaje por defecto con valores "Unknown".

🛠 Scripts disponibles

Comando	Descripción
npm run dev	Inicia el servidor de desarrollo local
npm run build	Genera la build para producción en /dist
npm run preview	Previsualiza la app de producción localmente
npm run lint	Ejecuta el linter con ESLint

📁 Estructura del proyecto

bash
Copy
Edit
src/
├── assets/            # Imágenes, íconos, etc.
├── componentes/       # Componentes reutilizables (incluye Tarjeta)
├── App.jsx            # Componente raíz
├── main.jsx           # Punto de entrada

🧩 Componentes disponibles

Componente	Descripción
Tarjeta	Muestra información de un personaje, incluyendo nombre, estado, especie, lugar de origen, lugar actual y botón de favorito.