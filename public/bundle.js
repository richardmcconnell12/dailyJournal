(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const data = {
  getJournalEntry() {
    console.log("getJournalEntry");
    return fetch("http://localhost:8088/entries").then(response => response.json());
  },

  addJournalEntry(newEntry) {
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

const domEntries = {
  appendToDom() {
    console.log("appendToDom");

    _data.default.getJournalEntry().then(allEntries => {
      let largeDocFrag = document.createDocumentFragment();
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
const entryComponent = {
  createEntryComponent(entryObject) {
    let entryDocFrag = document.createDocumentFragment();
    entryDocFrag.querySelector(".entryLog");
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

const eventListener = {
  journalEntryClick() {
    console.log("journalEntryCLick");
    let button = document.getElementById("button");
    button.addEventListener("click", eventListener.submissionListener);
  },

  submissionListener() {
    console.log("submissionListener");
    let dateField = document.getElementById("journalDate").value;
    let conceptField = document.getElementById("conceptTopic").value;
    let entryField = document.getElementById("journalEntry").value;
    let moodField = document.getElementById("moodElements").value;
    let newEntry = {
      date: dateField,
      concept: conceptField,
      entry: entryField,
      mood: moodField
    };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RhdGEuanMiLCIuLi9zY3JpcHRzL2VudGVyaWVzRE9NLmpzIiwiLi4vc2NyaXB0cy9lbnRyeUNvbXBvbmVudC5qcyIsIi4uL3NjcmlwdHMvZXZlbnRMaXN0ZW5lci5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBLE1BQU0sSUFBSSxHQUFHO0FBQ1QsRUFBQSxlQUFlLEdBQUc7QUFDZCxJQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksaUJBQVo7QUFDQSxXQUFPLEtBQUssQ0FBQywrQkFBRCxDQUFMLENBQ04sSUFETSxDQUNELFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBVCxFQURYLENBQVA7QUFFSCxHQUxROztBQU9ULEVBQUEsZUFBZSxDQUFDLFFBQUQsRUFBVztBQUN0QixJQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksaUJBQVosRUFBK0IsUUFBL0I7QUFDQSxXQUFPLEtBQUssQ0FBQywrQkFBRCxFQUFrQztBQUMxQyxNQUFBLE1BQU0sRUFBRSxNQURrQztBQUUxQyxNQUFBLE9BQU8sRUFBRTtBQUNMLHdCQUFnQjtBQURYLE9BRmlDO0FBSzFDLE1BQUEsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFMLENBQWUsUUFBZjtBQUxvQyxLQUFsQyxDQUFMLENBT04sSUFQTSxDQU9ELFFBQVEsSUFBSSxRQUFRLENBQUMsSUFQcEIsQ0FBUDtBQVFIOztBQWpCUSxDQUFiO2VBb0JlLEk7Ozs7Ozs7Ozs7O0FDcEJmOztBQUNBOzs7O0FBRUEsTUFBTSxVQUFVLEdBQUc7QUFFZixFQUFBLFdBQVcsR0FBRztBQUNWLElBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxhQUFaOztBQUNBLGtCQUFLLGVBQUwsR0FDQyxJQURELENBQ00sVUFBVSxJQUFJO0FBRWhCLFVBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxzQkFBVCxFQUFuQjtB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YixDQUF5QixTQUF6QjtBQUVBLFdBQU8sWUFBUDtBQUNIOztBQTVDa0IsQ0FBdkI7ZUErQ2UsYzs7Ozs7Ozs7Ozs7QUMvQ2Y7Ozs7QUFFQSxNQUFNLGFBQWEsR0FBRztBQUNsQixFQUFBLGlCQUFpQixHQUFHO0FBQ2hCLElBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBLFFBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLFFBQXhCLENBQWI7QUFDQSxJQUFBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxhQUFhLENBQUMsa0JBQS9DO0FBQ0gsR0FMaUI7O0FBT2xCLEVBQUEsa0JBQWtCLEdBQUc7QUFDakIsSUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLG9CQUFaO0FBQ0EsUUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUMsS0FBdkQ7QUFDQSxRQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixjQUF4QixFQUF3QyxLQUEzRDtBQUNBLFFBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLGNBQXhCLEVBQXdDLEtBQXpEO0FBQ0EsUUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsY0FBeEIsRUFBd0MsS0FBeEQ7QUFFQSxRQUFJLFFBQVEsR0FBRztBQUNYLE1BQUEsSUFBSSxFQUFFLFNBREs7QUFFWCxNQUFBLE9BQU8sRUFBRSxZQUZFO0FBR1gsTUFBQSxLQUFLLEVBQUUsVUFISTtBQUlYLE1BQUEsSUFBSSxFQUFFO0FBSkssS0FBZjs7QUFPQSxrQkFBSyxlQUFMLENBQXFCLFFBQXJCO0FBQ0g7O0FBdEJpQixDQUF0QjtlQXlCZSxhOzs7Ozs7QUMzQmY7O0FBQ0E7Ozs7QUFFQSxxQkFBVyxXQUFYOztBQUNBLHVCQUFjLGlCQUFkIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgZGF0YSA9IHtcbiAgICBnZXRKb3VybmFsRW50cnkoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0Sm91cm5hbEVudHJ5XCIpXG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9lbnRyaWVzXCIpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICB9LFxuXG4gICAgYWRkSm91cm5hbEVudHJ5KG5ld0VudHJ5KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWRkSm91cm5hbEVudHJ5XCIsIG5ld0VudHJ5KVxuICAgICAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvZW50cmllc1wiLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3RW50cnkpXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24pXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGF0YSIsImltcG9ydCBkYXRhIGZyb20gXCIuL2RhdGFcIlxuaW1wb3J0IGVudHJ5Q29tcG9uZW50IGZyb20gXCIuL2VudHJ5Q29tcG9uZW50XCJcblxuY29uc3QgZG9tRW50cmllcyA9IHtcblxuICAgIGFwcGVuZFRvRG9tKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImFwcGVuZFRvRG9tXCIpXG4gICAgICAgIGRhdGEuZ2V0Sm91cm5hbEVudHJ5KClcbiAgICAgICAgLnRoZW4oYWxsRW50cmllcyA9PiB7XG5cbiAgICAgICAgICAgIGxldCBsYXJnZURvY0ZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICAgICAgICAgIGFsbEVudHJpZXMuZm9yRWFjaChlYWNoRW50cnkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW50cnlEYXRhXCIsIGVhY2hFbnRyeSlcbiAgICAgICAgICAgICAgICBsZXQgZW50cnlIdG1sID0gZW50cnlDb21wb25lbnQuY3JlYXRlRW50cnlDb21wb25lbnQoZWFjaEVudHJ5KTtcbiAgICAgICAgICAgICAgICBsYXJnZURvY0ZyYWcuYXBwZW5kQ2hpbGQoZW50cnlIdG1sKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGxldCBkaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbnRyeUxvZ1wiKTtcblxuICAgICAgICAgICAgZGlzcGxheUNvbnRhaW5lci5hcHBlbmRDaGlsZChsYXJnZURvY0ZyYWcpO1xuICAgICAgICB9KVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUVudHJpZXMiLCJjb25zdCBlbnRyeUNvbXBvbmVudCA9IHtcbiAgICBjcmVhdGVFbnRyeUNvbXBvbmVudChlbnRyeU9iamVjdCkge1xuICAgICAgICBsZXQgZW50cnlEb2NGcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgICAgIGVudHJ5RG9jRnJhZy5xdWVyeVNlbGVjdG9yKFwiLmVudHJ5TG9nXCIpO1xuXG4gICAgICAgIGxldCBlbnRyeURhdGVUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIGVudHJ5RGF0ZVRhZy50ZXh0Q29udGVudCArPSBcIkRhdGU6XCJcbiAgICAgICAgZW50cnlEYXRlVGFnLnRleHRDb250ZW50ICs9IFwiIFwiXG4gICAgICAgIGxldCBlbnRyeURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIGVudHJ5RGF0ZS50ZXh0Q29udGVudCArPSBcIkRhdGU6IFwiXG4gICAgICAgIGVudHJ5RGF0ZS50ZXh0Q29udGVudCArPSBcIiBcIlxuICAgICAgICBlbnRyeURhdGUudGV4dENvbnRlbnQgKz0gZW50cnlPYmplY3QuZGF0ZVxuXG4gICAgICAgIGxldCBlbnRyeUNvbmNlcHRUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIGVudHJ5Q29uY2VwdFRhZy50ZXh0Q29udGVudCArPSBcIkNvbmNlcHQ6XCJcbiAgICAgICAgZW50cnlDb25jZXB0VGFnLnRleHRDb250ZW50ICs9IFwiIFwiXG4gICAgICAgIGxldCBlbnRyeUNvbmNlcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIGVudHJ5Q29uY2VwdC50ZXh0Q29udGVudCArPSBcIkNvbmNlcHQ6IFwiXG4gICAgICAgIGVudHJ5Q29uY2VwdC50ZXh0Q29udGVudCArPSBcIiBcIlxuICAgICAgICBlbnRyeUNvbmNlcHQudGV4dENvbnRlbnQgKz0gZW50cnlPYmplY3QuY29uY2VwdDtcblxuICAgICAgICBsZXQgZW50cnlMb2dUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZW50cnlMb2dUYWcudGV4dENvbnRlbnQgKz0gXCJFbnRyeTpcIlxuICAgICAgICBlbnRyeUxvZ1RhZy50ZXh0Q29udGVudCArPSBcIiBcIlxuICAgICAgICBsZXQgZW50cnlMb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZW50cnlMb2cudGV4dENvbnRlbnQgKz0gXCJFbnRyeTogXCJcbiAgICAgICAgZW50cnlMb2cudGV4dENvbnRlbnQgKz0gXCIgXCJcbiAgICAgICAgZW50cnlMb2cudGV4dENvbnRlbnQgKz0gZW50cnlPYmplY3QuZW50cnk7XG5cbiAgICAgICAgbGV0IGVudHJ5TW9vZFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbiAgICAgICAgZW50cnlNb29kVGFnLnRleHRDb250ZW50ICs9IFwiTW9vZDpcIlxuICAgICAgICBlbnRyeU1vb2RUYWcudGV4dENvbnRlbnQgKz0gXCIgXCJcbiAgICAgICAgbGV0IGVudHJ5TW9vZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbiAgICAgICAgZW50cnlNb29kLnRleHRDb250ZW50ICs9IFwiTW9vZDogXCJcbiAgICAgICAgZW50cnlNb29kLnRleHRDb250ZW50ICs9IFwiIFwiXG4gICAgICAgIGVudHJ5TW9vZC50ZXh0Q29udGVudCArPSBlbnRyeU9iamVjdC5tb29kXG5cbiAgICAgICAgZW50cnlEb2NGcmFnLmFwcGVuZENoaWxkKGVudHJ5RGF0ZSk7XG4gICAgICAgIGVudHJ5RG9jRnJhZy5hcHBlbmRDaGlsZChlbnRyeUNvbmNlcHQpO1xuICAgICAgICBlbnRyeURvY0ZyYWcuYXBwZW5kQ2hpbGQoZW50cnlMb2cpO1xuICAgICAgICBlbnRyeURvY0ZyYWcuYXBwZW5kQ2hpbGQoZW50cnlNb29kKTtcblxuICAgICAgICByZXR1cm4gZW50cnlEb2NGcmFnXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBlbnRyeUNvbXBvbmVudCIsImltcG9ydCBkYXRhIGZyb20gXCIuL2RhdGFcIlxuXG5jb25zdCBldmVudExpc3RlbmVyID0ge1xuICAgIGpvdXJuYWxFbnRyeUNsaWNrKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImpvdXJuYWxFbnRyeUNMaWNrXCIpXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudExpc3RlbmVyLnN1Ym1pc3Npb25MaXN0ZW5lcilcbiAgICB9LFxuXG4gICAgc3VibWlzc2lvbkxpc3RlbmVyKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInN1Ym1pc3Npb25MaXN0ZW5lclwiKVxuICAgICAgICBsZXQgZGF0ZUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqb3VybmFsRGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgbGV0IGNvbmNlcHRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uY2VwdFRvcGljXCIpLnZhbHVlO1xuICAgICAgICBsZXQgZW50cnlGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiam91cm5hbEVudHJ5XCIpLnZhbHVlO1xuICAgICAgICBsZXQgbW9vZEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb29kRWxlbWVudHNcIikudmFsdWU7XG5cbiAgICAgICAgbGV0IG5ld0VudHJ5ID0ge1xuICAgICAgICAgICAgZGF0ZTogZGF0ZUZpZWxkLFxuICAgICAgICAgICAgY29uY2VwdDogY29uY2VwdEZpZWxkLFxuICAgICAgICAgICAgZW50cnk6IGVudHJ5RmllbGQsXG4gICAgICAgICAgICBtb29kOiBtb29kRmllbGRcbiAgICAgICAgfTtcblxuICAgICAgICBkYXRhLmFkZEpvdXJuYWxFbnRyeShuZXdFbnRyeSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBldmVudExpc3RlbmVyIiwiaW1wb3J0IGRvbUVudHJpZXMgZnJvbSBcIi4vZW50ZXJpZXNET01cIlxuaW1wb3J0IGV2ZW50TGlzdGVuZXIgZnJvbSBcIi4vZXZlbnRMaXN0ZW5lclwiXG5cbmRvbUVudHJpZXMuYXBwZW5kVG9Eb20oKTtcbmV2ZW50TGlzdGVuZXIuam91cm5hbEVudHJ5Q2xpY2soKTtcbiJdfQ==
