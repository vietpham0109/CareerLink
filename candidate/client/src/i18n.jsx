import i18n from "i18next";
import { initReactI18next } from "react-i18next"
import { resources } from "./Language/index"

const lng = 'en'

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng
    })

export default i18n