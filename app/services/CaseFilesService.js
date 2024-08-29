class CaseFilesService {
  setActiveCaseFile(caseFileId) {
    console.log('setting active case file', caseFileId);

  }
}

export const caseFilesService = new CaseFilesService()