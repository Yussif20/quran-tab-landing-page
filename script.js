import {labelElementsHandler , observeElements} from "./utils"

const labelElements = document.querySelectorAll(".faq__question");
const sectionElements  = document.querySelectorAll(".section")

labelElements.forEach(labelElementsHandler)
observeElements(sectionElements)