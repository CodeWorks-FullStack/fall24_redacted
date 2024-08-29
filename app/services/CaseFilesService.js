import { AppState } from "../AppState.js";
import { CaseFile } from "../models/CaseFile.js";
import { loadState, saveState } from "../utils/Store.js";

class CaseFilesService {
  createCaseFile(rawCaseFileData) {
    const caseFiles = AppState.caseFiles
    const newCaseFile = new CaseFile(rawCaseFileData)
    caseFiles.push(newCaseFile)

    this.saveCaseFiles()
  }

  updateCaseFile(updatedBody) {
    const caseFile = AppState.activeCaseFile

    caseFile.body = updatedBody
    caseFile.lastAccessedAt = new Date()
    caseFile.locked = true

    AppState.emit('activeCaseFile') // this will manually trigger listener for activeCaseFile
    AppState.emit('caseFiles')
    this.saveCaseFiles()
  }
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

  saveCaseFiles() {
    saveState('caseFiles', AppState.caseFiles)
  }

  loadCaseFiles() {
    const caseFilesFromLocalStorage = loadState('caseFiles', [CaseFile])
    AppState.caseFiles = caseFilesFromLocalStorage
  }
}

export const caseFilesService = new CaseFilesService()