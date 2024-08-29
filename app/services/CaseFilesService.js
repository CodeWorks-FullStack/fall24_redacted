import { AppState } from "../AppState.js";

class CaseFilesService {
  setActiveCaseFile(caseFileId) {
    console.log('setting active case file', caseFileId);
    const caseFiles = AppState.caseFiles
    const foundCaseFile = caseFiles.find(caseFile => caseFile.id == caseFileId)
    console.log('found case file!', foundCaseFile);
    AppState.activeCaseFile = foundCaseFile
  }
}

export const caseFilesService = new CaseFilesService()