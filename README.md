# Web3 Referral App


**Web3 Referral** es un proyecto demo que permite conectar una wallet, mintear NFTs (solo firmarlos) y referir a otros gracias a una **SDK** local que recupera datos de proyecto según una **apiKey** (consulta más detalles en: [Challenge Kuyen Labs](https://github.com/kuyen-labs/code-challenges/blob/main/Frontend.md)).

### 🚀 Visita la versión deployada

La aplicación está disponible en línea. ¡Echa un vistazo a cómo funciona!

<img src="https://s11.gifyu.com/images/SBew4.gif" alt="Funcionalidad Básica" width="500" height="300">

#### Puedes acceder a ella aquí: [Web3 Referral App](https://web3-referral.surge.sh).

<br>

## Instalación local

Para iniciar el proyecto, primero necesitas instalar las dependencias. Abre tu terminal y ejecuta:

```bash
npm install
```
(Esto instalará todas las dependencias, incluida la SDK). 

Si deseas instalar la SDK por separado, puedes hacerlo con el siguiente comando:

```bash
npm install ./sdk
```

### Variables de Entorno

Es necesario crear un archivo `.env` en la raíz del proyecto y agregar la siguiente variable de entorno para setear la **apiKey** que define el proyecto configurado:

```bash
VITE_PROJECT_API_KEY="XXX-XXX-XXX"
```

Puedes configurarlo con cualquiera de las siguientes **apiKeys** de prueba:

- `123-456-789`
- `234-567-891`
- `345-678-912`

## Detalles Mock API

- La **Mock API** se encuentra desplegada con **Cloudflare Workers** (https://workers.cloudflare.com/)
- La SDK consulta al endpoint **_/project_** y hay otro endpoint **_/tokens_** que resulta conveniente para consultar los NFTs de manera dinámica

## Test
Para correr la suite de test corre el comando:

```bash
npm run test
```

## Contribuciones

Si deseas contribuir al proyecto, siéntete libre de abrir un **issue** o **pull request**. ¡Tu ayuda es bienvenida!

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
