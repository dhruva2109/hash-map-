import { LinkedList, Node } from "./linkedList.js";
class HashMap {
  constructor(capacity = 16, loadFactor = 0.75) {
    this.buckets = new Array(capacity);
    this.capacity = capacity;
    this.loadFactor = loadFactor;
  }
  hash(key, capacity = this.capacity) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
    }

    return hashCode;
  }
  set(key, value) {
    const index = this.hash(key);
    if (this.loadFactor <= this.keys().length / this.buckets.length) {
      console.log(this.keys().length / this.buckets.length);

      this.buckets = this.buckets.concat(new Array(this.capacity));

      this.capacity = this.buckets.length;
    }
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    } else if (this.buckets[index] === undefined) {
      this.buckets[index] = new LinkedList(new Node(value));
    } else {
      this.buckets[index].append(value);
    }
  }
  get(key) {
    const index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    if (this.buckets[index] === undefined) {
      return null;
    }
    if (this.buckets[index]) {
      return this.buckets[index].HEAD.value;
    } else {
      return null;
    }
  }
  has(key) {
    const index = this.hash(key);
    return this.buckets[index] ? true : false;
  }
  remove(key) {
    const index = this.hash(key);
    if (this.buckets[index]) {
      this.buckets[index] = undefined;
      return true;
    } else {
      return false;
    }
  }
  length() {
    return this.buckets.reduce((count, bucket) => count + (bucket ? 1 : 0), 0);
  }
  clear() {
    this.buckets.fill(undefined);
  }
  keys() {
    return this.buckets.filter((bucket) => bucket);
  }
  values() {
    return this.buckets
      .filter((bucket) => bucket)
      .map((bucket) => bucket.HEAD.value);
  }
  entries() {
    const entries = [];
    this.buckets.forEach(({ HEAD }, index) => {
      if (HEAD) {
        entries.push([index, HEAD.value]);
        while (HEAD.nextNode) {
          HEAD = HEAD.nextNode;
          entries.push([index, HEAD.value]);
        }
      }
    });
    return entries;
  }
}
const map = new HashMap();
console.log(map);
map.set("frgish", "fishy");
map.set("mrgilk", "head");
map.set("mgergilk", "butt");
map.set("pepsei", "ass");
map.set("prinpong", "lust");
map.set("pus6eh", "hard");
map.set("nerbgame", "sex");
map.set("permgpsi", "agrss");
map.set("bamwoobs", "hard");
map.set("blrglah", "sex");
map.set("blah blah", "ass");
map.set("lbosfvok", "asefcs");
map.set("bhkaoobs", "hwdard");
map.set("bl8wcah", "secwx");
map.set("blwr7fkah blah", "ass");
map.set("lbtook", "asefcs");
map.set("bhkoutdsvobs", "hwdard");
map.set("bl8soergwcah", "secwx");
map.set("blwqfkgkah blah", "ass");
map.set("ble8wcah", "secwx");
map.set("blrw7fkah blah", "ass");
map.set("lbt7toovk", "asefcs");
map.set("bhkp;otdsvobs", "hwdard");
map.set("bl8sergrvwcah", "secwx");
map.set("blwfkilgkah blah", "ass");
console.log(map.get("poor"));
console.log(map);
console.log(map.has("tounge"));

// console.log(map.keys());
console.log(map.entries());
