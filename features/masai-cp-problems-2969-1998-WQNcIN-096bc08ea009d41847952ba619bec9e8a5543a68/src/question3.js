class Warrior extends Character {
  constructor(name, health, attackPower, weapon) {
    super(name, health, attackPower);
    this.weapon = weapon;
  }

  attack(target) {
    target.health -= this.attackPower + this.weapon.attackBonus;
  }
}

class Weapon {
  constructor(name, attackBonus) {
    this.name = name;
    this.attackBonus = attackBonus;
  }
}

// Problem 10
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Problem 11
function divideArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

// Problem 12
function mergeArrays(arr1, arr2) {
  const merged = [...arr1, ...arr2];
  return Array.from(new Set(merged));
}

// Problem 13
function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

// Problem 14
function capitalizeString(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (char) => char.toUpperCase());
}

// Problem 15
function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[\W_]/g, "");
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}
