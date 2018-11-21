'use strict';

app.controller("day1Ctrl", function ($scope, $location) {
  
  $scope.title = "Day 1";

  console.log( '//////////////// Variable types ///////////////////' );
  /*** Variable types ***/
  /* var */
  var myVar = 'javascript';
  var _myVar = "javascript";
  var $myVar = 'javascript';
  /// variable name can't start with numbers
  // var 1myVar = 'javascript';
  var myVar = 'js';
  console.log( 'var myVar -> ' + myVar );

  /* let */
  let myLet = 123;
  /// using let is not posssible to declare the same variable again
  // let myLet = 456;
  for ( let i = 0; i < 3; i ++ ) {
    console.log( 'let i -> ' + i );
  }
  /// let is block scoped {}, no access outside
  // console.log( i );

  /* const */
  const myConst = true;
  /// same rules as let, except const cannot be assigned another value after declared and must be initialized
  // const myConst = false;
  // const init;
  const myArr = [ 'a', 'b', 'c' ];
  console.log( 'const myArr (before)-> ' + myArr );
  myArr[ 2 ] = 'd';
  console.log( 'const myArr (after)-> ' + myArr );
  const myObj = {
    model: 'qq--ww--ee',
    year: 2010
  };
  console.log( 'const myObj (before)-> ' + JSON.stringify( myObj ) );
  myObj.year = 2011;
  console.log( 'const myObj (before)-> ' + JSON.stringify( myObj ) );

  console.log( '//////////////// Data types ///////////////////' );
  /*** Data types ***/
  var variable = 'javascript';
  variable = 40;
  variable = 1.033;
  variable = -100;
  variable = false;
  variable = undefined;
  variable = [ 'html5', 'css3', 'js' ];
  variable = {
    id: '123',
    country: 'mexico'
  };
  variable = new Date();

  console.log( variable );
  console.log( typeof variable );

  console.log( '//////////////// Strings ///////////////////' );
  /*** Strings ***/
  var name = 'John';
  name = "John";
  var message = 'That\'s wrong';
  message = "That's wrong";
  // concatenation
  console.log( 'Hello ' + name + '!' );
  message += ' ' + name;
  console.log( message );
  var concatMethod = name.concat( '-', 'Hank' );
  console.log( concatMethod );
  // get length
  console.log( message + ' length is ' + message.length );
  // uppercase
  var uppercase = name.toUpperCase();
  console.log( uppercase );
  // lowercase
  var lowercase = name.toLowerCase();
  console.log( lowercase );
  // indexof, search in string, starts from 0, returns position
  // if not found returns -1 
  console.log( '"wrong" starts at position ' + message.indexOf( 'wrong' ) + ' in ' + message );
  // substring
  var str = 'hello world!';
  var substr = str.substring( 6, 11 );
  console.log( substr );
  // split
  var splitStr = str.split( ' ' );
  console.log( splitStr );
  // replace
  var rplcStr = str.replace( 'world', 'John' );
  console.log( rplcStr );

  console.log( '//////////////// Numbers ///////////////////' );
  /*** Numbers ***/
  var number1 = 20;
  var number2 = 60;
  var result = 0;
  // basic operations;
  result = number1 + number2;
  result = number1 - number2;
  result = number1 * number2;
  result = number1 / number2;
  result = number1 % number2;
  console.log( result );
  // round
  console.log( 'round: ' + Math.round( 3.5 ) );
  // force round up
  console.log( 'ceil: ' + Math.ceil( 3.3 ) );
  // force round down
  console.log( 'floor: ' + Math.floor( 3.3 ) );
  // get min from a list
  console.log( 'min: ' + Math.min( 4, 1, 6, 33 ) );
  // get max from a list
  console.log( 'max: ' + Math.max( 4, 1, 6, 33 ) );

  console.log( '//////////////// Comparison operators ///////////////////' );
  /*** Comparison operators ***/
  // equality operator
  var comparison = 2 == '2';
  console.log( '2 == "2" -> ' + comparison );
  // strict comparison operator ( also checks typeof )
  comparison = 2 === '2';
  console.log( '2 === "2" -> ' + comparison );
  // comparing null & undefined
  comparison = null == undefined;
  console.log( 'null == undefined -> ' + comparison );
  comparison = null === undefined;
  console.log( 'null === undefined -> ' + comparison );

  console.log( '//////////////// Converting strings to numbers ///////////////////' );
  /*** Converting strings to numbers ***/
  var num1 = '10';
  var num2 = 30;
  var result = num1 + num2;
  console.log( result );
  // Number
  result = Number( num1 ) + num2;
  // parseInt/parseFloat
  result = parseInt( num1 ) + num2;
  console.log( result );
  console.log( Number( true ) );
  console.log( Number( false ) );
  console.log( Number( null ) );

  console.log( '//////////////// Converting numbers to strings ///////////////////' );
  /*** Converting numbers to strings ***/
  // toFixed
  num1 = 3119.1021;
  console.log( num1.toFixed( 2 ) );
  // String
  console.log( String( num1 ) );

  console.log( '//////////////// Arrays ///////////////////' );
  /*** Arrays ***/
  // creating an array
  var data = [ 'Hello', 20, true, 'world', null ];
  console.log( data );
  console.log( data[ 3 ] );
  // array length
  console.log( 'data has ' + data.length + ' elements' );
  // check if it's array
  console.log( 'data is array: ' + Array.isArray( data ) );
  // find in array
  console.log( '"world" is at position ' + data.indexOf( 'world' ) );
  // add item at the end
  data.push( 200 );
  console.log( 'push', data );
  // add item at start
  data.unshift( -200 );
  console.log( 'unshift', data );
  // add item in the middle, ( position, num elements to remove, item )
  data.splice( 3, 0, 'new item' );
  console.log( 'splice', data );
  // remove item from the end
  data.pop();
  console.log( 'pop', data );
  // remove item from start
  data.shift();
  console.log( 'shift', data );
  // remove from the middle
  data.splice( 3, 1 );
  console.log( 'splice', data );
  // reverse
  data.reverse();
  console.log( 'reverse', data );
  // concatenate
  var arr1 = [ 'a', 'b', 'c' ];
  var arr2 = [ 'd', 'e' ];
  var arr3 = arr1.concat( arr2 );
  console.log( 'concat', arr3 );
  // sort
  var fruits = [ 'banana', 'apple', 'strawberry', 'orange' ];
  fruits.sort();
  console.log( 'sort', fruits );
  // sorting numbers
  var arrNum = [ 3, 100, 82, 10, 41, 50 ];
  3
  arrNum.sort();
  console.log( 'incorrect sort', arrNum );
  arrNum.sort( function( num1, num2 ) {
    return num1 - num2;
  } );
  console.log( 'correct sort', arrNum );
  // looping arrays
  // for
  for ( var i = 0; i < fruits.length; i ++ ) {
    console.log( 'fruit: ' + fruits[ i ] );
  }
  // forEach
  arr3.forEach( function( item, index ) {
    console.log( 'item: ' + item + ', index: ' + index );
  } );
  // map
  var shoppingCart = [
    { id: 1, product: 'TV' },
    { id: 2, product: 'Keyboard' },
    { id: 3, product: 'Phone' }
  ];
  var productNames = shoppingCart.map( function( productName ) {
    return productName.product;
  } );
  console.log( productNames );

  console.log( '//////////////// Objects ///////////////////' );
  /*** Objects ***/
  // declaration
  var person = {
    firstName: 'John',
    lastName: 'Hank',
    age: 37,
    email: 'john@mail.com',
    tasks: [ 'task1', 'task2' ],
    location: {
      city: 'Queretaro',
      country: 'Mexico'
    },
    sayHello: function() {
      return "Hello, I'm " + this.firstName;
    }
  };
  console.log( 'person object', person );
  // access properties
  console.log( 'person property:', person.lastName );
  // array of objects
  var customers = [
    { id: 1201, type: 'gold' },
    { id: 1402, type: 'platinum' },
    { id: 1109, type: 'gold' }
  ];
  for ( var i = 0; i < customers.length; i ++ ) {
    console.log( 'id: ' + customers[ i ].id + ' - type: ' + customers[ i ].type );
  }
  // looping objects
  for ( var key in person ) {
    console.log( key + ': ' + person[ key ] );
  }

  console.log( '//////////////// Functions ///////////////////' );
  /*** Functions ***/
  // declaration
  function hello( name ) {
    var msg = 'hello ' + name;
    return msg;
  }
  // calling a function, return value
  var calling = hello( 'John' );
  console.log( calling );
  // function expression
  var sum = function( num1, num2 ) {
    console.log( 'result: ' +  ( num1 + num2 ) );
  }
  sum( 2, 40 );
  // immediately-invoked function expressions (IIFEs)
  ( function( param ) {
    console.log( 'this is an ' + param );
  } ) ( 'IIEF' );
  // property methods
  var person = {
    firstName: 'John',
    lastName: 'Hank',
    sayHello: function() {
      console.log( "Hello, I'm " + this.firstName );
    }
  };
  person.sayHello();

  console.log( '//////////////// Dates ///////////////////' );
  /*** Dates ***/
  // get current date
  var today = new Date();
  console.log( 'today:', today );
  // specific date
  var birthday = new Date( 'January 7 1985' );
  birthday = new Date( '1-7-1985' );
  console.log( 'specific date:', birthday );
  // methods for Date
  console.log( 'getMonth:', today.getMonth() ); // month, starts from 0
  console.log( 'getDate:', today.getDate() ); // day of the month
  console.log( 'getDay:', today.getDay() ); // day of the week, starts from 0 ( sunday )
  console.log( 'getFullYear:', today.getFullYear() );
  console.log( 'getMinutes:', today.getMinutes() );
  console.log( 'getHours:', today.getHours() );
  today.setFullYear( 2000 );
  console.log( 'date updated:', today );

  console.log( '//////////////// Try, catch, finally ///////////////////' );
  /*** Try, catch, finally ***/
  try {
    undefinedFunction();
  } catch ( error ) {
    console.log( error );
  } finally {
    console.log( 'execute always...' );
  }

  function downloadFile() {
    console.log( 'downloading...' );

    setTimeout( function() {
      console.log( 'file downloaded...' );
    }, 5000 );
  }
  downloadFile();

  console.log( '//////////////// Window object ///////////////////' );
  /*** Window object ***/
  // window.console.log( 'log' );
  // window.alert( 'alert' );
  // window.prompt( 'prompt?' );
  // window.confirm( 'confirm?' );
  // get width and height of the window
  var height = window.outerHeight;
  var width = window.outerWidth;
  console.log( 'height: ' + height + ', width: ' + width );
  height = window.innerHeight;
  width = window.innerWidth;
  console.log( 'height: ' + height + ', width: ' + width );
  // location
  var URLlocation = window.location;
  console.log( 'host: ' + URLlocation.host );
  console.log( 'hostname: ' + URLlocation.hostname );
  console.log( 'port: ' + URLlocation.port );
  console.log( 'href: ' + URLlocation.href );
  // redirect
  // window.location.href = 'https://employeeintegration.dieboldnixdorf.com/index.jsp';
  // get params 
  // console.log( 'search: ' + URLlocation.search );
  console.log( $location.search() ); // angularjs

  console.log( '//////////////// DOM ///////////////////' );
  /*** DOM ***/
  console.log( '//////////////// Select one element ///////////////////' );
  // select one element
  var cardExample = document.getElementById( 'card-example' );
  console.log( cardExample );
  var cardExampleTitle = document.querySelector( '#card-example-title' );
  console.log( cardExampleTitle );
  var cardBody = document.querySelector( '.card-body' );
  console.log( cardBody );
  var h2 = document.querySelector( 'h2' );
  console.log( h2 );
  var cardBtn = document.querySelector( '#card-example .btn' );
  console.log( cardBtn );
  var child = document.querySelector( '.navbar-nav a:first-child' ); // last-child, nth-child(2)
  console.log( child );

  console.log( '//////////////// Select multiple elements ///////////////////' );
  // select multiple elements
  var listItems = document.getElementsByClassName( 'list-item' );
  console.log( listItems );
  listItems[ 0 ].style.color = 'red';
  var pres = document.getElementsByTagName( 'pre' );
  console.log( pres );
  // convert html collection to array
  var listItemsArray = Array.from( listItems );
  listItemsArray.forEach( function( item ) {
    console.log( item );
  } );
  listItems = document.querySelectorAll( '.list-item' );
  listItemsArray = Array.from( listItems );
  listItemsArray.forEach( function( item ) {
    console.log( item.textContent );
  } );

  console.log( '//////////////// Creating elements ///////////////////' );
  // creating elements
  // create button
  var newButton = document.createElement( 'button' );
  // adding attributes
  newButton.classList = 'btn btn-warning'; // className for one class
  newButton.type = 'button';
  // adding text
  newButton.innerText = 'Created with JS';
  // add element to the html
  document.getElementById( 'buttons-group' )
    .appendChild( newButton );

  console.log( '//////////////// Replacing elements ///////////////////' );
  // replacing elements
  // create button
  var repButton = document.createElement( 'button' );
  // adding attributes
  repButton.classList.add('btn', 'btn-danger' );
  repButton.type = 'button';
  // adding text
  repButton.appendChild( document.createTextNode( 'Replaced with JS' ) );
  // select button to replace
  var oldButton = document.querySelector( '#buttons-group-2 > button:nth-child(2)' );
  // replace
  document.getElementById( 'buttons-group-2' ).replaceChild( repButton, oldButton );

  console.log( '//////////////// Remove elements ///////////////////' );
  // remove elements
  var btns = document.querySelectorAll( '#buttons-group-3 > button' );
  btns[ 0 ].remove();
  // remove by children
  var btnGroup = document.querySelector( '#buttons-group-3' );
  var buttons = document.querySelectorAll( '#buttons-group-3 > button' );
  btnGroup.removeChild( buttons[ 1 ] ); 

  console.log( '//////////////// Classes, attributes ///////////////////' );
  // classes, attributes
  var alertExample = document.querySelector( '#alert-example' );
  // get classes as string
  console.log( 'classes as string: ' + alertExample.className );
  // get classes as DOM token list
  console.log( 'classes: ' + alertExample.classList );
  // get specific class
  console.log( 'get class: ' + alertExample.classList[ 0 ] );
  // add new class
  alertExample.classList.add( 'class-added-with-js' );
  // remove class
  alertExample.classList.remove( 'remove-class' );
  // attributes
  console.log( 'get attribute role: ' + alertExample.getAttribute( 'role' ) );
  console.log( 'get attribute id: ' + alertExample.getAttribute( 'id' ) );
  alertExample.setAttribute( 'role', 'new-role' );
  console.log( 'has attribute role: ' + alertExample.hasAttribute( 'role' ) );
  alertExample.removeAttribute( 'data-attr' );

  console.log( '//////////////// Event listeners ///////////////////' );
  // event listeners
  document.querySelector( '#event-listeners > .btn.btn-primary' )
    .addEventListener( 'click', function() {
      alert( 'clicked!' );
    } );
  // passing event as parameter
  document.getElementById( 'evt-example' )
    .addEventListener( 'click', function( event ) {
      console.log( 'event param', event );
      event.target.innerText = 'Updated!';
      event.target.classList.remove( 'btn-success' );
      event.target.classList.add( 'btn-danger' );
    } );
  // mouse events
  // click, examples above
  // double click
  document.getElementById( 'dblc-example' )
    .addEventListener( 'dblclick', function( event ) {
      event.target.style.color = 'brown';
      event.target.style.fontWeight = 'bold';
  } );
  // mouse enter
  document.getElementById( 'mousentr-example' )
    .addEventListener( 'mouseenter', function( event ) {
      event.target.innerText = 'Mouse entered/hovered';
  } );
  // mouse leave
  document.getElementById( 'mousentr-example' )
    .addEventListener( 'mouseleave', function( event ) {
      event.target.innerText = 'Mouse enter/hover';
  } );
  // mouse up
  document.getElementById( 'mouseup-example' )
    .addEventListener( 'mouseup', function( event ) {
      event.target.innerText = 'Released';
  } );
  // mouse up
  document.getElementById( 'mousedown-example' )
    .addEventListener( 'mousedown', function( event ) {
      event.target.innerText = 'Pressed';
  } );
  // form & input events
  // submit
  var formSubmit = document.getElementById( 'form-search' );
  var inputSearch = document.getElementById( 'input-search' );
  formSubmit.addEventListener( 'submit', function( e ) {
    e.preventDefault();
    document.getElementById( 'searched-text' ).innerText = inputSearch.value + ' ( submit event )';
  } );
  // input
  // inputSearch.addEventListener( 'keydown', keyEvent );
  inputSearch.addEventListener( 'keyup', keyEvent );
  // inputSearch.addEventListener( 'keypress', keyEvent );
  inputSearch.addEventListener( 'focus', printEvent );
  inputSearch.addEventListener( 'blur', printEvent );
  inputSearch.addEventListener( 'cut', printEvent );
  inputSearch.addEventListener( 'copy', printEvent );
  inputSearch.addEventListener( 'paste', printEvent );
  // inputSearch.addEventListener( 'input', printEvent ); // input event, includes all from above
  function keyEvent ( e ) {
    document.getElementById( 'searched-text' ).innerText = e.target.value;
  }

  function printEvent ( e ) {
    document.getElementById( 'event-searched-text' ).innerText = e.type;
  }

  console.log( '//////////////// Event bubbling & delegation ///////////////////' );
  // event bubbling
  var cardB = document.querySelector( '.card-bubbling' );
  var cardBodyB = document.querySelector( '.card-body-bubbling' );
  var cardButtonB = document.querySelector( '.btn-bubbling' );

  cardB.addEventListener( 'click', function( e ) {
    console.log( 'clicked card' );
    // fix with stop propagation
    // e.stopPropagation();
    // fix with delegation
    if ( e.target.classList.contains( 'btn-bubbling' ) ) {
      cardB.querySelector( '.card-body-bubbling' ).children[ 0 ].innerText = 'Updated!';
    }
  } );

  cardBodyB.addEventListener( 'click', function( e ) {
    console.log( 'clicked card body' );
    // fix with stop propagation
    // e.stopPropagation();
  } );

  cardButtonB.addEventListener( 'click', function( e ) {
    console.log( 'clicked card button' );
    // fix with stop propagation
    // e.stopPropagation();
  } );

  console.log( '//////////////// examples ///////////////////' );
  // example 1
  var customers = [
    {
      name: 'customer1',
      balance: 1000.13
    },
    {
      name: 'customer2',
      balance: 700.501
    },
    {
      name: 'customer3',
      balance: 1400.123
    },
    {
      name: 'customer4',
      balance: 900.71
    },
    {
      name: 'customer5',
      balance: 520.801
    },
    {
      name: 'customer6',
      balance: 30.12
    }
  ];

  addItemsToList( document.querySelector( '.orig-data' ), customers );

  document.getElementById( 'btn-map' ).addEventListener( 'click', function() {
    if ( document.querySelector( '.updt-data' ).children.length === 7 ) {
      return false;
    }

    // map, uppercase name and format balance
    var customersMap = customers.map( function( customer ) {
      return {
        name: customer.name.toUpperCase(),
        balance: '$' + customer.balance.toFixed( 2 )
      };
    } );

    // add new items to updated data list
    addItemsToList( document.querySelector( '.updt-data' ), customersMap );
  } );

  // example 2
  addItemsToList( document.querySelector( '.orig-data2' ), customers );
  // filter customers
  var filteredCustomers = customers.filter( function( customer ) {
    return customer.balance <= 999;
  } );

  // add filtered customers to list
  var filteredContainer = document.querySelector( '.filt-data' );
  var filtListItem;
  var itemColor;
  document.getElementById( 'btn-filter' ).addEventListener( 'click', function() {
    if ( filteredContainer.children.length === 5 ) {
      return false;
    }

    filteredCustomers.forEach( function( customer, index ) {
      filtListItem = document.createElement( 'li' );
      filtListItem.classList.add( 'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center' );
      itemColor = index % 2 === 0 ? 'list-group-item-success' : 'list-group-item-warning';
      filtListItem.classList.add( itemColor );
      filtListItem.innerHTML = customer.name +
        '<span class="badge badge-primary badge-pill">$' + customer.balance.toFixed( 2 ) + '</span>';
      filteredContainer.appendChild( filtListItem );
    } );
  } );

  function addItemsToList( listContainer, items ) {
    var newListItem;
    items.forEach( function( item ) {
      newListItem = document.createElement( 'li' );
      newListItem.classList.add( 'list-group-item' );
      newListItem.innerText = item.name + ' : ' + item.balance;
      listContainer.appendChild( newListItem );
    } );
  }
});
