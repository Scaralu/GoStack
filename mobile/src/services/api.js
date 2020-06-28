import axios from 'axios';
const api = axios.create({
    baseURL: "http://localhost:3333"
})

export default api;

/**
 * iOs com emulador: localhost
 * iOs com fisico: Ip da máquina;
 * 
 * Android com emulador: localhost ('adb reverse tcp:3000 tcp:3000')
 * Android com Emulador: 10.0.2.2 (Android Studio Emulator)
 * Android com emulador != Android Studio: procurar ip;
 * Android com fisico: Ip da máquina
 * 
 * 
 */