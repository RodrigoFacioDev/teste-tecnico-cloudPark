# 📱 Meu App com Expo + JSON Server

Este projeto é um app mobile desenvolvido com **React Native (Expo)** e utiliza o **JSON Server** para simular uma API REST durante o desenvolvimento.

---

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado:

* **Node.js**: Inclui o npm (Node Package Manager). Você pode baixá-lo em [nodejs.org](https://nodejs.org/).
* **Yarn** (Opcional, mas recomendado): Um gerenciador de pacotes alternativo ao npm. Você pode instalá-lo com `npm install -g yarn`.
* **Expo Go** (no seu celular): Baixe o aplicativo "Expo Go" na App Store (iOS) ou Google Play Store (Android).

---

## 🚀 Como rodar o projeto

Siga os passos abaixo para executar o projeto localmente.

### 1. Instale as dependências

Você pode usar **Yarn** ou **npm**:

```bash
yarn
# ou
npm install
```
### 2. Inicie o JSON Server
```bash
npx json-server db.json
```
Isso irá iniciar um servidor local (por padrão em http://localhost:3000).

### 3. Inicie o Expo
```bash
yarn start
# ou
npm run start
```
Testando no celular
Instale o app Expo Go da App Store (iOS) ou Google Play (Android).

Escaneie o QR Code exibido no terminal ou no navegador quando rodar yarn start.

🛠 Requisitos
Node.js (versão recomendada: LTS)

Yarn ou npm

Expo CLI (instalado com npm install -g expo-cli, se necessário)

JSON Server (npx já cuida disso, mas pode ser instalado globalmente também)
### Para rodar os testes 
```bash
yarn test
# ou
npm run test
```
