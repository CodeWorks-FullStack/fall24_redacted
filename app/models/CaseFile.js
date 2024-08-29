import { generateId } from "../utils/GenerateId.js";

export class CaseFile {
  /**
   * @param {{ body: String; classification: String; agency: String; }} data
   */
  constructor(data) {
    this.id = generateId()
    this.lastAccessedAt = new Date()
    this.body = data.body
    this.classification = data.classification
    this.agency = data.agency

    this.locked = true
  }

  get listHTMLTemplate() {
    return `
    <div onclick="app.CaseFilesController.setActiveCaseFile('${this.id}')" class="fs-3 selectable px-1" role="button">
      <p>case #${this.caseFileNumber}</p>
      <p> ${this.agencyIcon} | <time title="Last Accessed on ${this.lastAccessedFullDateAndTime}">${this.lastAccessedDate}</time>
      </p>
      <hr>
    </div>
    `
  }

  get detailsHTMLTemplate() {
    return /*html*/`
    <div class="p-3 border border-1 border-dark">
      <p class="fs-1" title="Full case #${this.id}">case #${this.caseFileNumber} ${this.agencyIcon}</p>
      <p>Last accessed on <time>${this.lastAccessedFullDateAndTime}</time></p>
      <p>${this.body}</p>
      <div class="text-end">
        <button onclick="app.CaseFilesController.toggleLock()">
          ${this.locked ? 'Unlock' : 'Lock'}
        </button>
      </div>
    </div>
    `
  }

  get caseFileNumber() {
    return this.id.substring(this.id.length - 4) // the last 4 digits of the id
  }

  get agencyIcon() {
    switch (this.agency) {
      case 'fish and game':
        return `<i class="mdi mdi-fish" title="${this.agency}"></i>`
      case 'air force':
        return `<i class="mdi mdi-airplane" title="${this.agency}"></i>`
      case 'highway patrol':
        return `<i class="mdi mdi-car-emergency" title="${this.agency}"></i>`
      default:
        return `<i class="mdi mdi-help" title="${this.agency}"></i>`
    }
  }

  get lastAccessedDate() {
    return this.lastAccessedAt.toLocaleDateString()
  }

  get lastAccessedFullDateAndTime() {
    return this.lastAccessedAt.toLocaleString()
  }
}