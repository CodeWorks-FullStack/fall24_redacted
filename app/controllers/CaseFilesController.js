import { AppState } from "../AppState.js";
import { caseFilesService } from "../services/CaseFilesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";

export class CaseFilesController {
  constructor() {
    console.log('Case Files controller is working');
    AppState.on('caseFiles', this.drawCaseFiles)
    AppState.on('activeCaseFile', this.drawActiveCaseFile)

    caseFilesService.loadCaseFiles()
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

  drawActiveCaseFile() {
    const caseFile = AppState.activeCaseFile
    console.log('drawing active!', caseFile);
    setHTML('case-file-details', caseFile.detailsHTMLTemplate)
  }

  setActiveCaseFile(caseFileId) {
    console.log(`Setting active case file with the id of ${caseFileId}!`)
    caseFilesService.setActiveCaseFile(caseFileId)
  }

  toggleLock() {
    caseFilesService.toggleLock()
  }

  updateCaseFile() {
    console.log('textarea blurred');
    const textareaElem = event.target
    // NOTE it is okay to ignore this error, we know better
    // @ts-ignore
    const updatedBody = textareaElem.value
    console.log('text from textarea', updatedBody);
    caseFilesService.updateCaseFile(updatedBody)
  }

  createCaseFile() {
    event.preventDefault() // don't refresh the page!
    console.log('creating case file!');
    const caseFileForm = event.target
    const caseFileFormData = getFormData(caseFileForm)
    console.log('data from form', caseFileFormData);
    caseFilesService.createCaseFile(caseFileFormData)
  }
}