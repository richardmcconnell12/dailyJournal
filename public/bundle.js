(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Module that contains all API fetch calls.
const data = {
  // Fetch call that grabs the entries from the API.
  getJournalEntry() {
    console.log("getJournalEntry");
    return fetch("http://localhost:8088/entries").then(response => response.json());
  },

  addJournalEntry(newEntry) {
    // Fetch call that add new entry objects to the database.
    console.log("addJournalEntry", newEntry);
    return fetch("http://localhost:8088/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEntry)
    }).then(response => response.json);
  }

};
var _default = data;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _data = _interopRequireDefault(require("./data"));

var _entryComponent = _interopRequireDefault(require("./entryComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Module that appends list of entries to the DOM.
// Takes data from data module and iterates over to create contact components.
const domEntries = {
  // Function that appends entries to DOM
  appendToDom() {
    console.log("appendToDom");

    _data.default.getJournalEntry().then(allEntries => {
      // Create a document fragment that each entry will append to.
      let largeDocFrag = document.createDocumentFragment(); // Iterate over each entry

      allEntries.forEach(eachEntry => {
        console.log("entryData", eachEntry);

        let entryHtml = _entryComponent.default.createEntryComponent(eachEntry);

        largeDocFrag.appendChild(entryHtml);
      });
      let displayContainer = document.querySelector(".entryLog");
      displayContainer.appendChild(largeDocFrag);
    });
  }

};
var _default = domEntries;
exports.default = _default;

},{"./data":1,"./entryComponent":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// This module is a template that creates contact HTML components so the entriesDOM module can append them to DOM.
const entryComponent = {
  createEntryComponent(entryObject) {
    // Function that returns the document fragment with info from entryObject parameter that was passed into function.
    let entryDocFrag = document.createDocumentFragment();
    entryDocFrag.querySelector(".entryLog"); // Creating the elements of each of the properties of the entry objects.

    let entryDateTag = document.createElement("h3");
    entryDateTag.textContent += "Date:";
    entryDateTag.textContent += " ";
    let entryDate = document.createElement("h3");
    entryDate.textContent += "Date: ";
    entryDate.textContent += " ";
    entryDate.textContent += entryObject.date;
    let entryConceptTag = document.createElement("h2");
    entryConceptTag.textContent += "Concept:";
    entryConceptTag.textContent += " ";
    let entryConcept = document.createElement("h2");
    entryConcept.textContent += "Concept: ";
    entryConcept.textContent += " ";
    entryConcept.textContent += entryObject.concept;
    let entryLogTag = document.createElement("p");
    entryLogTag.textContent += "Entry:";
    entryLogTag.textContent += " ";
    let entryLog = document.createElement("p");
    entryLog.textContent += "Entry: ";
    entryLog.textContent += " ";
    entryLog.textContent += entryObject.entry;
    let entryMoodTag = document.createElement("h5");
    entryMoodTag.textContent += "Mood:";
    entryMoodTag.textContent += " ";
    let entryMood = document.createElement("h5");
    entryMood.textContent += "Mood: ";
    entryMood.textContent += " ";
    entryMood.textContent += entryObject.mood;
    entryDocFrag.appendChild(entryDate);
    entryDocFrag.appendChild(entryConcept);
    entryDocFrag.appendChild(entryLog);
    entryDocFrag.appendChild(entryMood);
    return entryDocFrag;
  }

};
var _default = entryComponent;
exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _data = _interopRequireDefault(require("./data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Module that contains the eventListener for the "Submit Journal Entry" button.
const eventListener = {
  journalEntryClick() {
    // Grab the button and adds an event listener to run submissionListener Function.
    console.log("journalEntryCLick");
    let button = document.getElementById("button");
    button.addEventListener("click", eventListener.submissionListener);
  },

  submissionListener() {
    // Function that passes an object and it's value into the API.
    console.log("submissionListener");
    let dateField = document.getElementById("journalDate").value;
    let conceptField = document.getElementById("conceptTopic").value;
    let entryField = document.getElementById("journalEntry").value;
    let moodField = document.getElementById("moodElements").value; // Create new object to post to the API.

    let newEntry = {
      date: dateField,
      concept: conceptField,
      entry: entryField,
      mood: moodField
    }; // Calls the function that passes a new entry to the database.

    _data.default.addJournalEntry(newEntry);
  }

};
var _default = eventListener;
exports.default = _default;

},{"./data":1}],5:[function(require,module,exports){
"use strict";

var _enteriesDOM = _interopRequireDefault(require("./enteriesDOM"));

var _eventListener = _interopRequireDefault(require("./eventListener"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_enteriesDOM.default.appendToDom();

_eventListener.default.journalEntryClick();

},{"./enteriesDOM":2,"./eventListener":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RhdGEuanMiLCIuLi9zY3JpcHRzL2VudGVyaWVzRE9NLmpzIiwiLi4vc2NyaXB0cy9lbnRyeUNvbXBvbmVudC5qcyIsIi4uL3NjcmlwdHMvZXZlbnRMaXN0ZW5lci5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBO0FBRUEsTUFBTSxJQUFJLEdBQUc7QUFDVDtBQUNBLEVBQUEsZUFBZSxHQUFHO0FBQ2QsSUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLGlCQUFaO0FBQ0EsV0FBTyxLQUFLLENBQUMsK0JBQUQsQ0FBTCxDQUNOLElBRE0sQ0FDRCxRQUFRLElBQUksUUFBUSxDQUFDLElBQVQsRUFEWCxDQUFQO0FBRUgsR0FOUTs7QUFRVCxFQUFBLGVBQWUsQ0FBQyxRQUFELEVBQVc7QUFDMUI7QUFDSSxJQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksaUJBQVosRUFBK0IsUUFBL0I7QUFDQSxXQUFPLEtBQUssQ0FBQywrQkFBRCxFQUFrQztBQUMxQyxNQUFBLE1BQU0sRUFBRSxNQURrQztBQUUxQyxNQUFBLE9BQU8sRUFBRTtBQUNMLHdCQUFnQjtBQURYLE9BRmlDO0FBSzFDLE1BQUEsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFMLENBQWUsUUFBZjtBQUxvQyxLQUFsQyxDQUFMLENBT04sSUFQTSxDQU9ELFFBQVEsSUFBSSxRQUFRLENBQUMsSUFQcEIsQ0FBUDtBQVFIOztBQW5CUSxDQUFiO2VBc0JlLEk7Ozs7Ozs7Ozs7O0FDeEJmOztBQUNBOzs7O0FBRUE7QUFFQTtBQUVBLE1BQU0sVUFBVSxHQUFHO0FBQ25CO0FBQ0ksRUFBQSxXQUFXLEdBQUc7QUFDVixJQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksYUFBWjs7QUFDQSxrQkFBSyxlQUFMLEdBQ0MsSUFERCxDQUNNLFVBQVUsSUFBSTtBQUNoQjtBQUNBLFVBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxzQkFBVCxFQUFuQixDQUZnQixDQUdoQjs7QUFDQSxNQUFBLFVBQVUsQ0FBQyxPQUFYLENBQW1CLFNBQVMsSUFBSTtBQUM1QixRQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksV0FBWixFQUF5QixTQUF6Qjs7QUFDQSxZQUFJLFNBQVMsR0FBRyx3QkFBZSxvQkFBZixDQUFvQyxTQUFwQyxDQUFoQjs7QUFDQSxRQUFBLFlBQVksQ0FBQyxXQUFiLENBQXlCLFNBQXpCO0FBQ0gsT0FKRDtBQUtBLFVBQUksZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBdkI7QUFFQSxNQUFBLGdCQUFnQixDQUFDLFdBQWpCLENBQTZCLFlBQTdCO0FBQ0gsS0FiRDtBQWNIOztBQWxCYyxDQUFuQjtlQXFCZSxVOzs7Ozs7Ozs7O0FDNUJmO0FBRUEsTUFBTSxjQUFjLEdBQUc7QUFDbkIsRUFBQSxvQkFBb0IsQ0FBQyxXQUFELEVBQWM7QUFDOUI7QUFDQSxRQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsc0JBQVQsRUFBbkI7QUFFQSxJQUFBLFlBQVksQ0FBQyxhQUFiLENBQTJCLFdBQTNCLEVBSjhCLENBSzlCOztBQUNBLFFBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQW5CO0FBQ0EsSUFBQSxZQUFZLENBQUMsV0FBYixJQUE0QixPQUE1QjtBQUNBLElBQUEsWUFBWSxDQUFDLFdBQWIsSUFBNEIsR0FBNUI7QUFDQSxRQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUFoQjtBQUNBLElBQUEsU0FBUyxDQUFDLFdBQVYsSUFBeUIsUUFBekI7QUFDQSxJQUFBLFNBQVMsQ0FBQyxXQUFWLElBQXlCLEdBQXpCO0FBQ0EsSUFBQSxTQUFTLENBQUMsV0FBVixJQUF5QixXQUFXLENBQUMsSUFBckM7QUFFQSxRQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUF0QjtBQUNBLElBQUEsZUFBZSxDQUFDLFdBQWhCLElBQStCLFVBQS9CO0FBQ0EsSUFBQSxlQUFlLENBQUMsV0FBaEIsSUFBK0IsR0FBL0I7QUFDQSxRQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUFuQjtBQUNBLElBQUEsWUFBWSxDQUFDLFdBQWIsSUFBNEIsV0FBNUI7QUFDQSxJQUFBLFlBQVksQ0FBQyxXQUFiLElBQTRCLEdBQTVCO0FBQ0EsSUFBQSxZQUFZLENBQUMsV0FBYixJQUE0QixXQUFXLENBQUMsT0FBeEM7QUFFQSxRQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixHQUF2QixDQUFsQjtBQUNBLElBQUEsV0FBVyxDQUFDLFdBQVosSUFBMkIsUUFBM0I7QUFDQSxJQUFBLFdBQVcsQ0FBQyxXQUFaLElBQTJCLEdBQTNCO0FBQ0EsUUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBZjtBQUNBLElBQUEsUUFBUSxDQUFDLFdBQVQsSUFBd0IsU0FBeEI7QUFDQSxJQUFBLFFBQVEsQ0FBQyxXQUFULElBQXdCLEdBQXhCO0FBQ0EsSUFBQSxRQUFRLENBQUMsV0FBVCxJQUF3QixXQUFXLENBQUMsS0FBcEM7QUFFQSxRQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUFuQjtBQUNBLElBQUEsWUFBWSxDQUFDLFdBQWIsSUFBNEIsT0FBNUI7QUFDQSxJQUFBLFlBQVksQ0FBQyxXQUFiLElBQTRCLEdBQTVCO0FBQ0EsUUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBaEI7QUFDQSxJQUFBLFNBQVMsQ0FBQyxXQUFWLElBQXlCLFFBQXpCO0FBQ0EsSUFBQSxTQUFTLENBQUMsV0FBVixJQUF5QixHQUF6QjtBQUNBLElBQUEsU0FBUyxDQUFDLFdBQVYsSUFBeUIsV0FBVyxDQUFDLElBQXJDO0FBRUEsSUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixTQUF6QjtBQUNBLElBQUEsWUFBWSxDQUFDLFdBQWIsQ0FBeUIsWUFBekI7QUFDQSxJQUFBLFlBQVksQ0FBQyxXQUFiLENBQXlCLFFBQXpCO0FBQ0EsSUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixTQUF6QjtBQUVBLFdBQU8sWUFBUDtBQUNIOztBQTdDa0IsQ0FBdkI7ZUFnRGUsYzs7Ozs7Ozs7Ozs7QUNsRGY7Ozs7QUFFQTtBQUVBLE1BQU0sYUFBYSxHQUFHO0FBQ2xCLEVBQUEsaUJBQWlCLEdBQUc7QUFDaEI7QUFDQSxJQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksbUJBQVo7QUFDQSxRQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixRQUF4QixDQUFiO0FBQ0EsSUFBQSxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsYUFBYSxDQUFDLGtCQUEvQztBQUNILEdBTmlCOztBQVFsQixFQUFBLGtCQUFrQixHQUFHO0FBQ2pCO0FBQ0EsSUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLG9CQUFaO0FBQ0EsUUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUMsS0FBdkQ7QUFDQSxRQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixjQUF4QixFQUF3QyxLQUEzRDtBQUNBLFFBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLGNBQXhCLEVBQXdDLEtBQXpEO0FBQ0EsUUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsY0FBeEIsRUFBd0MsS0FBeEQsQ0FOaUIsQ0FRakI7O0FBQ0EsUUFBSSxRQUFRLEdBQUc7QUFDWCxNQUFBLElBQUksRUFBRSxTQURLO0FBRVgsTUFBQSxPQUFPLEVBQUUsWUFGRTtBQUdYLE1BQUEsS0FBSyxFQUFFLFVBSEk7QUFJWCxNQUFBLElBQUksRUFBRTtBQUpLLEtBQWYsQ0FUaUIsQ0FnQmpCOztBQUNBLGtCQUFLLGVBQUwsQ0FBcUIsUUFBckI7QUFDSDs7QUExQmlCLENBQXRCO2VBNkJlLGE7Ozs7OztBQ2pDZjs7QUFDQTs7OztBQUVBLHFCQUFXLFdBQVg7O0FBQ0EsdUJBQWMsaUJBQWQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBNb2R1bGUgdGhhdCBjb250YWlucyBhbGwgQVBJIGZldGNoIGNhbGxzLlxuXG5jb25zdCBkYXRhID0ge1xuICAgIC8vIEZldGNoIGNhbGwgdGhhdCBncmFicyB0aGUgZW50cmllcyBmcm9tIHRoZSBBUEkuXG4gICAgZ2V0Sm91cm5hbEVudHJ5KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImdldEpvdXJuYWxFbnRyeVwiKVxuICAgICAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvZW50cmllc1wiKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgfSxcblxuICAgIGFkZEpvdXJuYWxFbnRyeShuZXdFbnRyeSkge1xuICAgIC8vIEZldGNoIGNhbGwgdGhhdCBhZGQgbmV3IGVudHJ5IG9iamVjdHMgdG8gdGhlIGRhdGFiYXNlLlxuICAgICAgICBjb25zb2xlLmxvZyhcImFkZEpvdXJuYWxFbnRyeVwiLCBuZXdFbnRyeSlcbiAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2VudHJpZXNcIiwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld0VudHJ5KVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGEiLCJpbXBvcnQgZGF0YSBmcm9tIFwiLi9kYXRhXCJcbmltcG9ydCBlbnRyeUNvbXBvbmVudCBmcm9tIFwiLi9lbnRyeUNvbXBvbmVudFwiXG5cbi8vIE1vZHVsZSB0aGF0IGFwcGVuZHMgbGlzdCBvZiBlbnRyaWVzIHRvIHRoZSBET00uXG5cbi8vIFRha2VzIGRhdGEgZnJvbSBkYXRhIG1vZHVsZSBhbmQgaXRlcmF0ZXMgb3ZlciB0byBjcmVhdGUgY29udGFjdCBjb21wb25lbnRzLlxuXG5jb25zdCBkb21FbnRyaWVzID0ge1xuLy8gRnVuY3Rpb24gdGhhdCBhcHBlbmRzIGVudHJpZXMgdG8gRE9NXG4gICAgYXBwZW5kVG9Eb20oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXBwZW5kVG9Eb21cIilcbiAgICAgICAgZGF0YS5nZXRKb3VybmFsRW50cnkoKVxuICAgICAgICAudGhlbihhbGxFbnRyaWVzID0+IHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIGRvY3VtZW50IGZyYWdtZW50IHRoYXQgZWFjaCBlbnRyeSB3aWxsIGFwcGVuZCB0by5cbiAgICAgICAgICAgIGxldCBsYXJnZURvY0ZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgICAgICAvLyBJdGVyYXRlIG92ZXIgZWFjaCBlbnRyeVxuICAgICAgICAgICAgYWxsRW50cmllcy5mb3JFYWNoKGVhY2hFbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbnRyeURhdGFcIiwgZWFjaEVudHJ5KVxuICAgICAgICAgICAgICAgIGxldCBlbnRyeUh0bWwgPSBlbnRyeUNvbXBvbmVudC5jcmVhdGVFbnRyeUNvbXBvbmVudChlYWNoRW50cnkpO1xuICAgICAgICAgICAgICAgIGxhcmdlRG9jRnJhZy5hcHBlbmRDaGlsZChlbnRyeUh0bWwpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbGV0IGRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVudHJ5TG9nXCIpO1xuXG4gICAgICAgICAgICBkaXNwbGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGxhcmdlRG9jRnJhZyk7XG4gICAgICAgIH0pXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tRW50cmllcyIsIi8vIFRoaXMgbW9kdWxlIGlzIGEgdGVtcGxhdGUgdGhhdCBjcmVhdGVzIGNvbnRhY3QgSFRNTCBjb21wb25lbnRzIHNvIHRoZSBlbnRyaWVzRE9NIG1vZHVsZSBjYW4gYXBwZW5kIHRoZW0gdG8gRE9NLlxuXG5jb25zdCBlbnRyeUNvbXBvbmVudCA9IHtcbiAgICBjcmVhdGVFbnRyeUNvbXBvbmVudChlbnRyeU9iamVjdCkge1xuICAgICAgICAvLyBGdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGRvY3VtZW50IGZyYWdtZW50IHdpdGggaW5mbyBmcm9tIGVudHJ5T2JqZWN0IHBhcmFtZXRlciB0aGF0IHdhcyBwYXNzZWQgaW50byBmdW5jdGlvbi5cbiAgICAgICAgbGV0IGVudHJ5RG9jRnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgICAgICBlbnRyeURvY0ZyYWcucXVlcnlTZWxlY3RvcihcIi5lbnRyeUxvZ1wiKTtcbiAgICAgICAgLy8gQ3JlYXRpbmcgdGhlIGVsZW1lbnRzIG9mIGVhY2ggb2YgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGVudHJ5IG9iamVjdHMuXG4gICAgICAgIGxldCBlbnRyeURhdGVUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIGVudHJ5RGF0ZVRhZy50ZXh0Q29udGVudCArPSBcIkRhdGU6XCJcbiAgICAgICAgZW50cnlEYXRlVGFnLnRleHRDb250ZW50ICs9IFwiIFwiXG4gICAgICAgIGxldCBlbnRyeURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIGVudHJ5RGF0ZS50ZXh0Q29udGVudCArPSBcIkRhdGU6IFwiXG4gICAgICAgIGVudHJ5RGF0ZS50ZXh0Q29udGVudCArPSBcIiBcIlxuICAgICAgICBlbnRyeURhdGUudGV4dENvbnRlbnQgKz0gZW50cnlPYmplY3QuZGF0ZVxuXG4gICAgICAgIGxldCBlbnRyeUNvbmNlcHRUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIGVudHJ5Q29uY2VwdFRhZy50ZXh0Q29udGVudCArPSBcIkNvbmNlcHQ6XCJcbiAgICAgICAgZW50cnlDb25jZXB0VGFnLnRleHRDb250ZW50ICs9IFwiIFwiXG4gICAgICAgIGxldCBlbnRyeUNvbmNlcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIGVudHJ5Q29uY2VwdC50ZXh0Q29udGVudCArPSBcIkNvbmNlcHQ6IFwiXG4gICAgICAgIGVudHJ5Q29uY2VwdC50ZXh0Q29udGVudCArPSBcIiBcIlxuICAgICAgICBlbnRyeUNvbmNlcHQudGV4dENvbnRlbnQgKz0gZW50cnlPYmplY3QuY29uY2VwdDtcblxuICAgICAgICBsZXQgZW50cnlMb2dUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZW50cnlMb2dUYWcudGV4dENvbnRlbnQgKz0gXCJFbnRyeTpcIlxuICAgICAgICBlbnRyeUxvZ1RhZy50ZXh0Q29udGVudCArPSBcIiBcIlxuICAgICAgICBsZXQgZW50cnlMb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZW50cnlMb2cudGV4dENvbnRlbnQgKz0gXCJFbnRyeTogXCJcbiAgICAgICAgZW50cnlMb2cudGV4dENvbnRlbnQgKz0gXCIgXCJcbiAgICAgICAgZW50cnlMb2cudGV4dENvbnRlbnQgKz0gZW50cnlPYmplY3QuZW50cnk7XG5cbiAgICAgICAgbGV0IGVudHJ5TW9vZFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbiAgICAgICAgZW50cnlNb29kVGFnLnRleHRDb250ZW50ICs9IFwiTW9vZDpcIlxuICAgICAgICBlbnRyeU1vb2RUYWcudGV4dENvbnRlbnQgKz0gXCIgXCJcbiAgICAgICAgbGV0IGVudHJ5TW9vZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbiAgICAgICAgZW50cnlNb29kLnRleHRDb250ZW50ICs9IFwiTW9vZDogXCJcbiAgICAgICAgZW50cnlNb29kLnRleHRDb250ZW50ICs9IFwiIFwiXG4gICAgICAgIGVudHJ5TW9vZC50ZXh0Q29udGVudCArPSBlbnRyeU9iamVjdC5tb29kXG5cbiAgICAgICAgZW50cnlEb2NGcmFnLmFwcGVuZENoaWxkKGVudHJ5RGF0ZSk7XG4gICAgICAgIGVudHJ5RG9jRnJhZy5hcHBlbmRDaGlsZChlbnRyeUNvbmNlcHQpO1xuICAgICAgICBlbnRyeURvY0ZyYWcuYXBwZW5kQ2hpbGQoZW50cnlMb2cpO1xuICAgICAgICBlbnRyeURvY0ZyYWcuYXBwZW5kQ2hpbGQoZW50cnlNb29kKTtcblxuICAgICAgICByZXR1cm4gZW50cnlEb2NGcmFnXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBlbnRyeUNvbXBvbmVudCIsImltcG9ydCBkYXRhIGZyb20gXCIuL2RhdGFcIlxuXG4vLyBNb2R1bGUgdGhhdCBjb250YWlucyB0aGUgZXZlbnRMaXN0ZW5lciBmb3IgdGhlIFwiU3VibWl0IEpvdXJuYWwgRW50cnlcIiBidXR0b24uXG5cbmNvbnN0IGV2ZW50TGlzdGVuZXIgPSB7XG4gICAgam91cm5hbEVudHJ5Q2xpY2soKSB7XG4gICAgICAgIC8vIEdyYWIgdGhlIGJ1dHRvbiBhbmQgYWRkcyBhbiBldmVudCBsaXN0ZW5lciB0byBydW4gc3VibWlzc2lvbkxpc3RlbmVyIEZ1bmN0aW9uLlxuICAgICAgICBjb25zb2xlLmxvZyhcImpvdXJuYWxFbnRyeUNMaWNrXCIpXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudExpc3RlbmVyLnN1Ym1pc3Npb25MaXN0ZW5lcilcbiAgICB9LFxuXG4gICAgc3VibWlzc2lvbkxpc3RlbmVyKCkge1xuICAgICAgICAvLyBGdW5jdGlvbiB0aGF0IHBhc3NlcyBhbiBvYmplY3QgYW5kIGl0J3MgdmFsdWUgaW50byB0aGUgQVBJLlxuICAgICAgICBjb25zb2xlLmxvZyhcInN1Ym1pc3Npb25MaXN0ZW5lclwiKVxuICAgICAgICBsZXQgZGF0ZUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqb3VybmFsRGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgbGV0IGNvbmNlcHRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uY2VwdFRvcGljXCIpLnZhbHVlO1xuICAgICAgICBsZXQgZW50cnlGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiam91cm5hbEVudHJ5XCIpLnZhbHVlO1xuICAgICAgICBsZXQgbW9vZEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb29kRWxlbWVudHNcIikudmFsdWU7XG5cbiAgICAgICAgLy8gQ3JlYXRlIG5ldyBvYmplY3QgdG8gcG9zdCB0byB0aGUgQVBJLlxuICAgICAgICBsZXQgbmV3RW50cnkgPSB7XG4gICAgICAgICAgICBkYXRlOiBkYXRlRmllbGQsXG4gICAgICAgICAgICBjb25jZXB0OiBjb25jZXB0RmllbGQsXG4gICAgICAgICAgICBlbnRyeTogZW50cnlGaWVsZCxcbiAgICAgICAgICAgIG1vb2Q6IG1vb2RGaWVsZFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIENhbGxzIHRoZSBmdW5jdGlvbiB0aGF0IHBhc3NlcyBhIG5ldyBlbnRyeSB0byB0aGUgZGF0YWJhc2UuXG4gICAgICAgIGRhdGEuYWRkSm91cm5hbEVudHJ5KG5ld0VudHJ5KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50TGlzdGVuZXIiLCJpbXBvcnQgZG9tRW50cmllcyBmcm9tIFwiLi9lbnRlcmllc0RPTVwiXG5pbXBvcnQgZXZlbnRMaXN0ZW5lciBmcm9tIFwiLi9ldmVudExpc3RlbmVyXCJcblxuZG9tRW50cmllcy5hcHBlbmRUb0RvbSgpO1xuZXZlbnRMaXN0ZW5lci5qb3VybmFsRW50cnlDbGljaygpO1xuIl19
