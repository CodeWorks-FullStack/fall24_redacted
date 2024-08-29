import { CaseFile } from './models/CaseFile.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  caseFiles = [
    new CaseFile({
      body: 'Saw a nasty lil doggy running on the side of the road with goat fur all over it',
      classification: 'secret',
      agency: 'fish and game'
    }),
    new CaseFile({
      body: 'Saw a flying saucer over the mountains in pocatello. Little grey men were probably on board.',
      classification: 'top-secret',
      agency: 'air force'
    }),
    new CaseFile({
      body: 'Encountered a lizard in the desert.',
      classification: 'public',
      agency: 'highway patrol'
    }),
  ]

  activeCaseFile = null
}

export const AppState = createObservableProxy(new ObservableAppState())