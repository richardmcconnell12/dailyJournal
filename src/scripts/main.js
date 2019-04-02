import domEntries from "./enteriesDOM"
import eventListener from "./eventListener"

domEntries.createSectionContainer();
domEntries.appendToDom();
eventListener.journalEntryClick();
eventListener.submissionListener();