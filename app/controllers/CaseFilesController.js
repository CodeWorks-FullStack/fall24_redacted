import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";

export class CaseFilesController {
  constructor() {
    console.log('Case Files controller is working');
    this.drawCaseFiles()
  }

  drawCaseFiles() {
    const caseFiles = AppState.caseFiles
    let caseFileHTML = ''
    caseFiles.forEach(caseFile => caseFileHTML += caseFile.listHTMLTemplate)
    // const caseFileElem = document.getElementById('case-files-list')
    // caseFileElem.innerHTML = caseFileHTML
    // NOTE setHTML essentially does the above two lines
    setHTML('case-files-list', caseFileHTML)
  }

  setActiveCaseFile() {
    console.log('Setting active case file!')
  }
}