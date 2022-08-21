node = () => {
  return {
    value: null,
    next: null
  }
}

linkedList = (value) => {
  let start = node();
  start.value = value;
  let returnObj = {
    headNode: start,
    append: append = (value) => {
      let temp = node();
      temp.value = value;
      returnObj.at(returnObj.size() - 1).next = temp;
    },
    prepend: prepend = (value) => {
      let temp = node();
      temp.value = value;
      temp.next = returnObj.headNode;
      returnObj.headNode = temp;
    },
    size: size = () => {
      let temp = returnObj.headNode;
      let counter = 0;
      while (temp != null) {
        counter++;
        temp = temp.next;
      }
      return counter;
    },
    head: head = () => {
      return returnObj.headNode;
    },
    tail: tail = () => {
      let temp = returnObj.headNode;
      while (temp.next != null) {
        temp = temp.next;
      }
      return temp;
    },
    at: at = (index) => {
      let temp = returnObj.headNode;
      let counter = 0;
      while (temp != null) {
        if (counter == index) {
          return temp;
        }
        counter++;
        temp = temp.next;
      }
    },
    pop: pop = () => {
      returnObj.at(returnObj.size() - 2).next = null;
    },
    contains: contains = (value) => {
      let temp = returnObj.headNode;
      while (temp != null) {
        if (temp.value == value)
          return true;
        temp = temp.next;
      }
      return false;
    },
    find: find = (value) => {
      let temp = returnObj.headNode;
      let counter = 0;
      while (temp != null) {
        if (temp.value == value)
          return counter;
        counter++;
        temp = temp.next;
      }
      return null;
    },
    toString: toString = () => {
      let temp = returnObj.headNode;
      let returnString = '';
      while (temp != null) {
        returnString = returnString + `( ${temp.value} ) -> `;
        temp = temp.next;
      }
      returnString = returnString + `null`;
      return returnString;
    },
    insertAt: insertAt = (value, index) => {
      let temp = node();
      temp.value = value;
      temp.next = returnObj.at(index);
      returnObj.at(index - 1).next = temp;
    },
    removeAt: removeAt = (index) => {
      returnObj.at(index - 1).next = returnObj.at(index + 1);
    }
  }
  return returnObj;
}