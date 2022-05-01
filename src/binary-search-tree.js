const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

class BinarySearchTree {

  constructor () {
    this.Root = null ;
  }

  root() {
    return this.Root ;
  }

  add(data) {
    this.Root = adding(this.Root, data) ;
    function adding(node, value) {
      if ( node === null ) { return new Node(value) }
      if ( node.data === value ) { return node }
      if ( node.data < value ) { node.right = adding(node.right, value) }
      if ( node.data > value ) { node.left = adding(node.left, value) }
      return node ;
    }
  }

  has(data) {
    return check(this.Root, data) ;
    function check(node, value) {
      if ( node === null ) { return false }
      if ( node.data === value ) { return true }
      if ( node.data < value ) { return check(node.right, value) }
      if ( node.data  > value ) { return check(node.left, value) }
    }
  }

  find(data) {
    return check(this.Root, data) ;
    function check(node, value) {
      if ( node === null ) { return null }
      if ( node.data === value ) { return node }
      if ( node.data < value ) { return check(node.right, value) }
      if ( node.data  > value ) { return check(node.left, value) }
    }
  }

  remove(data) {
    this.Root = removing(this.Root, data) ;
    function removing(node, value) {
      if ( node === null ) { return null }
      if ( value < node.data ) {
        node.left = removing(node.left, value) ;
        return node ;
      }
      if ( value > node.data ) {
        node.right = removing(node.right, value) ;
        return node ;
      }
      if ( node.left === null && node.right === null ) { return null }
      if ( node.left === null ) { return node.right }
      if ( node.right === null ) { return node.left }
      let minRight = node.right ;
      while ( minRight.left ) { minRight = minRight.left }
      node.data = minRight.data ;
      node.right = removing(node.right, minRight.data) ;
      return node ;
    }
  }

  min() {
    let node = this.Root ;
    if ( node === null ) { return }
    while ( node.left ) { node = node.left }
    return node.data ;
  }

  max() {
    let node = this.Root ;
    if ( node === null ) { return }
    while ( node.right ) { node = node.right }
    return node.data ;
  }
}

module.exports = {
  BinarySearchTree
};