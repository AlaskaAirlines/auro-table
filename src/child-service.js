/**
 * Manages a collection of child items and notifies subscribers when it changes.
 * Components can add and remove items, subscribe to changes, and compare the current items with the previous ones.
 * @class ChildItemService
 */
export class ChildItemService {
  /**
   * An array that holds the tracked table elements.
   * @private
   */
  #items = [];

  /**
   * An array that holds the items from before the latest change.
   * @private
   */
  #previousItems = [];

  /**
   * An array that holds the subscribers for item changes.
   * @private
   */
  #subscribers = [];

  /**
   * Gets the current items.
   * @returns {Object[]} The array of items currently tracked.
   */
  get current() {
    return this.#items;
  }

  /**
   * Creates a service, and subscribes the callback if one is given.
   * @param {Object} [options] - The options for the service.
   * @param {Function} [options.callback] - The function to call when the items change.
   */
  constructor({callback} = {}) {
    if (typeof callback === "function") {
      this.subscribe(callback);
    }
  }

  /**
   * Subscribes to changes in the items array.
   * @param {Function} callback - The function to call when the items change.
   * @returns {Function} The function that unsubscribes the callback.
   * @throws {Error} If the callback isn't a function.
   */
  subscribe(callback) {
    if (typeof callback !== "function")
      throw new Error(
        "ChildItemService | subscribe: Callback must be a function",
      );
    this.#subscribers.push(callback);

    return () => this.unsubscribe(callback);
  }

  /**
   * Unsubscribes from changes in the items array.
   * @param {Function} callback - The function to stop calling when the items change.
   * @returns {Boolean} Always true.
   * @throws {Error} If the callback isn't a function.
   */
  unsubscribe(callback) {
    if (typeof callback !== "function")
      throw new Error(
        "ChildItemService | unsubscribe: Callback must be a function",
      );
    this.#subscribers = this.#subscribers.filter(
      (subscriber) => subscriber !== callback,
    );

    return true;
  }

  /**
   * Notifies all subscribers of changes in the items array.
   * @private
   */
  #notifySubscribers() {
    for (const callback of this.#subscribers)
      callback({
        items: this.#items,
        previousItems: this.#previousItems,
        addedItems: this.#items.filter(item => !this.#previousItems.includes(item)),
        removedItems: this.#previousItems.filter(item => !this.#items.includes(item))
      });
  }

  /**
   * Adds an item and notifies subscribers.
   * @param {Object} item - The item to add.
   * @returns {void}
   * @throws {Error} If the item isn't an object.
   */
  add(item) {
    if (typeof item !== "object" || item === null)
      throw new Error("ChildItemService | addItem: Item must be an object");

    this.#previousItems = this.#getPreviousItems();
    this.#items.push(item);
    this.#notifySubscribers();
  }

  /**
   * Adds multiple items and notifies subscribers.
   * @param {ArrayLike<any>} items - The items to add.
   * @returns {void}
   * @throws {Error} If the items aren't iterable, or are a string.
   */
  addMany(items) {
    if (
      !items ||
      typeof items[Symbol.iterator] !== "function" || // otherwise, check if it's iterable
      typeof items === "string" // technically string is iterable ;)
    ) {
      throw new Error(
        "ChildItemService | addMany: Items must be iterable (array, etc.)",
      );
    }

    this.#previousItems = this.#getPreviousItems();
    this.#items.push(...items);
    this.#notifySubscribers();
  }

  /**
   * Removes an item and notifies subscribers.
   * @param {Object} item - The item to remove.
   * @returns {void}
   * @throws {Error} If the item isn't an object.
   */
  remove(item) {
    if (typeof item !== "object" || item === null)
      throw new Error("ChildItemService | removeItem: Item must be an object");

    this.#previousItems = this.#getPreviousItems();
    this.#items = this.#items.filter((i) => i !== item);
    this.#notifySubscribers();
  }

  /**
   * Removes all items and notifies subscribers.
   * @returns {void}
   */
  clear() {
    this.#previousItems = this.#getPreviousItems();
    this.#items = [];
    this.#notifySubscribers();
  }

  /**
   * Gets an item by its index in the items array.
   * @param {Number} index - The 0-based index of the item.
   * @returns {Object} The item at that index, or undefined if there isn't one.
   */
  getItemByIndex(index) {
    return this.#items[index];
  }

  /**
   * Gets an item by its number (1-based index).
   * @param {Number} number - The 1-based position of the item.
   * @returns {Object} The item at that position.
   * @throws {Error} If there are no items, or the number isn't a number in range.
   */
  getItemByNumber(number) {
    if (
      this.#items.length === 0 ||
      typeof number !== "number" ||
      number < 0 ||
      number > this.#items.length
    ) {
      throw new Error(
        "ChildItemService | getItemByNumber: Number must be a valid index within the range of items.",
      );
    }
    return this.#items[number - 1];
  }

  /**
   * Gets the item before the given one, wrapping around to the last item from the first.
   * @param {Number} currentNumber - The 1-based position of the current item.
   * @returns {Object} The previous item.
   * @throws {Error} If the number isn't a number from 1 to the item count.
   */
  getPreviousItem(currentNumber) {
    if (
      typeof currentNumber !== "number" ||
      currentNumber < 1 ||
      currentNumber > this.#items.length
    ) {
      throw new Error(
        "ChildItemService | getPreviousItem: Index must be a valid number within the range of previous items.",
      );
    }

    let index = currentNumber - 2; // Convert to 0-based index
    index = index < 0 ? this.#items.length - 1 : index;

    return this.#items[index];
  }

  /**
   * Gets the item after the given one, wrapping around to the first item from the last.
   * @param {Number} currentNumber - The 1-based position of the current item.
   * @returns {Object} The next item.
   * @throws {Error} If the number isn't a number from 1 to the item count.
   */
  getNextItem(currentNumber) {
    if (
      typeof currentNumber !== "number" ||
      currentNumber < 1 ||
      currentNumber > this.#items.length
    ) {
      throw new Error(
        "ChildItemService | getNextItem: Index must be a valid number within the range of previous items.",
      );
    }

    let index = currentNumber; // Convert to 0-based index
    index = index >= this.#items.length ? 0 : index;

    return this.#items[index];
  }

  #getPreviousItems() {
    return [...this.#items];
  }
}
