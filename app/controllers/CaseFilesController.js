import { AppState } from "../AppState.js";

export class CaseFilesController {
  constructor() {
    console.log('Case Files controller is working');
    this.drawCaseFiles()
  }

  drawCaseFiles() {
    const caseFiles = AppState.caseFiles
    let caseFileHTML = ''
    caseFiles.forEach(caseFile => caseFileHTML += caseFile.listHTMLTemplate)
    const caseFileElem = document.getElementById('case-files-list')
    caseFileElem.innerHTML = caseFileHTML
  }
}