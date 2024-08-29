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
  }

  get listHTMLTemplate() {
    return `
    <div class="fs-3 selectable" role="button">
      <p>case #${this.caseFileNumber}</p>
      <p> ${this.agencyIcon} | <time title="Last Accessed on ${this.lastAccessedFullDateAndTime}">${this.lastAccessedDate}</time></p>
      <hr>
    </div>
    `
  }

  get caseFileNumber() {
    return this.id.substring(this.id.length - 4)
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