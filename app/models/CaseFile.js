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
}