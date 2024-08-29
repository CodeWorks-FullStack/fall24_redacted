import { AppState } from "../AppState.js";

class CaseFilesService {
  toggleLock() {
    const caseFile = AppState.activeCaseFile

    // if (caseFile.locked) {
    //   caseFile.locked = false
    // }
    // else {
    //   caseFile.locked = true
    // }

    caseFile.locked = !caseFile.locked

    console.log('the case file is locked?', caseFile.locked);
    AppState.emit('activeCaseFile') // this will manually trigger listener for activeCaseFile
  }
  setActiveCaseFile(caseFileId) {
    console.log('setting active case file', caseFileId);
    const caseFiles = AppState.caseFiles
    const foundCaseFile = caseFiles.find(caseFile => caseFile.id == caseFileId)
    console.log('found case file!', foundCaseFile);
    AppState.activeCaseFile = foundCaseFile
  }
}

export const caseFilesService = new CaseFilesService()