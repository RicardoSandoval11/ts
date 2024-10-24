"use strict";
(() => {
    const BracketCombinations = (num) => {
        function calculatePossibilities(open, closed) {
            if (open === 0 && closed === 0)
                return 1;
            var res = 0;
            if (open > 0)
                res += calculatePossibilities(open - 1, closed);
            if (closed > open)
                res += calculatePossibilities(open, closed - 1);
            return res;
        }
        // code goes here  
        return calculatePossibilities(num, num);
    };
    // Find insersection
    const FindIntersection = (strArr) => {
        const array1 = strArr[0].split(", ");
        const array2 = strArr[1].split(", ");
        const insersectionChars = [];
        array1.map(char => {
            const intersection = array2.find(c => c === char);
            if (intersection)
                insersectionChars.push(intersection);
            return char;
        });
        return insersectionChars.length > 0 ? insersectionChars.join(',') : "false";
    };
    // Bracket Matcher
    // Input: "(coder)(byte))"
    // Output: 0
    const BracketMatcher = (str) => {
        if (!str.includes("(") || !str.includes(")"))
            return 1;
        let counter = 0;
        const splittedString = str.split("");
        for (let i = 0; i < splittedString.length; i++) {
            if (splittedString[i] === '(')
                counter++;
            else if (splittedString[i] === ')')
                counter--;
        }
        return counter == 0 ? 1 : 0;
    };
    // Tree Constructor
    // Input: ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]
    // Output: true
    const TreeConstructor = (strArr) => {
        let mapValues = new Map();
        strArr.map(keyPair => {
            const splittedValues = keyPair.split(",");
            if (mapValues.get(splittedValues[1])) {
                mapValues.set(splittedValues[1], mapValues.get(splittedValues[1]) + 1);
            }
            else {
                mapValues.set(splittedValues[1], 1);
            }
        });
        const v = Array.from(mapValues.values());
        return !v.some(value => value > 2);
    };
    // Min Window Substring
    // Input: ["ahffaksfajeeubsne", "jefaa"]; ["aaffhkksemckelloe", "fhea"]
    // Output: aksfaje; affhkkse
    const MinWindowSubstring = (strArr) => {
        let possibleSubstrings = [];
        // Obtain substrings
        for (let i = 0; i < strArr[0].length; i++) {
            for (let j = i; j < strArr[0].length; j++) {
                if (j - i >= strArr[1].length) {
                    possibleSubstrings.push(strArr[0].substring(i, j));
                }
            }
        }
        // Get substrings that contains the target substring
        const targetChars = strArr[1].split("");
        possibleSubstrings = possibleSubstrings.filter(subs => {
            let isValid = true;
            for (let i = 0; i < targetChars.length; i++) {
                if (!subs.includes(targetChars[i]))
                    isValid = false;
                subs = subs.replace(targetChars[i], "");
            }
            return isValid;
        });
        possibleSubstrings.sort((a, b) => a.length - b.length);
        return possibleSubstrings[0];
    };
    // Add Two Numbers
    class ListNode {
        constructor(val, next) {
            this.val = (val === undefined ? 0 : val);
            this.next = (next === undefined ? null : next);
        }
    }
    function addTwoNumbers(l1, l2, carry = 0) {
        if (l1 == null && l2 == null && carry == 0)
            return null;
        let sum = 0;
        let residue = 0;
        let a = (l1 === null || l1 === void 0 ? void 0 : l1.val) || 0;
        let b = (l2 === null || l2 === void 0 ? void 0 : l2.val) || 0;
        sum = a + b + carry;
        residue = sum % 10;
        carry = Math.floor(sum / 10);
        return new ListNode(residue, addTwoNumbers((l1 === null || l1 === void 0 ? void 0 : l1.next) || null, (l2 === null || l2 === void 0 ? void 0 : l2.next) || null, carry));
    }
    // Median of Two Sorted Arrays
    // Input: nums1 = [1,3], nums2 = [2]
    // Output: 2.00000
    function findMedianSortedArrays(nums1, nums2) {
        let result = 0;
        let totalLength = nums1.length + nums2.length;
        let allValues = [...nums1, ...nums2];
        allValues.sort((a, b) => a - b);
        if (totalLength % 2 == 0) { // Sumar los numeros del medio
            result = (allValues[Math.ceil(totalLength / 2) - 1] + allValues[Math.ceil(totalLength / 2)]) / 2;
        }
        else { // Retornar el numero del medio
            result = allValues[Math.floor(totalLength / 2)];
        }
        return result;
    }
    // Max Points on a Line
    // points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
    // Output: 4
    function maxPoints(points) {
        let slopes = new Map();
        for (let i = 0; i < points.length; i++) {
            let pointA = points[i];
            for (let j = 0; j < points.length; j++) {
                let pointB = points[j];
                if (pointB[0] - pointA[0] != 0) {
                    let slope = (pointB[1] - pointA[1]) / (pointB[0] - pointA[0]);
                    if (slopes.has(slope)) {
                        slopes.set(slope, slopes.get(slope).add(pointA).add(pointB));
                    }
                    else {
                        slopes.set(slope, new Set([pointA, pointB]));
                    }
                }
            }
        }
        if (slopes.size == 0)
            return points.length;
        return Array.from(slopes.values()).sort((a, b) => b.size - a.size)[0].size;
    }
})();
