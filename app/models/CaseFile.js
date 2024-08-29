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
      <p>case #34eb</p>
      <p> <i class="mdi mdi-fish" title="fish and game"></i> | <time title="Last Accessed">8/29/2024</time></p>
      <hr>
    </div>
    `
  }
}